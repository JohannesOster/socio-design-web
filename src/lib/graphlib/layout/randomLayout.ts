import type { Layout } from '../graph';
import type { LayoutFunction } from './types';

export const randomLayout: LayoutFunction = (graph, { container: { width, height } }) => {
	return Object.keys(graph.nodes).reduce((layout, nodeId) => {
		layout[nodeId] = { x: Math.random() * width, y: Math.random() * height };
		return layout;
	}, {} as Layout);
};
