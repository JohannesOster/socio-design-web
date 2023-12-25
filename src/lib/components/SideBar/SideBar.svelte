<script lang="ts">
	import { fly } from 'svelte/transition';
	import Expandable from './Expandable.svelte';

	export let cy: cytoscape.Core;

	let isSidebarOpen = false;

	type Metric = { name: string; values: string[] };
	let metrics: Metric[] = [];

	const handleAnalzerBtnClick = () => {
		const _metrics: Metric[] = [];

		// ========= Toggle Metric Containers
		const round = (value: number, decimals: number) => {
			const shifted = value * Math.pow(10, decimals);
			return Number((Math.round(shifted) / Math.pow(10, decimals)).toFixed(decimals));
		};

		const nodes = cy.nodes();
		const selector = cy.$();
		// ========== Degreee Centrality | Concept: TBD.
		/**
		 * Number of links incident upon a node.
		 */
		const degreeCentrality = nodes
			.map((node) => {
				const dc = selector.dc({ root: node, directed: true });
				return {
					id: node.id(),
					in: dc.indegree,
					out: dc.outdegree
				};
			})
			.sort((a, b) => (a.id > b.id ? 1 : -1));

		_metrics.push({
			name: 'Degree Centrality',
			values: degreeCentrality.map((v) => JSON.stringify(v))
		});

		const degreeCentralityNormalized = nodes
			.map((node) => {
				const dc = selector.dcn({ directed: true });
				return {
					id: node.id(),
					in: round(dc.indegree(node), 3),
					out: round(dc.outdegree(node), 3)
				};
			})
			.sort((a, b) => (a.id > b.id ? 1 : -1));

		_metrics.push({
			name: 'Degree Centrality Normalized',
			values: degreeCentralityNormalized.map((v) => JSON.stringify(v))
		});

		// ========== Normalized Betweenness Centrality | Concept: Gatekeepers
		/**
		 * For every pair of vertices, there exists at least one shortest path between the vertices
		 * such that either the number of edges that the path passes through (for unweighted graphs)
		 * or the sum of the weights of the edges (for weighted graphs) is minimized.
		 * The betweenness centrality for each vertex is the number of these shortest paths that pass
		 * through the vertex.
		 *
		 */
		const bc = selector.bc();
		const betweenness = nodes
			.map((node) => ({
				id: node.id(),
				bc: round(bc.betweennessNormalized(node), 3)
			}))
			.sort((a, b) => (a.bc < b.bc ? 1 : -1));

		_metrics.push({
			name: 'Betweeness Centrality Normalized',
			values: betweenness.map((v) => JSON.stringify(v))
		});

		// ========== Normalized Closeness Centrality | Concept: Central / excluded figures
		/**
		 * The reciprocal of the sum of the length of the shortest paths between the node
		 * and all other nodes in the graph. Thus, the more central a node is, the closer it is to all
		 * other nodes.
		 *
		 */
		const ccn = selector.ccn();
		const closenessCentrality = nodes
			.map((node) => ({
				id: node.id(),
				cc: round(ccn.closeness(node), 3)
			}))
			.sort((a, b) => (a.cc < b.cc ? 1 : -1));

		_metrics.push({
			name: 'Closeness Centrality Normalized',
			values: closenessCentrality.map((v) => JSON.stringify(v))
		});

		// ========== Normalized Page Rank | Concept: Relative Importance
		/**
		 * A higher PageRank value indicates a higher relative importance or influence of a node
		 * within the network
		 */
		const pr = cy.elements().pageRank();
		const pageRanks = nodes
			.map((node) => ({
				id: node.id(),
				pr: round(pr.rank(node), 3)
			}))
			.sort((a, b) => (a.pr < b.pr ? 1 : -1));

		_metrics.push({
			name: 'Page Rank',
			values: pageRanks.map((v) => JSON.stringify(v))
		});

		metrics = _metrics;
		cy.resize();
	};
</script>

<aside class="sidebar" class:open={isSidebarOpen}>
	<button class="toggleBtn" on:click={() => (isSidebarOpen = !isSidebarOpen)}
		>{isSidebarOpen ? '<' : '>'}</button
	>

	<div class="flex flex-col p-4 pr-0 gap-4 h-full">
		<div class="flex flex-col bg-white rounded-md">
			<button id="optimizeBtn" class="py-2">Make me sexy! 🤤</button>
			<hr />
			<button on:click={handleAnalzerBtnClick} class="py-2">Gimme the numbers! 🧮</button>
			<hr />
			<button id="saveBtn" class="py-2">Speichern 📁</button>
		</div>
		{#if metrics.length}
			<div
				class="flex-1 flex flex-col overflow-y-clip"
				in:fly={{ y: 8, duration: 300 }}
				out:fly={{ y: 8, duration: 100 }}
			>
				<div class="bg-white rounded-md overflow-y-scroll p-1">
					<dl class="divide-y divide-gray-100">
						{#each metrics as metric (metric.name)}
							<Expandable>
								<svelte:fragment slot="head">{metric.name}</svelte:fragment>
								<svelte:fragment slot="body">{metric.values.join('\n')}</svelte:fragment>
							</Expandable>
						{/each}
					</dl>
				</div>
			</div>
		{/if}
	</div>
</aside>

<style>
	.sidebar {
		@apply fixed inset-0 max-w-xs transform transition ease-in-out duration-300 sm:duration-500 pointer-events-none;
	}

	.sidebar > * {
		@apply pointer-events-auto;
	}

	.toggleBtn {
		@apply absolute top-4 right-0 bg-white px-4 py-2 rounded-full;
		transform: translateX(calc(100% + 16px));
	}

	.open {
		@apply -translate-x-full;
	}
</style>
