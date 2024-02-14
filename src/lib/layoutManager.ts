// layoutManager.ts
import type { Core } from 'cytoscape';
import fruchtermanReingold from './graphlib/core/layout/fruchtermanReingold';
import kamadaKawai from './graphlib/core/layout/kamadaKawai';
import scaledFruchtermanReingold from './graphlib/core/layout/scaledFruchtermanReingold';
import { fromCytoscape } from './graphlib/adapters';
import { randomLayout } from './graphlib/core/layout/randomLayout';
import {
	applyDisplacement,
	calculateLinearRegression,
	calculatePerpendicularVector,
	detectLinearSets
} from './graphlib/core/layout/linearityAvoidance';
import type { Graph, Layout } from './graphlib/core/types';

// Define a type for the layout functions for type safety
type LayoutFunction = (graph: any, options: any) => any;
const layoutFuncs: Record<string, LayoutFunction> = {
	randomLayout,
	fruchtermanReingold,
	kamadaKawai,
	scaledFruchtermanReingold
};

// Function to apply a layout to the cytoscape instance
export function applyLayout(cy: Core, layoutName: string, layoutPadding: number): void {
	const layoutFunc = layoutFuncs[layoutName];
	if (!layoutFunc) return console.error(`Layout function for '${layoutName}' not found.`);

	const { graph, layout } = fromCytoscape(cy.elements());
	const container = cy.container();
	if (!container) return console.error('Cytoscape container not found.');

	let scaledContainer = container.getBoundingClientRect();
	// Adjust container dimensions if necessary
	// scaledContainer.width /= 1.5;
	// scaledContainer.height /= 1.5;

	let newLayout = layoutFunc(graph, { container: scaledContainer, initialLayout: layout });

	/**
	 * In the past the scaled fruchterman reingold algorithm had the problem of creating linear layouts so multiple nodes in a line.
	 * Therefore we created a helper function that adds a small displacement. However, due to small changes the issue has been resolved,
	 * so the adjustment is not required anymore.
	 */
	// if (layoutName === 'scaledFruchtermanReingold') {
	// 	newLayout = adjustLayoutForLinearSets(graph, newLayout);
	// }

	cy.batch(() => {
		cy.nodes().forEach((node) => {
			const newPos = newLayout[node.id()];
			if (newPos) node.position(newPos);
		});
	});

	cy.fit(undefined, layoutPadding);

	return newLayout;
}

const adjustLayoutForLinearSets = (graph: Graph, layout: Layout) => {
	let maxPositive = 0;
	let minNegative = 0;

	// Find the maximum positive and minimum negative weights
	Object.values(graph.edges).forEach(({ weight }) => {
		if (weight > 0) maxPositive = Math.max(maxPositive, weight);
		else minNegative = Math.min(minNegative, weight);
	});

	let uniqueLinearSets = detectLinearSets(graph, layout, 3, 0.95);
	uniqueLinearSets.forEach((set) => {
		if (set.length >= 3) {
			// Calculate line of best fit for the set
			let positions = set.map((id) => layout[id]);
			let { slope } = calculateLinearRegression(positions);

			// Calculate displacement vectors
			let displacementMagnitude = 30; // Example magnitude
			let displacementVector = calculatePerpendicularVector(slope, displacementMagnitude);

			// Apply displacement
			set.forEach((nodeId, index) => {
				let displacement =
					index % 2 === 0 ? displacementVector : { x: -displacementVector.x, y: -displacementVector.y };
				applyDisplacement(layout, nodeId, displacement);
			});
		}
	});

	return layout;
};
