import * as d3 from "d3";
import { VERTEX_RADIUS, Vertex, generateRandomNetwork } from "./network";
import { fruchtermanReingold } from "./algorithms/furchtermanReingold";

const getDrawingAreaWithinContainer = (
  svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
) => {
  const { width, height } = svg.node()!.getBoundingClientRect();
  const padding = 50;
  const xUpperBound = width + 1;
  const yUpperBound = height + 1;
  return { yUpperBound, xUpperBound, padding };
};

document.addEventListener("DOMContentLoaded", () => {
  d3; // For some reason if d3 is not "called" before the select statement the next line throws a reference error
  const container = d3.select("#d3-container");
  const svg = container
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  const { yUpperBound, xUpperBound, padding } =
    getDrawingAreaWithinContainer(svg);
  let { vertices, links: linksData } = generateRandomNetwork(
    yUpperBound,
    xUpperBound,
    padding
  );

  vertices = fruchtermanReingold(
    vertices,
    linksData,
    xUpperBound - 2 * padding,
    yUpperBound - 2 * padding,
    50
  );

  // shift vertices
  vertices.forEach((v) => {
    v.cx += padding;
    v.cy += padding;
  });

  const g = svg.append("g");

  let offsetX = 0;
  let offsetY = 0;

  // line direction arrows
  svg
    .append("defs")
    .append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "-0 -5 10 10")
    .attr("refX", VERTEX_RADIUS)
    .attr("refY", 0)
    .attr("orient", "auto")
    .attr("markerWidth", VERTEX_RADIUS * 0.5)
    .attr("markerHeight", VERTEX_RADIUS * 0.5)
    .attr("xoverflow", "visible")
    .append("svg:path")
    .attr("d", "M 0,-5 L 10 ,0 L 0,5")
    .attr("fill", "black")
    .style("stroke", "none");

  const links = g
    .selectAll("line")
    .data(linksData)
    .enter()
    .append("line")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("x1", (d) => d.source.cx)
    .attr("y1", (d) => d.source.cy)
    .attr("x2", (d) => d.target.cx)
    .attr("y2", (d) => d.target.cy)
    .attr("marker-end", "url(#arrowhead)");

  g.selectAll("circle")
    .data(vertices)
    .enter()
    .append("circle")
    .attr("cx", (d) => d.cx)
    .attr("cy", (d) => d.cy)
    .attr("r", (d) => d.radius)
    .style("fill", (d) => d.color)
    .call(
      d3
        .drag<SVGCircleElement, Vertex>()
        .on("start", function (event) {
          const node = d3.select(this);
          offsetX = parseFloat(node.attr("cx")) - event.x;
          offsetY = parseFloat(node.attr("cy")) - event.y;
          d3.select(this).raise().classed("active", true);
        })
        .on("drag", function (event, d) {
          d3.select(this)
            .attr("cx", event.x + offsetX)
            .attr("cy", event.y + offsetY);

          links
            .filter((l) => l.source === d)
            .attr("x1", event.x + offsetX)
            .attr("y1", event.y + offsetY);
          links
            .filter((l) => l.target === d)
            .attr("x2", event.x + offsetX)
            .attr("y2", event.y + offsetY);
        })
    );

  svg.call(
    d3.zoom<SVGSVGElement, unknown>().on("zoom", ({ transform }) => {
      g.attr("transform", transform);
    })
  );
});
