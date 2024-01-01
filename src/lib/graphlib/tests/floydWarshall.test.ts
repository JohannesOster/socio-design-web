import type { Graph } from '$lib/graphlib/core/types';
import { describe, it, expect } from 'vitest';
import { floydWarshall } from '../core/algorithms/floydWarshall';

describe('Floyd-Warshall Algorithm', () => {
	it('should compute shortest paths in a simple graph', () => {
		const graph: Graph = {
			nodes: { '1': {}, '2': {}, '3': {} },
			edges: {
				'1-2': { sourceId: '1', targetId: '2', weight: 4 },
				'2-3': { sourceId: '2', targetId: '3', weight: 1 },
				'1-3': { sourceId: '1', targetId: '3', weight: 7 }
			}
		};

		// Expected distance matrix
		const expected = [
			[0, 4, 5],
			[Infinity, 0, 1],
			[Infinity, Infinity, 0]
		];

		// Call the function
		const result = floydWarshall(graph);

		// Assert the result
		expect(result).toEqual(expected);
	});
});
