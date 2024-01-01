import type { Edge, Graph } from './graph';

type AdjacencyMatrix = { [id: string]: number[] };
export const fromAdjacencyMatrix = (matrix: AdjacencyMatrix): Graph => {
	const keys = Object.keys(matrix);
	const nodes = keys.reduce(
		(acc, curr) => {
			acc[curr] = {};
			return acc;
		},
		{} as Record<string, {}>
	);

	const edges = Object.entries(matrix).reduce(
		(acc, [nodeId, arr]) => {
			arr.forEach((val, idx) => {
				if (val === 0) return;
				acc[`${nodeId}-${idx + 1}`] = { sourceId: nodeId, targetId: keys[idx], weight: val };
			});
			return acc;
		},
		{} as Record<string, Edge>
	);

	return { edges, nodes };
};
