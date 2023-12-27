<script lang="ts">
	import type { Graph, Layout as TLayout } from '$lib/graphlib/graph';
	import { initCytoscape } from '$lib/initCytoscape';
	import { onMount } from 'svelte';
	import { toCytoscape } from '$lib/graphlib/cytoscapeAdapter';
	import { getRandomLayout } from '$lib/graphlib/layout/getRandomLayout';

	const graph: Graph = {
		nodes: { peter: {}, maria: {}, davic: {} },
		edges: {
			peterToMaria: { sourceId: 'peter', targetId: 'maria', weight: 1 },
			mariaToDavic: { sourceId: 'maria', targetId: 'davic', weight: 1 },
			davicToPeter: { sourceId: 'davic', targetId: 'peter', weight: 1 }
		}
	};

	onMount(() => {
		const container = document.getElementById('cy-container');
		if (!container) return;

		const { height, width } = container.getBoundingClientRect();
		const layout = getRandomLayout(graph, { height, width });
		const initialElements = toCytoscape(graph, layout);

		initCytoscape({ initialElements, container });
	});
</script>

<div id="cy-container" class="w-full h-full overflow-x-clip"></div>
