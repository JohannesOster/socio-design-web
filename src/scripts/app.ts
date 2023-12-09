import cytoscape from "cytoscape";
import cola from "cytoscape-cola";

const vertices = [
  { id: "louisa" },
  { id: "peter" },
  { id: "frederic" },
  { id: "idris" },
  { id: "anna" },
  { id: "beatrice" },
  { id: "davic" },
  { id: "eric" },
  { id: "cecilia" },
  { id: "johanna" },
  { id: "travis" },
  { id: "sadio" },
  { id: "hannah" },
];

const links = [
  { source: "louisa", target: "peter" },
  { source: "peter", target: "louisa" },
  { source: "frederic", target: "peter" },
  { source: "frederic", target: "davic" },
  { source: "idris", target: "frederic" },
  { source: "idris", target: "eric" },
  { source: "anna", target: "idris" },
  { source: "anna", target: "eric" },
  { source: "beatrice", target: "davic" },
  { source: "beatrice", target: "idris" },
  { source: "beatrice", target: "cecilia" },
  { source: "davic", target: "beatrice" },
  { source: "davic", target: "travis" },
  { source: "eric", target: "davic" },
  { source: "eric", target: "johanna" },
  { source: "eric", target: "travis" },
  { source: "cecilia", target: "beatrice" },
  { source: "cecilia", target: "hannah" },
  { source: "johanna", target: "davic" },
  { source: "johanna", target: "sadio" },
  { source: "johanna", target: "idris" },
  { source: "cecilia", target: "beatrice" },
  { source: "cecilia", target: "hannah" },
  { source: "sadio", target: "johanna" },
  { source: "hannah", target: "davic" },
];

cytoscape.use(cola);

document.addEventListener("DOMContentLoaded", () => {
  const cy = cytoscape({
    container: document.getElementById("cy-container"),
    minZoom: 0.25,
    maxZoom: 8,
    elements: vertices
      .map((v) => ({ data: v }))
      .concat(
        links.map((l) => ({ data: { id: `${l.source}-${l.target}`, ...l } }))
      ),
    style: [
      {
        selector: "node",
        style: { label: "data(id)", "background-color": "#273541" },
      },
      {
        selector: "edge",
        style: {
          width: 2,
          "line-color": "#273541",
          "source-arrow-color": "#273541",
          "target-arrow-color": "#273541",
          "curve-style": "straight",
          "target-arrow-shape": "triangle",
        },
      },
    ],
    layout: { name: "cola", animate: false },
  });

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

  /**================================== */
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

  document.addEventListener("keydown", (event) => {
    if (!container) return;
    if (event.key === "a" && event.metaKey) {
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
      console.log(`New vertex with value: ${value}`);
      const cyPos = convertToCytoscapeCoordinates(mousePos);
      console.log(cyPos);
      cy.add({
        group: "nodes",
        data: { id: value },
        position: cyPos,
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
});
