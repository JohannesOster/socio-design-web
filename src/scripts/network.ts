export interface Vertex {
  id: number;
  cx: number;
  cy: number;
  radius: number;
  color: string;
}

export interface Link {
  source: Vertex;
  target: Vertex;
}

export interface Network {
  vertices: Vertex[];
  links: Link[];
}

const VERTEX_RADIUS = 20;

/* A network consists of a graph and additional information on the vertices or the lines of the graph.
 ** To keep the code simple, instead of using names we identify a vertex by its color. */
const verticesColors = [
  "maroon",
  "navy",
  "darkcyan",
  "darkgrey",
  "darkorange",
  "darkseagreen",
  "sandybrown",
  "cornflowerblue",
  "mediumpurple",
  "slateblue",
  "peachpuff",
  "salmon",
  "peru",
];

const getRandCoord = (upperBound: number, padding: number) => {
  // random integer in range [0, upperBound - 2 x padding]
  const randCoord = Math.floor(Math.random() * (upperBound - 2 * padding));
  // shifted to [padding, upperBound - padding]
  return randCoord + padding;
};

export const generateRandomNetwork = (
  yUpperBound: number,
  xUpperBound: number,
  padding: number
): Network => {
  const vertices: Vertex[] = verticesColors.map((c, idx) => ({
    id: idx,
    cx: getRandCoord(xUpperBound, padding),
    cy: getRandCoord(yUpperBound, padding),
    radius: VERTEX_RADIUS,
    color: c,
  }));

  const links: Link[] = [
    { source: vertices[0], target: vertices[11] },
    { source: vertices[1], target: vertices[3] },
    { source: vertices[0], target: vertices[12] },
    { source: vertices[4], target: vertices[5] },
    { source: vertices[4], target: vertices[6] },
    { source: vertices[6], target: vertices[8] },
    { source: vertices[8], target: vertices[2] },
    { source: vertices[1], target: vertices[7] },
    { source: vertices[11], target: vertices[3] },
    { source: vertices[3], target: vertices[10] },
    { source: vertices[3], target: vertices[5] },
    { source: vertices[9], target: vertices[7] },
    { source: vertices[1], target: vertices[12] },
  ];

  return { vertices, links };
};
