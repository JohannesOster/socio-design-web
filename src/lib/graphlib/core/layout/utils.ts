import type { Layout } from '../types';
import { distanceSquared, unitVector, deepCopyLayout } from '../utils';

const MIN_DISTANCE = 10; // Minimum distance between nodes to avoid overlap
export const avoidOverlaps = (layout: Layout): Layout => {
	const _layout = deepCopyLayout(layout);

	const keys = Object.keys(_layout);
	for (let i = 0; i < keys.length; i++) {
		for (let j = i + 1; j < keys.length; j++) {
			const node1 = _layout[keys[i]];
			const node2 = _layout[keys[j]];

			const distSquared = distanceSquared(node1, node2);

			// Check for exact overlap and apply a deterministic displacement if needed
			if (distSquared === 0) {
				node1.x -= MIN_DISTANCE / 2;
				node2.x += MIN_DISTANCE / 2;
				continue;
			}

			if (distSquared < MIN_DISTANCE ** 2) {
				const dist = Math.sqrt(distSquared);
				const uv = unitVector(node1, node2);
				const displacement = (MIN_DISTANCE - dist) / 2;

				node1.x -= uv.x * displacement;
				node1.y -= uv.y * displacement;
				node2.x += uv.x * displacement;
				node2.y += uv.y * displacement;
			}
		}
	}

	return _layout;
};
