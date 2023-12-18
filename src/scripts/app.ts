import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import { defaultGraph } from "./defaultGraph";

cytoscape.use(cola);

document.addEventListener("DOMContentLoaded", () => {
  const cy = initCytoscape();
  setupCommandPalette(cy);
  setupEdgeDrawingHandler(cy);
  setUpOptimizer(cy);
  setUpAnalyzerr(cy);
});

const initCytoscape = () => {
  const cy = cytoscape({
    container: document.getElementById("cy-container"),
    minZoom: 0.25,
    maxZoom: 8,
    elements: loadGraph() || defaultGraph,
    layout: { name: "preset" },
    style: [
      {
        selector: "node",
        style: { label: "data(id)" },
      },
      {
        selector: "node.highlight",
        style: { "background-color": "#273541" },
      },
      {
        selector: "edge",
        style: {
          width: 2,
          "curve-style": "straight",
          "target-arrow-shape": "triangle",
        },
      },
    ],
  });

  return cy;
};

const setupCommandPalette = (cy: cytoscape.Core) => {
  const CMD_PALETTE_CONTAINER_ID = "cmd-palette";
  const container = document.getElementById(CMD_PALETTE_CONTAINER_ID);
  if (!container) {
    throw new Error(
      `Missing cmd palette container with id: ${CMD_PALETTE_CONTAINER_ID}`
    );
  }

  // Track mouse movement to be able to add new vertex where mouse is placed
  let mousePos = { x: 0, y: 0 };
  document.body.addEventListener("mousemove", (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
  });

  type Position = { x: number; y: number };
  const convertToCytoscapeCoordinates = (mousePos: Position) => {
    const pan = cy.pan();
    const zoom = cy.zoom();
    return {
      x: (mousePos.x - pan.x) / zoom,
      y: (mousePos.y - pan.y) / zoom,
    };
  };

  const cmdMap = {
    "cmd+a": () => {
      // Open cmd-palette on cmd+a
      container.classList.toggle("hidden", false); // Remove 'hidden' class to show the input
      container.classList.toggle("block", true); // Add 'block' class
      document.getElementById("cmd-palette-input")?.focus();
    },
    Escape: () => {
      // Close cmd-palette on escape
      if (container.classList.contains("hidden")) return;
      container.classList.add("hidden");
      container.classList.remove("block");
    },
    del: () => {
      const elemensToDelete = cy.elements("node:selected");
      elemensToDelete.forEach((selectedNode) => {
        cy.remove(selectedNode.connectedEdges());
        cy.remove(selectedNode);
      });

      const edgesToDelete = cy.elements("edge:selected");
      edgesToDelete.forEach((selectedEdge) => {
        cy.remove(selectedEdge);
      });
    },
    Enter: () => {
      if (container.classList.contains("hidden")) return;
      container.classList.add("hidden");
      container.classList.remove("block");
      const input = document.getElementById("cmd-palette-input");
      if (!input) return;
      const value = (input as HTMLInputElement).value;
      const cyPos = convertToCytoscapeCoordinates(mousePos);
      cy.add({ group: "nodes", data: { id: value }, position: cyPos });
    },
    "cmd+s": (event: KeyboardEvent) => {
      event.preventDefault();
      const elements = cy.json().elements; // Get the current state of the graph
      saveGraph(elements);
    },
  } as { [cmdKey: string]: (event: KeyboardEvent) => void };

  const constructCmdKey = ({ key, metaKey, ctrlKey }: KeyboardEvent) => {
    let cmd = "";
    if (metaKey || ctrlKey) cmd += "cmd+";

    cmd += key;

    // unify delete
    cmd = cmd.replace("Del", "del");
    cmd = cmd.replace("Delete", "del");
    cmd = cmd.replace("Backspace", "del");

    // remove "Meta" when cmd only is pressed
    cmd = cmd.replace("Meta", "");

    return cmd;
  };

  document.addEventListener("keydown", (event) => {
    const cmdKey = constructCmdKey(event);
    const cmd = cmdMap[cmdKey];
    if (cmd) cmd(event);
  });

  document.addEventListener("click", (event) => {
    // Close cmd-palette on outside click
    const input = document.getElementById("cmd-palette-input");
    if (!(container && input)) return;

    if (
      !input.contains(event.target as any) &&
      !container.classList.contains("hidden")
    ) {
      container.classList.add("hidden");
      container.classList.remove("block");
    }
  });
};

