import type { Edge, Position } from '../types';
import { randomLayout } from './randomLayout';
import type { Force, LayoutFunction } from './types';
import { distance, unitVector } from '../utils';
import { avoidOverlaps } from './utils';

const INITIAL_COOLING_FACTOR = 0.3;
const COOLING_RATE = 0.95;
const MAX_DISPLACEMENT = 50;
const GRAVITY_CONSTANT = 1;

const sumForces = (force1: Force, force2: Force): Force => ({ x: force1.x + force2.x, y: force1.y + force2.y });
const subtractForces = (force1: Force, force2: Force): Force => ({ x: force1.x - force2.x, y: force1.y - force2.y });
const multiplyForce = (factor: number, force: Force): Force => ({ x: factor * force.x, y: factor * force.y });

type EdgeTable = { [sourceId: string]: { [targetId: string]: number } };
const getEdgeTable = (edges: Record<string, Edge>) => {
	Object.values(edges).reduce((acc, curr) => {
		if (!acc[curr.sourceId]) acc[curr.sourceId] = {};
		acc[curr.sourceId][curr.targetId] = curr.weight;
		return acc;
	}, {} as EdgeTable);
};

const scaledFruchtermanReingold: LayoutFunction = (graph, options) => {
	const { container, maxIterations = 100 } = options;
	const initialLayout = options.initialLayout || randomLayout(graph, { container });

	const layout = avoidOverlaps(initialLayout);
	const k = (Math.sqrt(container.width * container.height) / Object.keys(layout).length) * 0.85;

	let coolingFactor = INITIAL_COOLING_FACTOR;

	const forces: Record<string, Position> = {};

	const edgeTable = getEdgeTable(graph.edges);
	const center = { x: container.width / 2, y: container.height / 2 };

	for (let iteration = 0; iteration < maxIterations; iteration++) {
		// Reset forces
		Object.keys(layout).forEach((nodeId) => (forces[nodeId] = { x: 0, y: 0 }));

		// Apply Center Directed Gravity
		Object.entries(layout).forEach(([nodeId, position]) => {
			const gravityForce = fgravity(position, center, GRAVITY_CONSTANT);
			forces[nodeId] = sumForces(forces[nodeId], gravityForce);
		});

		// Repulsive forces between nodes
		Object.entries(layout).forEach(([nodeId1, node1]) => {
			Object.entries(layout).forEach(([nodeId2, node2]) => {
				if (nodeId1 === nodeId2) return;
				const force = frep(node1, node2, k);
				forces[nodeId1] = subtractForces(forces[nodeId1], force);
				forces[nodeId2] = sumForces(forces[nodeId2], force);
			});
		});

		// Apply weighted edge forces for each edge
		Object.values(graph.edges).forEach((edge) => {
			const force = fedge(layout[edge.sourceId], layout[edge.targetId], k, edge.weight);
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

	console.log(`k: ${k}`);
	const keys = Object.keys(graph.nodes);
	let minDistance = Infinity;
	for (let i = 0; i < keys.length - 1; i++) {
		for (let j = i + 1; j < keys.length; j++) {
			const dist = distance(layout[keys[i]], layout[keys[j]]);
			console.log(`${graph.nodes[keys[i]].label}-${graph.nodes[keys[j]].label}: ${dist}`);
			minDistance = Math.min(dist);
		}
	}

	console.log(`Min distance: ${minDistance} = ${minDistance / k} x k`);

	return layout;
};

/**
 * Force to pull all nodes towards the center of the container with it's magnitude
 * increasing with the nodes distance from the center. */
const fgravity = (position: Position, center: Position, gravityConstant: number): Force => {
	const distToCenter = distance(position, center);
	const uv = unitVector(position, center);
	const magnitude = gravityConstant * distToCenter * 2;
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

/** Repulsive force between all node pairs to avoid layout collapse. */
const frep = (pu: Position, pv: Position, k: number): Force => {
	const epsilon = 1e-4;
	const uv = unitVector(pu, pv);
	const magnitude = k ** 2 / Math.max(distance(pu, pv), epsilon);
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

/** Empirical values */
const POS_FACTOR = 0.5;
const NEG_FACTOR = 0.0025;
const fedge = (pu: Position, pv: Position, k: number, weight: number) => {
	const uv = unitVector(pu, pv);
	let magnitude = (weight * distance(pu, pv) ** 2) / k;
	magnitude = magnitude * (weight < 0 ? NEG_FACTOR : POS_FACTOR);
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

export default scaledFruchtermanReingold;
