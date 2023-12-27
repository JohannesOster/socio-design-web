import type { Graph, Layout, Position } from '../graph';
import type { Force, Rect } from './types';
import { avoidOverlaps, distance, unitVector } from './util';

export interface GetForceDirectedLayoutOptions {
	initialLayout: Layout;
	container: Rect;
	maxIterations?: number;
}
export const getForceDirectedLayout = (graph: Graph, options: GetForceDirectedLayoutOptions): Layout => {
	const { initialLayout, container, maxIterations = 100 } = options;

	// poor man's deep copy
	const layout: Layout = JSON.parse(JSON.stringify(initialLayout));
	avoidOverlaps(layout);

	const k = Math.sqrt((container.height * container.width) / Object.keys(layout).length);
	let coolingFactor = 0.3;
	const coolingDecreaseRate = 0.95;
	const maxDisplacement = 50; // Maximum displacement per iteration
	const forces: Record<string, Position> = {};

	console.log(`Initial layout:
	p: {x: ${Math.floor(layout.peter.x)}, y: ${Math.floor(layout.peter.y)}},
	m: {x: ${Math.floor(layout.maria.x)}, y: ${Math.floor(layout.maria.y)}}
	`);

	console.log(`Initital Distance: ${distance(layout.peter, layout.maria)}`);

	console.log(`Optimal distance: ${k}`);

	for (let iteration = 0; iteration < maxIterations; iteration++) {
		// Reset forces
		Object.keys(layout).forEach((nodeId) => {
			forces[nodeId] = { x: 0, y: 0 };
		});

		// Repulsive forces between nodes
		Object.entries(layout).forEach(([nodeId1, node1]) => {
			Object.entries(layout).forEach(([nodeId2, node2]) => {
				if (nodeId1 === nodeId2) return;
				const force = frep(node1, node2, k);
				forces[nodeId1].x -= force.x;
				forces[nodeId1].y -= force.y;

				forces[nodeId2].x += force.x;
				forces[nodeId2].y += force.y;
			});
		});

		// console.log(`Total Repulsive Forces:
		// p: {x: ${Math.floor(forces.peter.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(forces.peter.y * 10 ** decimals) / 10 ** decimals}},
		// m: {x: ${Math.floor(forces.maria.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(forces.maria.y * 10 ** decimals) / 10 ** decimals}}
		// `);

		// Apply attractive forces for each edge
		Object.values(graph.edges).forEach((edge) => {
			const force = fattr(layout[edge.sourceId], layout[edge.targetId], k);
			forces[edge.sourceId].x += force.x;
			forces[edge.sourceId].y += force.y;

			forces[edge.targetId].x -= force.x;
			forces[edge.targetId].y -= force.y;

			// console.log(`Total attractive Forces:
			// p: {x: ${Math.floor(-force.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(-force.y * 10 ** decimals) / 10 ** decimals}},
			// m: {x: ${Math.floor(force.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(force.y * 10 ** decimals) / 10 ** decimals}}
			// `);
		});

		// console.log(`Total Forces:
		// p: {x: ${Math.floor(forces.peter.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(forces.peter.y * 10 ** decimals) / 10 ** decimals}},
		// m: {x: ${Math.floor(forces.maria.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(forces.maria.y * 10 ** decimals) / 10 ** decimals}}
		// `);

		Object.entries(layout).forEach(([nodeId, node]) => {
			let force = { x: 0, y: 0 };
			force.x = Math.max(-maxDisplacement, Math.min(coolingFactor * forces[nodeId].x, maxDisplacement));
			force.y = Math.max(-maxDisplacement, Math.min(coolingFactor * forces[nodeId].y, maxDisplacement));

			// console.log(`Adapted Force:
			// 	{x: ${Math.floor(force.x * 10 ** decimals) / 10 ** decimals}, y: ${Math.floor(force.y * 10 ** decimals) / 10 ** decimals}},
			// `);

			node.x += force.x;
			node.y += force.y;

			// Ensure the node does not go outside the container bounds
			node.x = Math.max(0, Math.min(node.x, container.width));
			node.y = Math.max(0, Math.min(node.y, container.height));
		});

		// console.log(`Final layout:
		// p: {x: ${Math.floor(layout.peter.x)}, y: ${Math.floor(layout.peter.y)}},
		// m: {x: ${Math.floor(layout.maria.x)}, y: ${Math.floor(layout.maria.y)}}
		// `);

		// Update the cooling factor
		coolingFactor *= coolingDecreaseRate;
	}

	console.log(`Final Distance: ${distance(layout.peter, layout.maria)}`);

	return layout;
};

export const frep = (pu: Position, pv: Position, k: number): Force => {
	const epsilon = 0.0001;
	const uv = unitVector(pu, pv);
	const magnitude = k ** 2 / Math.max(distance(pu, pv), epsilon);
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

export const fattr = (pu: Position, pv: Position, k: number) => {
	const uv = unitVector(pu, pv);
	const magnitude = distance(pu, pv) ** 2 / k;
	return { x: magnitude * uv.x, y: magnitude * uv.y };
};

export const fconfine = (node: Position, container: Rect, strength: number): Force => {
	let forceX = 0;
	let forceY = 0;

	forceX = (node.x < container.width / 2 ? 1 : -1) * strength;
	forceY = (node.y < container.height / 2 ? 1 : -1) * strength;

	return { x: forceX, y: forceY };
};
