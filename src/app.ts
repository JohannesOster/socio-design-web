import * as d3 from "d3";

document.addEventListener("DOMContentLoaded", () => {
  interface Circle {
    id: number;
    cx: number;
    cy: number;
    radius: number;
    color: string;
  }

  const container = d3.select("#d3-container");
  const svg = container
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%");

  const circlesData: Circle[] = [
    { id: 0, cx: 200, cy: 200, radius: 30, color: "navy" },
    { id: 1, cx: 100, cy: 100, radius: 40, color: "black" },
    { id: 2, cx: 130, cy: 180, radius: 20, color: "darkcyan" },
  ];

  const linksData = [
    { source: circlesData[0], target: circlesData[1] },
    { source: circlesData[1], target: circlesData[2] },
  ];

  const g = svg.append("g");

  let offsetX = 0,
    offsetY = 0;

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
