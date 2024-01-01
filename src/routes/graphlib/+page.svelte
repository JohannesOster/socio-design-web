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

	let container: HTMLElement;
	let cy: cytoscape.Core;

	let toggleLeftSidePanel: () => void;
	let toggleRightSidePanel: () => void;

	let nodeLabelInput: HTMLInputElement;
	let modalIsOpen = false;
	let toggleModal = () => {
		if (modalIsOpen) {
			const input = document.getElementById('cmd-palette-input') as HTMLInputElement | null;
			if (input) input.value = '';
		}
		modalIsOpen = !modalIsOpen;
	};

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
		scaledContainer.width /= 1.5;
		scaledContainer.height /= 1.5;
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

			// cy.style()
			// 	.selector('edge')
			// 	.style('curve-style', 'bezier')
			// 	.style('line-color', (ele) => {
			// 		const weight = ele.data().weight;
			// 		let nWeight = 0;
			// 		if (weight > 0) nWeight = weight / maxPositive; // Scale positive weights between 0 and 1
			// 		else if (weight < 0) nWeight = weight / Math.abs(minNegative); // Scale negative weights between -1 and 0
			// 		const c = weightToColor(weight, minNegative, maxPositive);
			// 		return c;
			// 	})
			// 	.update();
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
	const handleSave = (e: Mousetrap.ExtendedKeyboardEvent) => {
		e.preventDefault();
		saveGraph(cy.json().elements);
		pushToast({ message: '✅ Erfolgreich gespeichert!' });
	};

	const handleNewNodeCmd = (e: Mousetrap.ExtendedKeyboardEvent) => {
		e.preventDefault();
		toggleModal();
		setTimeout(() => nodeLabelInput?.focus(), 10); // modal takes a few ms render
	};

	const handleEscape = (e: Mousetrap.ExtendedKeyboardEvent) => {
		if (!modalIsOpen) return;
		toggleModal();
	};

	const handleEnter = (e: Mousetrap.ExtendedKeyboardEvent) => {
		e.preventDefault && e.preventDefault();
		if (!modalIsOpen) return;
		const input = document.getElementById('node-label') as HTMLInputElement | null;
		if (!input) return;
		const value = input.value;
		if (value) {
			const cyPos = convertToCytoscapeCoordinates(mousePos);
			cy.add({ group: 'nodes', data: { id: value }, position: cyPos });
		}
		toggleModal();
	};

	const handleDel = (e: Mousetrap.ExtendedKeyboardEvent) => {
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

	const setUpShortCust = () => {
		Mousetrap.bind('[', toggleLeftSidePanel);
		Mousetrap.bind(']', toggleRightSidePanel);
		Mousetrap.bind('command+s', handleSave);
		Mousetrap.bind('command+a', handleNewNodeCmd);
		Mousetrap.bind('esc', handleEscape);
		Mousetrap.bind(['return', 'enter'], handleEnter);
		Mousetrap.bind('l', handleEnter);
		Mousetrap.bind(['delete', 'backspace'], handleDel);
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
		toggleRightSidePanel();
	});
</script>

<div bind:this={container} id="cy-container" class="w-full h-full overflow-x-clip"></div>

<Modal bind:toggleModal bind:showModal={modalIsOpen}>
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

<CollapsableSidePanel position="left" bind:toggle={toggleLeftSidePanel}>
	<div class="w-full h-full bg-white">Left Panel</div>
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
