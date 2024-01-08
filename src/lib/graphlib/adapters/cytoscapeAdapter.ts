import type cytoscape from 'cytoscape';
import type { Graph, Layout } from '../core/types';
import type { ElementGroup } from 'cytoscape';

export const toCytoscape = (graph: Graph, layout: Layout): cytoscape.ElementDefinition[] => {
	const _graph = [
		...Object.entries(graph.nodes).map(([key, value]) => ({
			group: 'nodes' as ElementGroup,
			data: { id: key, label: value.label },
			position: { x: layout[key].x, y: layout[key].y }
		})),
		...Object.entries(graph.edges).map(([key, value]) => ({
			group: 'edges' as ElementGroup,
			data: { id: key, source: value.sourceId, target: value.targetId, weight: value.weight }
		}))
	];

	return _graph;
};

export const fromCytoscape = (elements: cytoscape.CollectionReturnValue): { graph: Graph; layout: Layout } => {
	return elements.reduce(
		(acc, curr) => {
			const group = curr.group();
			const id = curr.id();

			if (group === 'nodes') {
				acc.graph.nodes[id] = { label: curr.data().label };
				acc.layout[id] = curr.position();
			} else if (group === 'edges') {
				acc.graph.edges[id] = {
					sourceId: curr.data().source,
					targetId: curr.data().target,
					weight: curr.data().weight || 1
				};
			}

			return acc;
		},
		{ graph: { nodes: {}, edges: {} }, layout: {} } as { graph: Graph; layout: Layout }
	);
};
