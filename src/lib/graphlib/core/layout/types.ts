import type { Graph, Layout, Position } from '../types';

export type Force = Position;
export type Rect = { width: number; height: number };

export interface LayoutFunctionOptions {
	container: Rect;
	initialLayout?: Layout;
	maxIterations?: number;
}
export type LayoutFunction = (graph: Graph, options: LayoutFunctionOptions) => Layout;
