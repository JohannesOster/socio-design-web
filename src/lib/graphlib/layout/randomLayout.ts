import type { Graph, Layout } from '../graph';
import type { Rect } from './types';

export const randomLayout = (graph: Graph, { width, height }: Rect): Layout => {
	return Object.keys(graph.nodes).reduce((layout, nodeId) => {
		layout[nodeId] = { x: Math.random() * width, y: Math.random() * height };
		return layout;
	}, {} as Layout);
};
