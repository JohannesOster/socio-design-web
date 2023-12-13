import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import { defaultGraph } from "./defaultGraph";

cytoscape.use(cola);

document.addEventListener("DOMContentLoaded", () => {
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

  /** Add Nodes ============================= */
  const container = document.getElementById("cmd-palette");

  // Track mouse movement to be able to add new vertex where mouse is placed
  let mousePos = { x: 0, y: 0 };
  document.body.addEventListener("mousemove", (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
  });

  const convertToCytoscapeCoordinates = (mousePos: {
    x: number;
    y: number;
  }) => {
    const pan = cy.pan();
    const zoom = cy.zoom();
    return {
      x: (mousePos.x - pan.x) / zoom,
      y: (mousePos.y - pan.y) / zoom,
    };
  };

  let selectedNode = null as any;
  document.addEventListener("keydown", (event) => {
    if (!container) return;
    if (event.key === "a" && (event.metaKey || event.ctrlKey)) {
      // Open cmd-palette on cmd+a
      container.classList.toggle("hidden", false); // Remove 'hidden' class to show the input
      container.classList.toggle("block", true); // Add 'block' class
      document.getElementById("cmd-palette-input")?.focus();
    }

    if (event.key === "Escape") {
      // Close cmd-palette on escape
      if (!container.classList.contains("hidden")) {
        container.classList.add("hidden");
        container.classList.remove("block");
      }
    }

    if (event.key === "Enter" && !container.classList.contains("hidden")) {
      container.classList.add("hidden");
      container.classList.remove("block");
      const input = document.getElementById("cmd-palette-input");
      if (!input) return;
      const value = (input as HTMLInputElement).value;
      const cyPos = convertToCytoscapeCoordinates(mousePos);
      cy.add({
        group: "nodes",
        data: { id: value },
        position: cyPos,
      });
    }

    // - Save
    if (event.key === "s" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      saveGraph();
    }

    if (
      event.key === "Del" ||
      event.key === "Delete" ||
      event.key === "Backspace"
    ) {
      const elemensToDelete = cy.elements("node:selected");
      elemensToDelete.forEach((selectedNode) => {
        cy.remove(selectedNode.connectedEdges());
        cy.remove(selectedNode);
      });

      const edgesToDelete = cy.elements("edge:selected");
      edgesToDelete.forEach((selectedEdge) => {
        cy.remove(selectedEdge);
      });
    }
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

  /** Trigger Optimizat ============================= */
  const triggerBtn = document.getElementById("triggerBtn");
  if (triggerBtn) {
    triggerBtn.onclick = (event) => {
      cy.layout({ name: "cola", animate: false }).run();
      const nodes = cy.nodes();
      const selector = cy.$();

      // ========== Degreee Centrality | Concept: TBD.
      /**
       * Number of links incident upon a node.
       */
      const degreeCentrality = nodes.map((node) => {
        const dc = selector.dc({ root: node, directed: true });
        return {
          id: node.id(),
          in: dc.indegree,
          out: dc.outdegree,
        };
      });
      console.log(
        "========== Degreee Centrality | Concept: Connectivity (In & Out)"
      );
      console.log(degreeCentrality);

      const degreeCentralityNormalized = nodes.map((node) => {
        const dc = selector.dcn({ directed: true });
        return {
          id: node.id(),
          in: dc.indegree(node),
          out: dc.outdegree(node),
        };
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
          bc: bc.betweennessNormalized(node),
        }))
        .sort((a, b) => (a.bc < b.bc ? 1 : -1));
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
          cc: ccn.closeness(node),
        }))
        .sort((a, b) => (a.cc < b.cc ? 1 : -1));
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
          pr: pr.rank(node),
        }))
        .sort((a, b) => (a.pr < b.pr ? 1 : -1));
      console.log("========== Page Rank | Concept: TBD");
      console.log(pageRanks);
    };
  }

  /** SAVING ====================================  */
  function saveGraph() {
    console.log("saved");
    const elements = cy.json().elements; // Get the current state of the graph
    localStorage.setItem("cyGraph", JSON.stringify(elements)); // Save it as a string
  }

  function loadGraph() {
    const savedData = localStorage.getItem("cyGraph");
    if (savedData) {
      const json = JSON.parse(savedData); // Parse it back to JSON
      return Object.keys(json).length ? json : null;
    }

    return null; // or return a default state if nothing is saved
  }
});
