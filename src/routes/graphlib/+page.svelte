<script lang="ts">
	import type { Edge, Graph, Node, Layout as TLayout } from '$lib/graphlib/graph';
	import { initCytoscape } from '$lib/initCytoscape';
	import { onMount } from 'svelte';
	import { toCytoscape } from '$lib/graphlib/cytoscapeAdapter';
	import { getRandomLayout } from '$lib/graphlib/layout/getRandomLayout';
	import fruchtermanReingold from '$lib/graphlib/layout/fruchtermanReingold';
	import { getKamadaKawai } from '$lib/graphlib/layout/getKamadaKawaiLayout';

	const data = {
		// # 1  2  3  4  5  6  7  8  9 10 11 12 13
		'1 Louisa': [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // # 1
		'2 Peter': [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // # 2
		'3 Frederic': [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], // # 3
		'4 Idris': [0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], // # 4
		'5 Anna': [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0], // # 5
		'6 Beatrice': [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0], // # 6
		'7 Davic': [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0], // # 7
		'8 Eric': [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0], // # 8
		'9 Cecilia': [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1], // # 9
		'10 Johanna': [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], // # 10
		'11 Travis': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // # 11
		'12 Sadio': [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], // # 12
		'13 Hannah': [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0] // # 13
	};

	const keys = Object.keys(data);
	const nodes = keys.reduce(
		(acc, curr) => {
			acc[curr] = {};
			return acc;
		},
		{} as Record<string, Node>
	);

	const edges = Object.entries(data).reduce(
		(acc, [nodeId, arr]) => {
			arr.forEach((val, idx) => {
				if (val === 0) return;
				acc[`${nodeId}-${idx + 1}`] = { sourceId: nodeId, targetId: keys[idx], weight: 1 };
			});
			return acc;
		},
		{} as Record<string, Edge>
	);

	const graph: Graph = { edges, nodes };
	// const graph: Graph = {
	// 	nodes: { peter: {}, maria: {}, davic: {}, ingrid: {}, darius: {}, marvin: {} },
	// 	edges: {
	// 		peterToMaria: { sourceId: 'peter', targetId: 'maria', weight: 1 },
	// 		mariaToPeter: { sourceId: 'maria', targetId: 'peter', weight: 1 },

	// 		mariaToDavic: { sourceId: 'maria', targetId: 'davic', weight: 1 },
	// 		davicToMaria: { sourceId: 'davic', targetId: 'maria', weight: 1 },

	// 		davicToPeter: { sourceId: 'davic', targetId: 'peter', weight: 1 },
	// 		peterToDavic: { sourceId: 'peter', targetId: 'davic', weight: 1 },

	// 		mariaToIngrid: { sourceId: 'maria', targetId: 'ingrid', weight: 1 },
	// 		marvinToIngrid: { sourceId: 'marvin', targetId: 'ingrid', weight: 1 },
	// 		dariusToDavic: { sourceId: 'darius', targetId: 'davic', weight: 1 }
	// 	}
	// };

	onMount(() => {
		const container = document.getElementById('cy-container');
		if (!container) return;

		const { height, width } = container.getBoundingClientRect();
		const containerRect = { height, width };
		let layout = getRandomLayout(graph, containerRect);
		layout = fruchtermanReingold(graph, { container: containerRect, initialLayout: layout });
		// layout = getKamadaKawai(graph, { container: containerRect, initialLayout: layout });
		const initialElements = toCytoscape(graph, layout);

		initCytoscape({ initialElements, container });
	});
</script>

<div id="cy-container" class="w-full h-full overflow-x-clip"></div>
