import * as d3 from "d3";

interface Circle {
  cx: number;
  cy: number;
  radius: number;
  color: string;
}

const container = d3.select("#container");
const svg = container
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

const circlesData: Circle[] = [
  { cx: 200, cy: 200, radius: 30, color: "green" },
  { cx: 100, cy: 100, radius: 40, color: "blue" },
];

const g = svg.append("g");

let offsetX = 0,
  offsetY = 0;

g.selectAll("circle")
  .data(circlesData)
  .enter()
  .append("circle")
  .attr("cx", (d) => d.cx)
  .attr("cy", (d) => d.cy)
  .attr("r", (d) => d.radius)
  .style("fill", (d) => d.color)
  .call(
    d3
      .drag<SVGCircleElement, Circle>()
      .on("start", function (event) {
        const node = d3.select(this);
        offsetX = parseFloat(node.attr("cx")) - event.x;
        offsetY = parseFloat(node.attr("cy")) - event.y;
        d3.select(this).raise().classed("active", true);
      })
      .on("drag", function (event) {
        d3.select(this)
          .attr("cx", event.x + offsetX)
          .attr("cy", event.y + offsetY);
      })
  );

svg.call(
  d3.zoom<SVGSVGElement, unknown>().on("zoom", ({ transform }) => {
    g.attr("transform", transform);
  })
);
