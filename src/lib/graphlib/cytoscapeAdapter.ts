import type cytoscape from 'cytoscape';
import type { Graph, Layout } from './graph';
import type { ElementGroup } from 'cytoscape';

export const toCytoscape = (graph: Graph, layout: Layout): cytoscape.ElementDefinition[] => {
	const _graph = [
		...Object.keys(graph.nodes).map((key) => ({
			group: 'nodes' as ElementGroup,
			data: { id: key },
			position: { x: layout[key].x, y: layout[key].y }
		})),
		...Object.entries(graph.edges).map(([key, value]) => ({
			group: 'edges' as ElementGroup,
			data: { id: key, source: value.sourceId, target: value.targetId }
		}))
	];

	return _graph;
};
