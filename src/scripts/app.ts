import * as d3 from "d3";
import { Vertex, generateRandomNetwork } from "./network";

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
  const container = d3.select("#d3-container");
  const svg = container
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  const { yUpperBound, xUpperBound, padding } =
    getDrawingAreaWithinContainer(svg);
  const { vertices, links: linksData } = generateRandomNetwork(
    yUpperBound,
    xUpperBound,
    padding
  );

  const g = svg.append("g");

  let offsetX = 0;
  let offsetY = 0;

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
    .attr("y2", (d) => d.target.cy);

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
