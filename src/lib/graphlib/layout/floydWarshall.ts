import type { Graph } from '../graph';

export const floydWarshall = (graph: Graph): number[][] => {
	const nodes = Object.keys(graph.nodes);
	const numNodes = nodes.length;
	const distMatrix = Array.from({ length: numNodes }, () => Array(numNodes).fill(Infinity));

	// Initialize the distance matrix with direct edge weights
	for (const edgeId in graph.edges) {
		const edge = graph.edges[edgeId];
		const u = nodes.indexOf(edge.sourceId);
		const v = nodes.indexOf(edge.targetId);
		distMatrix[u][v] = edge.weight;
	}

	// Set distance to self as 0
	for (let i = 0; i < numNodes; i++) {
		distMatrix[i][i] = 0;
	}

	// Floyd-Warshall algorithm
	for (let k = 0; k < numNodes; k++) {
		for (let i = 0; i < numNodes; i++) {
			for (let j = 0; j < numNodes; j++) {
				if (distMatrix[i][k] + distMatrix[k][j] < distMatrix[i][j]) {
					distMatrix[i][j] = distMatrix[i][k] + distMatrix[k][j];
				}
			}
		}
	}

	return distMatrix;
};
