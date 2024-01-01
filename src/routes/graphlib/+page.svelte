<script lang="ts">
	import type cytoscape from 'cytoscape';
	import Mousetrap from 'mousetrap';
	import { onMount } from 'svelte';
	import { initCytoscape } from '$lib/initCytoscape';
	import { randomLayout } from '$lib/graphlib/core/layout/randomLayout';
	import fruchtermanReingold from '$lib/graphlib/core/layout/fruchtermanReingold';
	import kamadaKawai from '$lib/graphlib/core/layout/kamadaKawai';
	import CollapsableSidePanel from '$lib/components/CollapsableSidePanel/CollapsableSidePanel.svelte';
	import { saveGraph } from '$lib/storage';
	import { pushToast } from '$lib/components/Toast';
	import { setupEdgeDrawer } from '$lib/cytoscapeEdgeDrawer';
	import scaledFruchtermanReingold from '$lib/graphlib/core/layout/scaledFruchtermanReingold';
	import { fromAdjacencyMatrix, fromCytoscape, toCytoscape } from '$lib/graphlib/adapters';
	import {
		applyDisplacement,
		calculateLinearRegression,
		calculatePerpendicularVector,
		detectLinearSets
	} from '$lib/graphlib/core/layout/linearityAvoidance';
	import { weightToColor } from '$lib/graphlib/helper';

	let container: HTMLElement;
	let cy: cytoscape.Core;

	let toggleLeftSidePanel: () => void;
	let toggleRightSidePanel: () => void;

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

			cy.style()
				.selector('edge')
				.style('curve-style', 'bezier')
				.style('line-color', (ele) => {
					const weight = ele.data().weight;
					let nWeight = 0;
					if (weight > 0) nWeight = weight / maxPositive; // Scale positive weights between 0 and 1
					else if (weight < 0) nWeight = weight / Math.abs(minNegative); // Scale negative weights between -1 and 0
					const c = weightToColor(weight, minNegative, maxPositive);
					console.log(ele.data(), weight, c);
					return c;
				})
				.update();
		}

		cy.fit(undefined, LAYOUT_PADDING);

		return newLayout;
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
		const data = {
			'1': [0, 2, 0, 0, 0],
			'2': [2, 0, 1, 0, 0],
			'3': [-1, 0, 0, 1, 0],
			'4': [1, 0, 0, 0, 0],
			'5': [0, 0, 0, 0, 0]
		};

		const graph = fromAdjacencyMatrix(data);

		let layout = randomLayout(graph, { container: container.getBoundingClientRect() });
		cy = initCytoscape({
			initialElements: toCytoscape(graph, layout),
			container,
			layoutPadding: LAYOUT_PADDING
		});
		layout = applyLayout('scaledFruchtermanReingold');
		setUpShortCust();
		setupCommandPalette(cy);
		setupEdgeDrawer(cy);

		// toggleRightSidePanel();

		// Apply Displacement for lineary aligned nodes
		let uniqueLinearSets = detectLinearSets(graph, layout, 3, 0.95);
		uniqueLinearSets.forEach((set) => {
			if (set.length === 4) {
				let middleNodeIds = [set[1], set[2]]; // Second and third nodes in the sorted set

				// Calculate line of best fit for the set
				let positions = middleNodeIds.map((id) => layout[id]);
				let { slope } = calculateLinearRegression(positions);

				// Calculate displacement vectors
				let displacementMagnitude = 60; // Example magnitude
				let displacementVector1 = calculatePerpendicularVector(slope, displacementMagnitude);
				let displacementVector2 = { x: -displacementVector1.x, y: -displacementVector1.y };

				// Apply displacement
				applyDisplacement(layout, middleNodeIds[0], displacementVector1);
				applyDisplacement(layout, middleNodeIds[1], displacementVector2);
			}
		});

		cy.batch(() => {
			cy.nodes().forEach((node) => {
				const newPos = layout[node.id()];
				if (newPos) node.position(newPos);
			});
		});
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
			<button on:click={() => applyLayout('scaledFruchtermanReingold')} class="py-2"
				>Scaled Fruchterman & Reingold</button
			>
			<button on:click={() => applyLayout('kamadaKawai')} class="py-2">Kamada Kawai</button>
		</div>
	</div>
</CollapsableSidePanel>
