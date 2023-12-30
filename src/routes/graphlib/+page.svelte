<script lang="ts">
	import type cytoscape from 'cytoscape';
	import Mousetrap from 'mousetrap';
	import { onMount } from 'svelte';
	import { initCytoscape } from '$lib/initCytoscape';
	import { randomLayout } from '$lib/graphlib/layout/randomLayout';
	import fruchtermanReingold from '$lib/graphlib/layout/fruchtermanReingold';
	import kamadaKawai from '$lib/graphlib/layout/kamadaKawai';
	import CollapsableSidePanel from '$lib/components/CollapsableSidePanel/CollapsableSidePanel.svelte';
	import { loadGraph, saveGraph } from '$lib/storage';
	import { pushToast } from '$lib/components/Toast';
	import { fromCytoscape } from '$lib/graphlib/cytoscapeAdapter';
	import { setupEdgeDrawer } from '$lib/cytoscapeEdgeDrawer';

	let container: HTMLElement;
	let cy: cytoscape.Core;

	let toggleLeftSidePanel: () => void;
	let toggleRightSidePanel: () => void;

	const LAYOUT_PADDING = 16; // padding to each side of the canvas

	const layoutFuncs = {
		randomLayout: randomLayout,
		fruchtermanReingold: fruchtermanReingold,
		kamadaKawai: kamadaKawai
	};
	const applyLayout = (layoutFunc: keyof typeof layoutFuncs) => {
		const { graph, layout } = fromCytoscape(cy.elements());
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

		cy.fit(undefined, LAYOUT_PADDING);
	};

	const setUpShortCust = () => {
		Mousetrap.bind('[', toggleLeftSidePanel);
		Mousetrap.bind(']', toggleRightSidePanel);
		Mousetrap.bind('command+s', (e) => {
			e.preventDefault();
			saveGraph(cy.json().elements);
			pushToast({ message: '✅ Erfolgreich gespeichert!' });
		});
	};

	const clearCmdPalette = () => {
		const input = document.getElementById('cmd-palette-input') as HTMLInputElement | null;
		if (!input) return;
		input.value = '';
	};

	const setupCommandPalette = (cy: cytoscape.Core) => {
		const CMD_PALETTE_CONTAINER_ID = 'cmd-palette';
		const container = document.getElementById(CMD_PALETTE_CONTAINER_ID);
		if (!container) {
			throw new Error(`Missing cmd palette container with id: ${CMD_PALETTE_CONTAINER_ID}`);
		}

		// Track mouse movement to be able to add new vertex where mouse is placed
		let mousePos = { x: 0, y: 0 };
		document.body.addEventListener('mousemove', (event) => {
			mousePos = { x: event.clientX, y: event.clientY };
		});

		type Position = { x: number; y: number };
		const convertToCytoscapeCoordinates = (mousePos: Position) => {
			const pan = cy.pan();
			const zoom = cy.zoom();
			return {
				x: (mousePos.x - pan.x) / zoom,
				y: (mousePos.y - pan.y) / zoom
			};
		};

		const cmdMap = {
			'cmd+a': () => {
				// Open cmd-palette on cmd+a
				container.classList.toggle('hidden', false); // Remove 'hidden' class to show the input
				container.classList.toggle('block', true); // Add 'block' class
				document.getElementById('cmd-palette-input')?.focus();
			},
			Escape: () => {
				// Close cmd-palette on escape
				if (container.classList.contains('hidden')) return;
				container.classList.add('hidden');
				container.classList.remove('block');
				clearCmdPalette();
			},
			del: () => {
				const elemensToDelete = cy.elements('node:selected');
				elemensToDelete.forEach((selectedNode) => {
					cy.remove(selectedNode.connectedEdges());
					cy.remove(selectedNode);
				});

				const edgesToDelete = cy.elements('edge:selected');
				edgesToDelete.forEach((selectedEdge) => {
					cy.remove(selectedEdge);
				});
			},
			Enter: () => {
				if (container.classList.contains('hidden')) return;
				container.classList.add('hidden');
				container.classList.remove('block');
				const input = document.getElementById('cmd-palette-input') as HTMLInputElement | null;
				if (!input) return;
				const value = input.value;
				const cyPos = convertToCytoscapeCoordinates(mousePos);
				cy.add({ group: 'nodes', data: { id: value }, position: cyPos });
				clearCmdPalette();
			}
		} as { [cmdKey: string]: (event: KeyboardEvent) => void };

		const constructCmdKey = ({ key, metaKey, ctrlKey }: KeyboardEvent) => {
			let cmd = '';
			if (metaKey || ctrlKey) cmd += 'cmd+';

			cmd += key;

			// unify delete
			cmd = cmd.replace('Del', 'del');
			cmd = cmd.replace('Delete', 'del');
			cmd = cmd.replace('Backspace', 'del');

			// remove "Meta" when cmd only is pressed
			cmd = cmd.replace('Meta', '');

			return cmd;
		};

		document.addEventListener('keydown', (event) => {
			const cmdKey = constructCmdKey(event);
			const cmd = cmdMap[cmdKey];
			if (cmd) cmd(event);
		});

		document.addEventListener('click', (event) => {
			// Close cmd-palette on outside click
			const input = document.getElementById('cmd-palette-input');
			if (!(container && input)) return;

			if (!input.contains(event.target as any) && !container.classList.contains('hidden')) {
				container.classList.add('hidden');
				container.classList.remove('block');
				clearCmdPalette();
			}
		});
	};

	onMount(() => {
		if (!container) return;
		cy = initCytoscape({ initialElements: loadGraph(), container, layoutPadding: LAYOUT_PADDING });
		setUpShortCust();
		setupCommandPalette(cy);
		setupEdgeDrawer(cy);
	});
</script>

<div bind:this={container} id="cy-container" class="w-full h-full overflow-x-clip"></div>

<div id="cmd-palette" class="hidden relative z-10" role="dialog" aria-modal="true">
	<div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>

	<div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
		<div class="mx-auto max-w-xl">
			<input
				id="cmd-palette-input"
				type="text"
				class="h-12 w-full border-0 bg-transparent px-4 py-4 text-gray-900 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
				placeholder="Beschriftung"
				role="combobox"
				aria-expanded="false"
				aria-controls="options"
			/>
		</div>
	</div>
</div>

<CollapsableSidePanel position="left" bind:toggle={toggleLeftSidePanel}>
	<div class="w-full h-full bg-white">Left Panel</div>
</CollapsableSidePanel>
<CollapsableSidePanel position="right" bind:toggle={toggleRightSidePanel}>
	<div class="p-4 pl-0">
		<div class="flex flex-col bg-white rounded-md divide-y divide-gray-100">
			<button on:click={() => applyLayout('randomLayout')} class="py-2">Random Layout</button>
			<button on:click={() => cy.layout({ name: 'cola', animate: false }).run()} class="py-2">Cola</button>
			<button on:click={() => applyLayout('fruchtermanReingold')} class="py-2">Fruchterman & Reingold</button>
			<button on:click={() => applyLayout('kamadaKawai')} class="py-2">Kamada Kawai</button>
		</div>
	</div>
</CollapsableSidePanel>
