import { Link, Vertex } from "../network";

export function fruchtermanReingold(
  vertices: Vertex[],
  links: Link[],
  width: number,
  height: number,
  iterations: number
) {
  const area = width * height;
  const k = Math.sqrt(area / vertices.length); // Ideal edge length
  const minDist = 0.01; // Minimum distance to prevent instability

  const repulsiveForce = (distance: number) =>
    (k * k) / Math.max(distance, minDist);
  const attractiveForce = (distance: number) => (distance * distance) / k;

  let t = width / 10; // Initial temperature
  const dt = t / (iterations + 1); // Temperature decrement

  for (let i = 0; i < iterations; i++) {
    // Calculate repulsive forces
    for (let v of vertices) {
      v.disp = { x: 0, y: 0 };
      for (let u of vertices) {
        if (v !== u) {
          let dx = v.cx - u.cx;
          let dy = v.cy - u.cy;
          let distance = Math.max(Math.sqrt(dx * dx + dy * dy), minDist);
          let force = repulsiveForce(distance);
          v.disp.x += (dx / distance) * force;
          v.disp.y += (dy / distance) * force;
        }
      }
    }

    // Calculate attractive forces
    for (let link of links) {
      let source = link.source;
      let target = link.target;
      let dx = source.cx - target.cx;
      let dy = source.cy - target.cy;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let force = attractiveForce(distance);
      source.disp!.x -= (dx / distance) * force;
      source.disp!.y -= (dy / distance) * force;
      target.disp!.x += (dx / distance) * force;
      target.disp!.y += (dy / distance) * force;
    }

    // Limit the maximum displacement to the temperature t
    // and then prevent from being displaced outside the frame
    for (let v of vertices) {
      let dispLength = Math.sqrt(v.disp!.x * v.disp!.x + v.disp!.y * v.disp!.y);
      v.cx += (v.disp!.x / dispLength) * Math.min(dispLength, t);
      v.cy += (v.disp!.y / dispLength) * Math.min(dispLength, t);
      // Keep within bounds
      v.cx = Math.min(width, Math.max(0, v.cx));
      v.cy = Math.min(height, Math.max(0, v.cy));
    }

    // Reduce the temperature as the layout improves
    t -= dt;
  }

  return vertices;
}