const setupEdgeDrawingHandler = (cy: cytoscape.Core) => {
  /** Draw edges ============================= */
  let tempEdge = null as any;
  let isDrawing = false as any;
  let sourceNode = null as any;
  let ghostNode = null as any;
  let targetNode = null as any;
  let highlightedNode = null as any;

  cy.on("mousedown", "node", (event) => {
    if (event.originalEvent.shiftKey) {
      isDrawing = true;
      sourceNode = event.target;

      sourceNode.ungrabify();

      ghostNode = cy.add({
        group: "nodes",
        data: { id: "ghost-node" },
        position: event.position,
        classes: ["ghost-node"], // CSS class for ghost node
        style: {
          width: 1,
          height: 1,
          opacity: 0,
        },
      });

      tempEdge = cy.add({
        group: "edges",
        data: {
          id: "temp-edge",
          source: sourceNode.id(),
          target: ghostNode.id(),
        },
        style: { "line-style": "dashed" },
        classes: ["temporary-edge"], // CSS class for styling the temporary edge
      });

      cy.boxSelectionEnabled(false);
    }
  });

  cy.on("mousemove", (event) => {
    const THRESHHOLD = 30;
    const isClose = (node1: any, node2: any) => {
      let p1 = node1.position();
      let p2 = node2.position();

      const distance = Math.sqrt(
        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
      );

      return distance < THRESHHOLD;
    };

    if (isDrawing && tempEdge) {
      ghostNode.position(event.position);

      let closestNode = cy
        .nodes()
        .filter((node) => {
          if (node.id() === sourceNode.id()) return false;
          if (node.id() === ghostNode.id()) return false;
          if (isClose(node, ghostNode)) {
            if (highlightedNode && highlightedNode.id()) {
              if (highlightedNode.id() === node.id()) {
                return true;
              }
            }

            highlightedNode = node;
            node.addClass("highlight");
            return true;
          } else {
            node.removeClass("highlight");
          }

          return false;
        })
        .first();

      if (closestNode.id()) {
        targetNode = closestNode;
      } else {
        highlightedNode = null;
        targetNode = ghostNode;
      }
    }
  });

  cy.on("mouseup", (event) => {
    if (isDrawing && tempEdge) {
      if (targetNode !== cy && targetNode.isNode()) {
        // Create permanent edge
        cy.add({
          group: "edges",
          data: {
            source: sourceNode.id(),
            target: targetNode.id(),
          },
        });
      }

      cy.remove(ghostNode);
      sourceNode.grabify();
      cy.boxSelectionEnabled(true);

      // Remove temporary edge
      tempEdge.remove();
      tempEdge = null;
      isDrawing = false;
      sourceNode = null;
      highlightedNode?.removeClass("highlight");
      highlightedNode = null;
    }
  });
};

const setUpOptimizer = (cy: cytoscape.Core) => {
  /** Trigger Optimization ============================= */
  const triggerBtn = document.getElementById("optimizeBtn");
  if (triggerBtn) {
    triggerBtn.onclick = (event) => {
      cy.layout({ name: "cola", animate: false }).run();
    };
  }
};

