import type { Graph, Layout, Position } from '../graph';

export const calculateLinearRegression = (points: Position[]): { slope: number; intercept: number } => {
	let n = points.length;
	let sumX = 0,
		sumY = 0,
		sumXY = 0,
		sumX2 = 0;

	for (let point of points) {
		sumX += point.x;
		sumY += point.y;
		sumXY += point.x * point.y;
		sumX2 += point.x ** 2;
	}

	let slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);
	let intercept = (sumY - slope * sumX) / n;

	return { slope, intercept };
};

const calculateRSquared = (points: Position[], slope: number, intercept: number): number => {
	let totalSS = 0;
	let residualSS = 0;
	let avgY = points.reduce((acc, val) => acc + val.y, 0) / points.length;

	for (let point of points) {
		totalSS += (point.y - avgY) ** 2;
		residualSS += (point.y - (slope * point.x + intercept)) ** 2;
	}

	return 1 - residualSS / totalSS;
};

export const calculatePerpendicularVector = (slope: number, magnitude: number): Position => {
	// Assuming a unit vector perpendicular to the line, scaled by the magnitude
	if (slope === 0) {
		return { x: magnitude, y: 0 };
	}
	let perpendicularSlope = -1 / slope;
	let length = Math.sqrt(1 + perpendicularSlope ** 2);
	return { x: magnitude / length, y: (magnitude * perpendicularSlope) / length };
};

export const projectOntoLine = (position: Position, slope: number, intercept: number): number => {
	// Project a point onto the line and return the x-coordinate of the projection
	if (slope === Infinity || slope === -Infinity) {
		return position.y; // For vertical lines, use y-coordinate
	}
	return (position.y - intercept) / slope; // For non-vertical lines, project onto the line
};

export const detectPotentialLinearSets = (
	graph: Graph,
	layout: Layout,
	nodeId: string,
	neighborCount: number,
	linearityThreshold: number
): string[] => {
	if (!layout[nodeId]) {
		return [];
	}

	let centralNodePosition = layout[nodeId];
	let neighborIds: string[] = [];
	let neighborPositions: Position[] = [];

	// Find positions of neighboring nodes and their IDs
	Object.values(graph.edges).forEach((edge) => {
		if (edge.sourceId === nodeId && layout[edge.targetId]) {
			neighborPositions.push(layout[edge.targetId]);
			neighborIds.push(edge.targetId);
		} else if (edge.targetId === nodeId && layout[edge.sourceId]) {
			neighborPositions.push(layout[edge.sourceId]);
			neighborIds.push(edge.sourceId);
		}
	});

	neighborPositions = neighborPositions.slice(0, neighborCount);
	neighborIds = neighborIds.slice(0, neighborCount);

	if (neighborPositions.length < 2) {
		return [];
	}

	let positions = [centralNodePosition, ...neighborPositions];
	let { slope, intercept } = calculateLinearRegression(positions);
	let rSquared = calculateRSquared(positions, slope, intercept);

	if (rSquared >= linearityThreshold) {
		return [nodeId, ...neighborIds];
	}

	return [];
};

export const applyDisplacement = (layout: Layout, nodeId: string, displacementVector: Position): void => {
	layout[nodeId] = {
		x: layout[nodeId].x + displacementVector.x,
		y: layout[nodeId].y + displacementVector.y
	};
};

const sortLinearSet = (set: string[], layout: Layout): string[] => {
	if (set.length <= 1) return set;

	// Calculate the line of best fit for the set
	let positions = set.map((id) => layout[id]);
	let { slope, intercept } = calculateLinearRegression(positions);

	// Pair each node ID with its projection onto the line
	let nodeProjections = set.map((nodeId) => {
		return {
			nodeId,
			projection: projectOntoLine(layout[nodeId], slope, intercept)
		};
	});

	// Sort the nodes based on their projection onto the line
	nodeProjections.sort((a, b) => a.projection - b.projection);

	// Return the sorted set of node IDs
	return nodeProjections.map((np) => np.nodeId);
};

export const detectLinearSets = (graph: Graph, layout: Layout, neighborCount: number, linearityThreshold: number) => {
	let allLinearSets: string[][] = [];

	Object.keys(graph.nodes).forEach((nodeId) => {
		let linearSet = detectPotentialLinearSets(graph, layout, nodeId, neighborCount, linearityThreshold);
		if (linearSet.length > 0) {
			allLinearSets.push(sortLinearSet(linearSet, layout));
		}
	});

	// Merge and filter sets
	let uniqueLinearSets: string[][] = [];

	allLinearSets.forEach((set) => {
		let existingSet = uniqueLinearSets.find((uniqueSet) => uniqueSet.some((node) => set.includes(node)));
		if (existingSet) {
			let mergedSet = [...new Set([...existingSet, ...set])];
			uniqueLinearSets = uniqueLinearSets.filter((uniqueSet) => uniqueSet !== existingSet); // Remove the old set
			uniqueLinearSets.push(sortLinearSet(mergedSet, layout)); // Add the merged and sorted set
		} else {
			uniqueLinearSets.push(set); // Add new unique set
		}
	});

	return uniqueLinearSets;
};
