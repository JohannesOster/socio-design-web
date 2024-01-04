<script lang="ts">
	import type cytoscape from 'cytoscape';
	import Mousetrap from 'mousetrap';
	import { onMount } from 'svelte';
	import { initCytoscape } from '$lib/initCytoscape';
	import { randomLayout } from '$lib/graphlib/core/layout/randomLayout';
	import fruchtermanReingold from '$lib/graphlib/core/layout/fruchtermanReingold';
	import kamadaKawai from '$lib/graphlib/core/layout/kamadaKawai';
	import CollapsableSidePanel from '$lib/components/CollapsableSidePanel/CollapsableSidePanel.svelte';
	import { loadGraph, saveGraph } from '$lib/storage';
	import { pushToast } from '$lib/components/Toast';
	import { setupEdgeDrawer } from '$lib/cytoscapeEdgeDrawer';
	import scaledFruchtermanReingold from '$lib/graphlib/core/layout/scaledFruchtermanReingold';
	import { fromCytoscape } from '$lib/graphlib/adapters';
	import {
		applyDisplacement,
		calculateLinearRegression,
		calculatePerpendicularVector,
		detectLinearSets
	} from '$lib/graphlib/core/layout/linearityAvoidance';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import Expandable from '$lib/components/Expandable.svelte';
	import { fly } from 'svelte/transition';

	let container: HTMLElement;
	let cy: cytoscape.Core;

	let toggleLeftSidePanel: () => void;
	let toggleRightSidePanel: () => void;

	let nodeLabelInput: HTMLInputElement;
	let isNewNodeModalOpen = false;
	let toggleNewNodeModal = () => {
		if (isNewNodeModalOpen) {
			const input = document.getElementById('node-label') as HTMLInputElement | null;
			if (input) input.value = '';
		}
		isNewNodeModalOpen = !isNewNodeModalOpen;
	};

	let edgeWeightInput: HTMLInputElement;
	let isEdgeWeightModalOpen = false;
	let toggleEdgeWeightModal = () => {
		if (isEdgeWeightModalOpen) {
			const input = document.getElementById('edge-weight') as HTMLInputElement | null;
			if (input) input.value = '';
		}
		isEdgeWeightModalOpen = !isEdgeWeightModalOpen;
	};

	let selectedEdge: cytoscape.Singular | null;

	const LAYOUT_PADDING = 64; // padding to each side of the canvas

	const layoutFuncs = {
		randomLayout: randomLayout,
		fruchtermanReingold: fruchtermanReingold,
		kamadaKawai: kamadaKawai,
		scaledFruchtermanReingold: scaledFruchtermanReingold
	};
	const applyLayout = (layoutFunc: keyof typeof layoutFuncs) => {
		const { graph, layout } = fromCytoscape(cy.elements());
		let scaledContainer = container.getBoundingClientRect();
		// scaledContainer.width /= 1.5;
		// scaledContainer.height /= 1.5;
		const newLayout = layoutFuncs[layoutFunc](graph, {
			container: scaledContainer,
			initialLayout: layout
		});

		cy.batch(() => {
			cy.nodes().forEach((node) => {
				const newPos = newLayout[node.id()];
				if (newPos) node.position(newPos);
			});
		});

		if (layoutFunc === 'scaledFruchtermanReingold') {
			let maxPositive = 0;
			let minNegative = 0;

			// Find the maximum positive and minimum negative weights
			Object.values(graph.edges).forEach(({ weight }) => {
				if (weight > 0) maxPositive = Math.max(maxPositive, weight);
				else minNegative = Math.min(minNegative, weight);
			});

			let uniqueLinearSets = detectLinearSets(graph, layout, 3, 0.95);
			uniqueLinearSets.forEach((set) => {
				if (set.length >= 3) {
					// Calculate line of best fit for the set
					let positions = set.map((id) => layout[id]);
					let { slope } = calculateLinearRegression(positions);

					// Calculate displacement vectors
					let displacementMagnitude = 30; // Example magnitude
					let displacementVector = calculatePerpendicularVector(slope, displacementMagnitude);

					// Apply displacement
					set.forEach((nodeId, index) => {
						let displacement =
							index % 2 === 0 ? displacementVector : { x: -displacementVector.x, y: -displacementVector.y };
						applyDisplacement(layout, nodeId, displacement);
					});
				}
			});

			cy.batch(() => {
				cy.nodes().forEach((node) => {
					const newPos = layout[node.id()];
					if (newPos) node.position(newPos);
				});
			});
		}

		cy.fit(undefined, LAYOUT_PADDING);

		return newLayout;
	};

	/* ==================== SHORT CUTS =================== */
	// - Utils
	type Position = { x: number; y: number };
	let mousePos: Position = { x: 0, y: 0 };
	const convertToCytoscapeCoordinates = (mousePos: Position) => {
		const pan = cy.pan();
		const zoom = cy.zoom();
		return {
			x: (mousePos.x - pan.x) / zoom,
			y: (mousePos.y - pan.y) / zoom
		};
	};

	// - Command Handlers
	const handleSave = (e?: Mousetrap.ExtendedKeyboardEvent) => {
		e?.preventDefault();
		saveGraph(cy.json().elements);
		pushToast({ message: '✅ Erfolgreich gespeichert!' });
	};

	const handleNewNodeCmd = (e: Mousetrap.ExtendedKeyboardEvent) => {
		e.preventDefault();
		toggleNewNodeModal();
		setTimeout(() => nodeLabelInput?.focus(), 10); // modal takes a few ms render
	};

	const handleEscape = (e: Mousetrap.ExtendedKeyboardEvent) => {
		if (isNewNodeModalOpen) toggleNewNodeModal();
		else if (isEdgeWeightModalOpen) toggleEdgeWeightModal();
	};

	const handleEnter = (e: Mousetrap.ExtendedKeyboardEvent) => {
		e.preventDefault && e.preventDefault();

		if (isNewNodeModalOpen) {
			const value = nodeLabelInput.value;
			if (value) {
				const cyPos = convertToCytoscapeCoordinates(mousePos);
				cy.add({ group: 'nodes', data: { id: value }, position: cyPos });
			}
			toggleNewNodeModal();
		} else if (isEdgeWeightModalOpen) {
			const value = new Number(edgeWeightInput.value);
			if (value) cy.getElementById(selectedEdge!.id()).data('weight', value);
			toggleEdgeWeightModal();
		}
	};

	const handleDel = (e: Mousetrap.ExtendedKeyboardEvent) => {
		const activeElem = document.activeElement?.tagName.toLocaleLowerCase() || '';
		if (['input', 'textarea', 'select', 'form'].includes(activeElem)) return;
		const elemensToDelete = cy.elements('node:selected');
		elemensToDelete.forEach((selectedNode) => {
			cy.remove(selectedNode.connectedEdges());
			cy.remove(selectedNode);
		});

		const edgesToDelete = cy.elements('edge:selected');
		edgesToDelete.forEach((selectedEdge) => {
			cy.remove(selectedEdge);
		});
	};

	const handleE = (e: Mousetrap.ExtendedKeyboardEvent) => {
		if (isNewNodeModalOpen || !selectedEdge) return;

		toggleEdgeWeightModal();
		setTimeout(() => edgeWeightInput?.focus(), 10); // modal takes a few ms render
	};

	const setUpShortCust = () => {
		Mousetrap.bind('[', toggleLeftSidePanel);
		Mousetrap.bind(']', toggleRightSidePanel);
		Mousetrap.bind('command+s', handleSave);
		Mousetrap.bind('command+a', handleNewNodeCmd);
		Mousetrap.bind('esc', handleEscape);
		Mousetrap.bind(['return', 'enter'], handleEnter);
		Mousetrap.bind(['delete', 'backspace'], handleDel);
		Mousetrap.bind('e', handleE);
	};

	onMount(() => {
		document.body.addEventListener('mousemove', (event) => {
			mousePos = { x: event.clientX, y: event.clientY };
		});

		if (!container) return;

		cy = initCytoscape({
			initialElements: loadGraph(),
			container,
			layoutPadding: LAYOUT_PADDING
		});
		setUpShortCust();
		setupEdgeDrawer(cy);

		cy.on('select', 'edge', ({ target }) => (selectedEdge = target));
		cy.on('unselect', 'edge', () => (selectedEdge = null));
	});

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

