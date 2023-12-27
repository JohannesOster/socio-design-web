import type { Graph, Layout } from '../graph';
import type { Rect } from './types';

export interface GetForceDirectedLayoutOptions {
	initialLayout: Layout;
	container: Rect;
}
export const getForceDirectedLayout = (graph: Graph, options: GetForceDirectedLayoutOptions): Layout => {
	const { initialLayout, container } = options;

	// poor man's deep copy
	const layout: Layout = JSON.parse(JSON.stringify(initialLayout));

	return layout;
};
