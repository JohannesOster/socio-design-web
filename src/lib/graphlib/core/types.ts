export interface Node {}

export interface Edge {
	sourceId: string;
	targetId: string;
	weight: number;
}

export interface Graph {
	nodes: Record<string, Node>; // nodeId: Node
	edges: Record<string, Edge>; // edgeId: Edge
}

export interface Position {
	x: number;
	y: number;
}

export type Layout = Record<string, Position>;
