<script lang="ts">
	import type { Graph, Layout as TLayout } from '$lib/graphlib/graph';
	import { initCytoscape } from '$lib/initCytoscape';
	import { onMount } from 'svelte';
	import { toCytoscape } from '$lib/graphlib/cytoscapeAdapter';
	import { getRandomLayout } from '$lib/graphlib/layout/getRandomLayout';
	import { getForceDirectedLayout } from '$lib/graphlib/layout/getForceDirectedLayout';

	const graph: Graph = {
		nodes: { peter: {}, maria: {}, davic: {} }, //, ingrid: {}, darius: {}, marvin: {} },
		edges: {
			peterToMaria: { sourceId: 'peter', targetId: 'maria', weight: 1 },
			mariaToPeter: { sourceId: 'maria', targetId: 'peter', weight: 1 },

			mariaToDavic: { sourceId: 'maria', targetId: 'davic', weight: 1 },
			davicToMaria: { sourceId: 'davic', targetId: 'maria', weight: 1 },

			davicToPeter: { sourceId: 'davic', targetId: 'peter', weight: 1 },
			peterToDavic: { sourceId: 'peter', targetId: 'davic', weight: 1 }

			// mariaToDavic: { sourceId: 'maria', targetId: 'davic', weight: 1 },
			// davicToPeter: { sourceId: 'davic', targetId: 'peter', weight: 1 },
			// mariaToIngrid: { sourceId: 'maria', targetId: 'ingrid', weight: 1 },
			// marvinToIngrid: { sourceId: 'marvin', targetId: 'ingrid', weight: 1 },
			// dariusToDavic: { sourceId: 'darius', targetId: 'davic', weight: 1 }
		}
	};

	onMount(() => {
		const container = document.getElementById('cy-container');
		if (!container) return;

		const { height, width } = container.getBoundingClientRect();
		const containerRect = { height, width };
		let layout = getRandomLayout(graph, containerRect);
		layout = getForceDirectedLayout(graph, { container: containerRect, initialLayout: layout });
		const initialElements = toCytoscape(graph, layout);

		initCytoscape({ initialElements, container });
	});
</script>

<div id="cy-container" class="w-full h-full overflow-x-clip"></div>
