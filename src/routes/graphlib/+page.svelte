<script lang="ts">
	import type { Edge, Graph, Node, Layout } from '$lib/graphlib/graph';
	import { initCytoscape } from '$lib/initCytoscape';
	import { onMount } from 'svelte';
	import { toCytoscape } from '$lib/graphlib/cytoscapeAdapter';
	import { randomLayout } from '$lib/graphlib/layout/randomLayout';
	import fruchtermanReingold from '$lib/graphlib/layout/fruchtermanReingold';
	import kamadaKawai from '$lib/graphlib/layout/kamadaKawai';
	import CollapsableSidePanel from '$lib/components/CollapsableSidePanel/CollapsableSidePanel.svelte';
	import type cytoscape from 'cytoscape';

	let layout: Layout;
	let container: HTMLElement;
	let cy: cytoscape.Core;

	/* ================== BUILD DEFAULT GRAPH ======================== */
	const data = {
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

	/* =============================================================== */

	const layoutFuncs = {
		randomLayout: randomLayout,
		fruchtermanReingold: fruchtermanReingold,
		kamadaKawai: kamadaKawai
	};
	const applyLayout = (layoutFunc: keyof typeof layoutFuncs) => {
		const newLayout = layoutFuncs[layoutFunc](graph, {
			container: container.getBoundingClientRect(),
			initialLayout: layout
		});
		cy.batch(() => {
			cy.nodes().forEach((node) => {
				const newPos = newLayout[node.id()];
				if (newPos) node.position(newPos);
			});
		});
		cy.fit();
	};

	onMount(() => {
		if (!container) return;

		const { height, width } = container.getBoundingClientRect();
		const containerRect = { height, width };
		layout = randomLayout(graph, { container: containerRect });
		const initialElements = toCytoscape(graph, layout);

		cy = initCytoscape({ initialElements, container });
	});
</script>

<div bind:this={container} id="cy-container" class="w-full h-full overflow-x-clip"></div>

<CollapsableSidePanel position="right"
	><div class="w-full h-full bg-white">
		<div class="flex flex-col bg-white rounded-md divide-y divide-gray-100">
			<button on:click={() => applyLayout('randomLayout')} class="py-2">Random Layout</button>
			<button on:click={() => applyLayout('fruchtermanReingold')} class="py-2">Fruchterman & Reingold</button>
			<button on:click={() => applyLayout('kamadaKawai')} class="py-2">Kamada Kawai</button>
		</div>
	</div></CollapsableSidePanel
>
<CollapsableSidePanel position="left"><div class="w-full h-full bg-white">Left Panel</div></CollapsableSidePanel>