const setUpAnalyzerr = (cy: cytoscape.Core) => {
  /** Trigger Optimization ============================= */
  const triggerBtn = document.getElementById("analyzeBtn");

  // ========= Toggle Metric Containers
  const degreeCentralityContainer =
    document.getElementById("degree-centrality")!;
  const degreeCentralityBody =
    degreeCentralityContainer.getElementsByTagName("ul")[0]!;

  degreeCentralityContainer.onclick = () => {
    degreeCentralityBody.hidden = !degreeCentralityBody.hidden;
  };

  const degreeCentralityNormalizedContainer = document.getElementById(
    "degree-centrality-normalized"
  )!;
  const degreeCentralityNormalizedBody =
    degreeCentralityNormalizedContainer.getElementsByTagName("ul")[0]!;

  degreeCentralityNormalizedContainer.onclick = () => {
    degreeCentralityNormalizedBody.hidden =
      !degreeCentralityNormalizedBody.hidden;
  };

  const betweennessCentralityNormalizedContainer = document.getElementById(
    "betweenness-centrality-normalized"
  )!;
  const betweennessCentralityNormalizedBody =
    betweennessCentralityNormalizedContainer.getElementsByTagName("ul")[0]!;

  betweennessCentralityNormalizedContainer.onclick = () => {
    betweennessCentralityNormalizedBody.hidden =
      !betweennessCentralityNormalizedBody.hidden;
  };

  const closenessCentralityNormalizedContainer = document.getElementById(
    "closeness-centrality-normalized"
  )!;
  const closenessCentralityNormalizedBody =
    closenessCentralityNormalizedContainer.getElementsByTagName("ul")[0]!;

  closenessCentralityNormalizedContainer.onclick = () => {
    closenessCentralityNormalizedBody.hidden =
      !closenessCentralityNormalizedBody.hidden;
  };

  const pageRankContainer = document.getElementById("page-rank")!;
  const pageRankBody = pageRankContainer.getElementsByTagName("ul")[0]!;

  pageRankContainer.onclick = () => {
    pageRankBody.hidden = !pageRankBody.hidden;
  };

  const round = (value: number, decimals: number) => {
    const shifted = value * Math.pow(10, decimals);
    return Number(
      (Math.round(shifted) / Math.pow(10, decimals)).toFixed(decimals)
    );
  };

  if (triggerBtn) {
    triggerBtn.onclick = () => {
      const nodes = cy.nodes();
      const selector = cy.$();
      // ========== Degreee Centrality | Concept: TBD.
      /**
       * Number of links incident upon a node.
       */
      const degreeCentrality = nodes
        .map((node) => {
          const dc = selector.dc({ root: node, directed: true });
          return {
            id: node.id(),
            in: dc.indegree,
            out: dc.outdegree,
          };
        })
        .sort((a, b) => (a.id > b.id ? 1 : -1));

      degreeCentralityBody.innerHTML = "";
      degreeCentrality.forEach((item) => {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = JSON.stringify(item); // Set its text content
        degreeCentralityBody.appendChild(li); // Append it to the <ul>
      });

      console.log(
        "========== Degreee Centrality | Concept: Connectivity (In & Out)"
      );
      console.log(degreeCentrality);

      const degreeCentralityNormalized = nodes
        .map((node) => {
          const dc = selector.dcn({ directed: true });
          return {
            id: node.id(),
            in: round(dc.indegree(node), 3),
            out: round(dc.outdegree(node), 3),
          };
        })
        .sort((a, b) => (a.id > b.id ? 1 : -1));

      degreeCentralityNormalizedBody.innerHTML = "";
      degreeCentralityNormalized.forEach((item) => {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = JSON.stringify(item); // Set its text content
        degreeCentralityNormalizedBody.appendChild(li); // Append it to the <ul>
      });

      console.log(
        "========== Normalized Degreee Centrality | Concept: Relative connectivity (In & Out)."
      );
      console.log(degreeCentralityNormalized);

      // ========== Normalized Betweenness Centrality | Concept: Gatekeepers
      /**
       * For every pair of vertices, there exists at least one shortest path between the vertices
       * such that either the number of edges that the path passes through (for unweighted graphs)
       * or the sum of the weights of the edges (for weighted graphs) is minimized.
       * The betweenness centrality for each vertex is the number of these shortest paths that pass
       * through the vertex.
       *
       */
      const bc = selector.bc();
      const betweenness = nodes
        .map((node) => ({
          id: node.id(),
          bc: round(bc.betweennessNormalized(node), 3),
        }))
        .sort((a, b) => (a.bc < b.bc ? 1 : -1));

      betweennessCentralityNormalizedBody.innerHTML = "";
      betweenness.forEach((item) => {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = JSON.stringify(item); // Set its text content
        betweennessCentralityNormalizedBody.appendChild(li); // Append it to the <ul>
      });

      console.log(
        "========== Normalized Betweenness Centrality | Concept: Gatekeepers"
      );
      console.log(betweenness);

      // ========== Normalized Closeness Centrality | Concept: Central / excluded figures
      /**
       * The reciprocal of the sum of the length of the shortest paths between the node
       * and all other nodes in the graph. Thus, the more central a node is, the closer it is to all
       * other nodes.
       *
       */
      const ccn = selector.ccn();
      const closenessCentrality = nodes
        .map((node) => ({
          id: node.id(),
          cc: round(ccn.closeness(node), 3),
        }))
        .sort((a, b) => (a.cc < b.cc ? 1 : -1));

      closenessCentralityNormalizedBody.innerHTML = "";
      closenessCentrality.forEach((item) => {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = JSON.stringify(item); // Set its text content
        closenessCentralityNormalizedBody.appendChild(li); // Append it to the <ul>
      });

      console.log(
        "========== Normalized Closeness Centrality | Concept: Central / excluded figures"
      );
      console.log(closenessCentrality);

      // ========== Normalized Page Rank | Concept: Relative Importance
      /**
       * A higher PageRank value indicates a higher relative importance or influence of a node
       * within the network
       */
      const pr = cy.elements().pageRank();
      const pageRanks = nodes
        .map((node) => ({
          id: node.id(),
          pr: round(pr.rank(node), 3),
        }))
        .sort((a, b) => (a.pr < b.pr ? 1 : -1));
      pageRankBody.innerHTML = "";
      pageRanks.forEach((item) => {
        const li = document.createElement("li"); // Create a new <li> element
        li.textContent = JSON.stringify(item); // Set its text content
        pageRankBody.appendChild(li); // Append it to the <ul>
      });
      console.log("========== Page Rank | Concept: TBD");
      console.log(pageRanks);

      cy.resize();
    };
  }
};

const saveGraph = (elements: object) => {
  localStorage.setItem("cyGraph", JSON.stringify(elements));
  console.log("Succesfully saved graph!");
};

const loadGraph = () => {
  const savedData = localStorage.getItem("cyGraph");
  if (!savedData) return null;
  const json = JSON.parse(savedData);
  return Object.keys(json).length ? json : null;
};
