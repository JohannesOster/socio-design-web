import cytoscape from "cytoscape";

const LOCAL_STORAGE_KEY = "cyGraph";

export const saveGraph = (elements: object) => {
  const json = JSON.stringify(elements);
  localStorage.setItem(LOCAL_STORAGE_KEY, json);
};

export const loadGraph = (): cytoscape.ElementDefinition[] => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedData) return [];
  const json = JSON.parse(savedData);
  return Object.keys(json).length ? json : [];
};
