import cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import { theme } from "./theme";

interface InitGraphOptions {
  initialElements?: cytoscape.ElementDefinition[];
}

cytoscape.use(cola);

export const initCytoscape = ({ initialElements = [] }: InitGraphOptions) => {
  const cy = cytoscape({
    container: document.getElementById("cy-container"),
    minZoom: 0.25,
    maxZoom: 8,
    elements: initialElements,
    layout: { name: "preset" },
    style: [
      {
        selector: "node",
        style: {
          label: "data(id)",
          color: theme.node.default.color,
          backgroundColor: theme.node.default.backgroundColor,
          overlayColor: theme.node.default.overlayColor,
          overlayShape: theme.node.default.overlayShape,
        },
      },
      {
        selector: "node:active",
        style: { overlayOpacity: theme.node.active.overlayOpacity },
      },
      {
        selector: "node:selected",
        style: {
          backgroundColor: theme.node.selected.backgroundColor,
          overlayColor: theme.node.selected.backgroundColor,
          color: theme.node.selected.color,
        },
      },

      {
        selector: "node.highlight", // custom class when new edge is close to target node
        style: {
          backgroundColor: theme.node.highlighed.backgroundColor,
          color: theme.node.highlighed.color,
        },
      },

      {
        selector: "edge",
        style: {
          width: theme.edge.default.strokeWidth,
          lineColor: theme.edge.default.strokeColor,
          curveStyle: theme.edge.default.curveStyle,
          targetArrowShape: theme.edge.default.arrowShape,
          targetArrowColor: theme.edge.default.strokeColor,
          overlayColor: theme.edge.default.overlayColor,
        },
      },
      {
        selector: "edge:active",
        style: { overlayOpacity: theme.edge.active.overlayOpacity },
      },
      {
        selector: "edge:selected",
        style: {
          lineColor: theme.edge.selected.strokeColor,
          targetArrowColor: theme.edge.selected.strokeColor,
        },
      },
    ],
  });

  return cy;
};
