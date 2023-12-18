const vertices = [{ id: "Davic" }, { id: "Janosch" }];
const links = [{ source: "Janosch", target: "Davic" }];

export const defaultGraph = vertices
  .map((v) => ({ data: v }))
  .concat(
    links.map((l) => ({ data: { id: `${l.source}-${l.target}`, ...l } }))
  );
