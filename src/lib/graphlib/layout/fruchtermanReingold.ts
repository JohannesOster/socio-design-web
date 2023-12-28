import type { Graph, Layout, Position } from '../graph';
import type { Force, Rect } from './types';
import { avoidOverlaps, distance, unitVector } from './util';

const INITIAL_COOLING_FACTOR = 0.3;
const COOLING_RATE = 0.95;
const MAX_DISPLACEMENT = 50;

interface FruchtermanReingoldOptions {
	initialLayout: Layout;
	container: Rect;
	maxIterations?: number;
}

const sumForces = (force1: Force, force2: Force): Force => ({ x: force1.x + force2.x, y: force1.y + force2.y });
const subtractForces = (force1: Force, force2: Force): Force => ({ x: force1.x - force2.x, y: force1.y - force2.y });
const multiplyForce = (factor: number, force: Force): Force => ({ x: factor * force.x, y: factor * force.y });

const fruchtermanReingold = (graph: Graph, options: FruchtermanReingoldOptions): Layout => {
	const { initialLayout, container, maxIterations = 50 } = options;

	const layout = avoidOverlaps(initialLayout);
	const k = Math.sqrt(container.width * container.height) / Object.keys(layout).length;

	let coolingFactor = INITIAL_COOLING_FACTOR;

	const forces: Record<string, Position> = {};

	for (let iteration = 0; iteration < maxIterations; iteration++) {
		// Reset forces
		Object.keys(layout).forEach((nodeId) => (forces[nodeId] = { x: 0, y: 0 }));

		// Repulsive forces between nodes
		Object.entries(layout).forEach(([nodeId1, node1]) => {
			Object.entries(layout).forEach(([nodeId2, node2]) => {
				if (nodeId1 === nodeId2) return;
				const force = frep(node1, node2, k);
				forces[nodeId1] = subtractForces(forces[nodeId1], force);
				forces[nodeId2] = sumForces(forces[nodeId2], force);
			});
		});

		// Apply attractive forces for each edge
		Object.values(graph.edges).forEach((edge) => {
			const force = fattr(layout[edge.sourceId], layout[edge.targetId], k);
			forces[edge.sourceId] = sumForces(forces[edge.sourceId], force);
			forces[edge.targetId] = subtractForces(forces[edge.targetId], force);
		});
		Object.entries(layout).forEach(([nodeId, position]) => {
			const force = multiplyForce(coolingFactor, forces[nodeId]);

			// Limit displacement
			force.x = Math.max(-MAX_DISPLACEMENT, Math.min(force.x, MAX_DISPLACEMENT));
			force.y = Math.max(-MAX_DISPLACEMENT, Math.min(force.y, MAX_DISPLACEMENT));

			const newPosition = sumForces(position, force);

			layout[nodeId] = {
				x: Math.max(0, Math.min(newPosition.x, container.width)),
				y: Math.max(0, Math.min(newPosition.y, container.height))
			};
		});

		// Update the cooling factor
		coolingFactor *= COOLING_RATE;
	}

	return layout;
};

const frep = (pu: Position, pv: Position, k: number): Force => {
	const epsilon = 1e-4;
	const uv = unitVector(pu, pv);
	const magnitude = k ** 2 / Math.max(distance(pu, pv), epsilon);
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

const fattr = (pu: Position, pv: Position, k: number) => {
	const uv = unitVector(pu, pv);
	const magnitude = distance(pu, pv) ** 2 / k;
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

export default fruchtermanReingold;
