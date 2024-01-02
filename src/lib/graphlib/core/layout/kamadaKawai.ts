import { floydWarshall } from '../algorithms/floydWarshall';
import { randomLayout } from './randomLayout';
import type { LayoutFunction } from './types';
import { avoidOverlaps } from './utils';

const KK_EPS = 1e-13;
const MIN_L = 60;

const kamadaKawai: LayoutFunction = (graph, options) => {
	const { container, maxIterations = 1000 } = options;
	const initialLayout = options.initialLayout || randomLayout(graph, { container });
	const layout = avoidOverlaps(initialLayout);

	const numNodes = Object.keys(graph.nodes).length;

	let d_ij = floydWarshall(graph);
	const L0 = Math.sqrt(numNodes);
	let max_dij = Math.max(...d_ij.flat().filter(isFinite));
	const L = Math.max(max_dij > 0 ? L0 / max_dij : L0, MIN_L);

	d_ij = d_ij.map((row) => row.map((dist) => (isFinite(dist) ? dist : max_dij)));

	const K = numNodes;

	const l_ij = d_ij.map((row) => row.map((elem) => L * elem));
	const k_ij = d_ij.map((row) => row.map((elem) => (elem === 0 ? 0 : K / elem ** 2)));

	// map id of node to its index in the layout
	const nodeIndexMap: Record<string, number> = {};
	let index = 0;
	for (const nodeId in graph.nodes) nodeIndexMap[nodeId] = index++;

	for (let iter = 0; iter < maxIterations; iter++) {
		let maxDelta = 0;

		for (const nodeId in layout) {
			const i = nodeIndexMap[nodeId];
			let D1 = 0,
				D2 = 0;
			let A = 0,
				B = 0,
				C = 0;

			for (const otherNodeId in layout) {
				if (nodeId === otherNodeId) continue;
				const j = nodeIndexMap[otherNodeId];
				const dx = layout[nodeId].x - layout[otherNodeId].x;
				const dy = layout[nodeId].y - layout[otherNodeId].y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const den = dist * (dx * dx + dy * dy);

				D1 += k_ij[i][j] * (dx - (l_ij[i][j] * dx) / dist);
				D2 += k_ij[i][j] * (dy - (l_ij[i][j] * dy) / dist);

				A += k_ij[i][j] * (1 - (l_ij[i][j] * dy * dy) / den);
				B += (k_ij[i][j] * l_ij[i][j] * dx * dy) / den;
				C += k_ij[i][j] * (1 - (l_ij[i][j] * dx * dx) / den);
			}

			const det = A * C - B * B;
			if (Math.abs(det) < KK_EPS) continue; // Check for near-zero determinant

			const solution = solveLinearSystem(
				[
					[A, B],
					[B, C]
				],
				[D1, D2]
			);

			if (!solution) {
				console.error('No Solution');
				continue;
			}

			const deltaX = solution[0];
			const deltaY = solution[1];

			// Check if the changes are significant enough to proceed
			if (deltaX * deltaX + deltaY * deltaY < KK_EPS) {
				continue;
			}

			const newX = layout[nodeId].x - deltaX;
			const newY = layout[nodeId].y - deltaY;

			layout[nodeId].x = Math.max(0, Math.min(newX, container.width)) + (Math.random() - 0.5) * 1e-3;
			layout[nodeId].y = Math.max(0, Math.min(newY, container.height)) + (Math.random() - 0.5) * 1e-4;

			maxDelta = Math.max(maxDelta, deltaX * deltaX + deltaY * deltaY);
		}

		if (maxDelta < KK_EPS) break; // Convergence
	}

	return layout;
};

function solveLinearSystem(A: number[][], b: number[]): number[] | null {
	const n = A.length;

	// Check if A is a square matrix
	if (!A.every((row) => row.length === n)) {
		throw new Error('Matrix A must be square.');
	}

	// Check if b has the correct dimensions
	if (b.length !== n) {
		throw new Error('Length of vector b must match the dimensions of matrix A.');
	}

	// Creating augmented matrix
	const augMatrix = A.map((row, i) => [...row, b[i]]);

	// Gaussian Elimination with Partial Pivoting
	for (let i = 0; i < n; i++) {
		// Search for maximum in this column
		let maxEl = Math.abs(augMatrix[i][i]);
		let maxRow = i;
		for (let k = i + 1; k < n; k++) {
			if (Math.abs(augMatrix[k][i]) > maxEl) {
				maxEl = Math.abs(augMatrix[k][i]);
				maxRow = k;
			}
		}

		// Swap maximum row with current row
		[augMatrix[i], augMatrix[maxRow]] = [augMatrix[maxRow], augMatrix[i]];

		// Check for singular matrix
		if (augMatrix[i][i] === 0) return null;

		// Make all rows below this one 0 in current column
		for (let k = i + 1; k < n; k++) {
			const c = -augMatrix[k][i] / augMatrix[i][i];
			for (let j = i; j < n + 1; j++) {
				if (i === j) {
					augMatrix[k][j] = 0;
				} else {
					augMatrix[k][j] += c * augMatrix[i][j];
				}
			}
		}
	}

	// Solve equation Ax=b for an upper triangular matrix A
	const x = new Array(n).fill(0);
	for (let i = n - 1; i > -1; i--) {
		x[i] = augMatrix[i][n] / augMatrix[i][i];
		for (let k = i - 1; k > -1; k--) {
			augMatrix[k][n] -= augMatrix[k][i] * x[i];
		}
	}

	return x;
}

export default kamadaKawai;
