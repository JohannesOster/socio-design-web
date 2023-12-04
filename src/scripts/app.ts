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
    elements: vertices
      .map((v) => ({ data: v }))
      .concat(
        links.map((l) => ({ data: { id: `${l.source}-${l.target}`, ...l } }))
      ),
    style: [
      { selector: "node", style: { label: "data(id)" } },
      {
        selector: "edge",
        style: {
          width: 2,
          "curve-style": "straight",
          "target-arrow-shape": "triangle",
        },
      },
    ],
    layout: { name: "cola", animate: false },
  });
});