<div bind:this={container} id="cy-container" class="w-full h-full overflow-x-clip"></div>

<Modal bind:toggleModal={toggleNewNodeModal} bind:showModal={isNewNodeModalOpen}>
	<svelte:fragment slot="body">
		<form class="mt-2">
			<div class="flex flex-col gap-y-1">
				<label for="node-label" class="block text-sm font-medium leading-6 text-gray-900">Node Label</label>
				<input
					bind:this={nodeLabelInput}
					type="text"
					name="node-label"
					id="node-label"
					class="mousetrap block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder="Davic"
				/>
			</div>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<Button on:click={() => Mousetrap.trigger('return')}>Speichern</Button>
		<Button on:click={() => Mousetrap.trigger('esc')} variant="secondary">Abbrechen</Button>
	</svelte:fragment>
</Modal>

<Modal bind:toggleModal={toggleEdgeWeightModal} bind:showModal={isEdgeWeightModalOpen}>
	<svelte:fragment slot="body">
		<form class="mt-2">
			<div class="flex flex-col gap-y-1">
				<label for="edge-weight" class="block text-sm font-medium leading-6 text-gray-900">Kantengewicht</label>
				<input
					bind:this={edgeWeightInput}
					type="number"
					name="edge-weight"
					id="node-label"
					value={selectedEdge?.data().weight}
					class="mousetrap block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					placeholder="Davic"
				/>
			</div>
		</form>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<Button on:click={() => Mousetrap.trigger('return')}>Speichern</Button>
		<Button on:click={() => Mousetrap.trigger('esc')} variant="secondary">Abbrechen</Button>
	</svelte:fragment>
</Modal>

<CollapsableSidePanel position="left" bind:toggle={toggleLeftSidePanel}>
	<div class="flex flex-col p-4 pr-0 gap-4 h-full">
		<div class="flex flex-col bg-white rounded-md">
			<button on:click={handleAnalzerBtnClick} class="py-2">Gimme the numbers! 🧮</button>
			<hr />
			<button on:click={() => handleSave()} class="py-2">Speichern 📁</button>
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
								<svelte:fragment slot="body">{metric.values.join('\n\n')}</svelte:fragment>
							</Expandable>
						{/each}
					</dl>
				</div>
			</div>
		{/if}
	</div>
</CollapsableSidePanel>
<CollapsableSidePanel position="right" bind:toggle={toggleRightSidePanel}>
	<div class="p-4 pl-0">
		<div class="flex flex-col bg-white rounded-md divide-y divide-gray-100">
			<button on:click={() => applyLayout('randomLayout')} class="py-2">Random Layout</button>
			<button on:click={() => cy.layout({ name: 'cola', animate: false }).run()} class="py-2">Cola</button>
			<button on:click={() => applyLayout('fruchtermanReingold')} class="py-2">Fruchterman & Reingold</button>
			<button on:click={() => applyLayout('scaledFruchtermanReingold')} class="py-2"
				>Scaled Fruchterman & Reingold</button
			>
			<button on:click={() => applyLayout('kamadaKawai')} class="py-2">Kamada Kawai</button>
		</div>
	</div>
</CollapsableSidePanel>
