<script lang="ts">
	/* ==================== IMPORTS  */
	import type cytoscape from 'cytoscape';
	import Mousetrap from 'mousetrap';
	import { onMount } from 'svelte';
	import { initCytoscape } from '$lib/initCytoscape';
	import CollapsableSidePanel from '$lib/components/CollapsableSidePanel/CollapsableSidePanel.svelte';
	import { loadGraph, saveGraph } from '$lib/storage';
	import { pushToast } from '$lib/components/Toast';
	import { setupEdgeDrawer } from '$lib/cytoscapeEdgeDrawer';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import Expandable from '$lib/components/Expandable.svelte';
	import { fly } from 'svelte/transition';
	import AddEditNodeForm from '$lib/components/AddEditGraphElementsForm/AddEditNodeForm.svelte';
	import AddEditEdgeForm from '$lib/components/AddEditGraphElementsForm/AddEditEdgeForm.svelte';
	import type { NodeSingular } from 'cytoscape';
	import OverlayComponent from '$lib/components/Overlay.svelte';
	import { applyLayout } from '$lib/layoutManager';

	/* ==================== COMPONENT STATE / CORE VARIABLES  */
	const LAYOUT_PADDING = 64; // padding to each side of the canvas

	let container: HTMLDivElement;
	let cy: cytoscape.Core;

	// anchored, dragable overlays to display node notes and edit node
	type Overlay = {
		state: 'idle' | 'dragging';
		container: HTMLDivElement;
		svgLine: SVGLineElement;
		dragOffset: { x: number; y: number };
		nodePositionOffset: { x: number; y: number };
		component: OverlayComponent;
	};
	const overlayPool: Overlay[] = []; // pool to store unassiged overlays
	const nodeOverlayMap = new Map<string, Overlay>();
	const finalDisplacementMap = new Map<string, Position>();
	let lineSVG: SVGElement;

	let toggleLeftSidePanel: () => void;
	let toggleRightSidePanel: () => void;

	let nodeLabelInput: HTMLInputElement;
	let nodeNotesTextarea: HTMLTextAreaElement;
	let edgeWeightInput: HTMLInputElement;

	let isAddEditElementModalOpen = false;
	let addEditElementModalElementType: 'node' | 'edge' = 'node';

	/* ====================  Add Edit Element Modal */
	let openAddEditElementModal = (elementType: 'node' | 'edge', elementToEdit?: cytoscape.Singular) => {
		addEditElementModalElementType = elementType;

		if (elementType === 'node') {
			isAddEditElementModalOpen = true;
			setTimeout(() => {
				nodeLabelInput.value = elementToEdit?.data().label || elementToEdit?.id() || '';
				nodeNotesTextarea.value = elementToEdit?.data().notes || '';
				nodeLabelInput?.focus(), 10;
			}); // modal takes a few ms render
		} else if (elementType === 'edge') {
			isAddEditElementModalOpen = true;
			setTimeout(() => {
				edgeWeightInput.value = elementToEdit?.data().weight || '';
				edgeWeightInput?.focus(), 10;
			}); // modal takes a few ms render
		}
	};

	let closeAddEditElementModal = () => (isAddEditElementModalOpen = false);

	/* ==================== SHORT CUTS  */
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

	const isInputFieldActive = () => {
		const activeElem = document.activeElement?.tagName.toLocaleLowerCase() || '';
		return ['input', 'textarea', 'select', 'form'].includes(activeElem);
	};

	// - Command Handlers
	const handleSave = (e?: Mousetrap.ExtendedKeyboardEvent) => {
		e?.preventDefault();
		saveGraph(cy.json().elements);
		pushToast({ message: '✅ Erfolgreich gespeichert!' });
	};

	const handleNewNodeCmd = (e: Mousetrap.ExtendedKeyboardEvent) => {
		if (isAddEditElementModalOpen) return;
		if (isInputFieldActive()) return;
		e.preventDefault();
		openAddEditElementModal('node');
	};

	const handleEscape = (e: Mousetrap.ExtendedKeyboardEvent) => {
		closeAddEditElementModal();
	};

	const handleEnter = (e: Mousetrap.ExtendedKeyboardEvent) => {
		e.preventDefault && e.preventDefault();

		const selectedNode = cy.elements('node:selected');
		const selectedEdge = cy.elements('edge:selected');

		if (!isAddEditElementModalOpen) return;
		if (addEditElementModalElementType === 'node') {
			const label = nodeLabelInput.value;
			const notes = nodeNotesTextarea.value;

			if (selectedNode.id()) {
				// - Edit existing node
				cy.getElementById(selectedNode!.id()).data('label', label).data('notes', notes);
			} else {
				// - Add new node
				const cyPos = convertToCytoscapeCoordinates(mousePos);
				const id = Math.random()
					.toString(36)
					.replace(/[^a-z]+/g, '')
					.substring(2, 10);
				cy.add({ group: 'nodes', data: { id, label, notes }, position: cyPos });
			}
		} else if (addEditElementModalElementType === 'edge') {
			if (!selectedEdge.id()) return;

			const value = new Number(edgeWeightInput.value);
			if (value) cy.getElementById(selectedEdge!.id()).data('weight', value);
		}

		closeAddEditElementModal();
	};

	const handleDel = (e: Mousetrap.ExtendedKeyboardEvent) => {
		if (isInputFieldActive()) return;
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
		if (isAddEditElementModalOpen) return;
		if (isInputFieldActive()) return;

		const selectedNode = cy.elements('node:selected');
		const selectedEdge = cy.elements('edge:selected');

		const numberOfSelectedElements = selectedEdge.length + selectedNode.length;

		const selectedMultiple = numberOfSelectedElements > 1;

		if (selectedMultiple) {
			console.error('Cannot edit multiple elements.');
			return;
		}

		if (numberOfSelectedElements === 0) return;

		if (selectedEdge.id()) openAddEditElementModal('edge', selectedEdge);
		else if (selectedNode.id()) openAddEditElementModal('node', selectedNode);
	};

	const setUpShortCust = () => {
		Mousetrap.bind('[', toggleLeftSidePanel);
		Mousetrap.bind(']', toggleRightSidePanel);
		Mousetrap.bind(['command+s', 'ctrl+s'], handleSave);
		Mousetrap.bind(['command+a', 'ctrl+a'], handleNewNodeCmd);
		Mousetrap.bind('esc', handleEscape);
		Mousetrap.bind(['command+return', 'command+enter', 'ctrl+return', 'ctrl+enter'], handleEnter);
		Mousetrap.bind(['delete', 'backspace'], handleDel);
		Mousetrap.bind('e', handleE);
	};

	/** ===================== Export */
	const handleExport = () => {
		const obj = cy.json().elements;
		const jsonStr = JSON.stringify(obj);
		const blob = new Blob([jsonStr], { type: 'application/json' });
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'socio-design.json';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		window.URL.revokeObjectURL(url);
	};

	/* ====================  Metrics */
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

	/* ==================== Anchored, Dragabble Overlays */
	const getPositionOfOverlayContainer = (overlayContainer: HTMLDivElement) => {
		// Helper function to get the current position of an overlay
		let overlayRect = overlayContainer.getBoundingClientRect();
		let containerRect = container.getBoundingClientRect();
		return {
			x: overlayRect.left - containerRect.left + window.scrollX,
			y: overlayRect.top - containerRect.top + window.scrollY
		};
	};

	function updateNodePositionOffset(node: NodeSingular) {
		const overlay = nodeOverlayMap.get(node.id());
		if (!overlay) return;
		let nodePos = node.renderedPosition();
		let overlayPos = getPositionOfOverlayContainer(overlay.container);
		// Calculate and store the offset from the node to the overlay
		overlay.nodePositionOffset.x = overlayPos.x - nodePos.x;
		overlay.nodePositionOffset.y = overlayPos.y - nodePos.y;
	}

	const updateOverlayAndLineForNode = (node: cytoscape.NodeSingular) => {
		const overlay = nodeOverlayMap.get(node.id());
		if (!overlay) return;

		requestAnimationFrame(() => {
			const { x, y } = node.renderedPosition();
			// Position Overlay
			if (overlay.state !== 'dragging') {
				overlay.container.style.left = `${x + overlay.nodePositionOffset.x}px`;
				overlay.container.style.top = `${y + overlay.nodePositionOffset.y}px`;
			}

			// Update Line Position
			const pos = getPositionOfOverlayContainer(overlay.container);
			overlay.svgLine.setAttribute('x1', `${x}`);
			overlay.svgLine.setAttribute('y1', `${y}`);
			overlay.svgLine.setAttribute('x2', `${pos.x + overlay.container.offsetWidth / 2}`);
			overlay.svgLine.setAttribute('y2', `${pos.y + overlay.container.offsetHeight / 2}`);
		});
	};

	const displayOverlay = (node: cytoscape.NodeSingular) => {
		let overlay: Overlay;

		if (overlayPool.length > 0) {
			overlay = overlayPool.pop()!;
			overlay.dragOffset = { x: 0, y: 0 };
			overlay.nodePositionOffset = { x: 0, y: 0 };
			updateNodePositionOffset(node);
		} else {
			overlay = createOverlayElement();
			container.appendChild(overlay.container);
			lineSVG.appendChild(overlay.svgLine);
		}

		const onMouseDown = (e: MouseEvent) => e.stopPropagation();
		overlay.container.addEventListener('mousedown', onMouseDown);

		const nodeData = node.data();
		const nodeLabelInput = overlay.component.getNodeLabelInputRef();
		const nodeNotesTextarea = overlay.component.getNodeNotesTextareaRef();
		nodeLabelInput.value = nodeData.label || node.id();
		nodeNotesTextarea.value = nodeData.notes || '';

		const onNodeLabelChange = (e: Event) => {
			const val = (e.target as HTMLInputElement).value;
			node.data('label', val);
		};
		const onNodeNotesChange = (e: Event) => {
			const val = (e.target as HTMLTextAreaElement).value;
			node.data('notes', val);
		};

		nodeLabelInput.addEventListener('input', onNodeLabelChange);
		nodeNotesTextarea.addEventListener('input', onNodeNotesChange);

		overlay.component.$set({
			closeOverlay: () => {
				const overlay = nodeOverlayMap.get(node.id());
				if (!overlay) return;
				finalDisplacementMap.set(node.id(), overlay.nodePositionOffset);
				overlay.container.removeEventListener('mousedown', onMouseDown);
				nodeLabelInput.removeEventListener('input', onNodeLabelChange);
				nodeNotesTextarea.removeEventListener('input', onNodeNotesChange);
				overlay.container.style.display = 'none';
				overlay.svgLine.style.display = 'none';
				overlayPool.push(overlay);
				nodeOverlayMap.delete(node.id());
			},
			onMouseDown: (e: MouseEvent) => {
				overlay.state = 'dragging';
				let overlayRect = overlay.container.getBoundingClientRect();
				overlay.dragOffset.x = e.clientX - overlayRect.left;
				overlay.dragOffset.y = e.clientY - overlayRect.top;
				e.stopPropagation();
			}
		});

		// Attach Overlay
		nodeOverlayMap.set(node.id(), overlay);

		document.addEventListener('mousemove', function (e) {
			if (overlay.state !== 'dragging') return;
			// Calculate the new position of the overlay
			overlay.container.style.left = e.clientX - overlay.dragOffset.x + 'px';
			overlay.container.style.top = e.clientY - overlay.dragOffset.y + 'px';
			// Update the line connecting the overlay to the node
			updateOverlayAndLineForNode(node);
			e.preventDefault();
			e.stopPropagation();
		});

		document.addEventListener('mouseup', function (e) {
			// Stop dragging
			if (overlay.state === 'dragging') {
				overlay.state = 'idle';
				updateNodePositionOffset(node);
				e.stopPropagation();
			}
		});

		// Set initial position
		const defaultOffset = { x: 10, y: 10 };
		overlay.nodePositionOffset = finalDisplacementMap.get(node.id()) || defaultOffset;

		updateOverlayAndLineForNode(node);

		// Reveal Overlay
		overlay.container.style.display = 'block';
		overlay.svgLine.style.display = 'inline';

		return overlay;
	};

	const createOverlayElement = (): Overlay => {
		let overlayContainer = document.createElement('div');
		overlayContainer.className = 'z-10 absolute';
		overlayContainer.style.display = 'none';

		const overlayComponent = new OverlayComponent({ target: overlayContainer });

		let svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		svgLine.setAttribute('stroke', 'black');
		svgLine.setAttribute('stroke-dasharray', '4');
		svgLine.style.display = 'none';

		return {
			container: overlayContainer,
			svgLine,
			state: 'idle',
			dragOffset: { x: 0, y: 0 },
			nodePositionOffset: { x: 0, y: 0 },
			component: overlayComponent
		};
	};

	/* ====================  OnMount Entry Point */
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

		// ================ POC DRAG DIV
		cy.on('dblclick', 'node', function (event) {
			const node = event.target;
			if (nodeOverlayMap.get(node.id())) return; // Prevent multiple overlays
			displayOverlay(node);

			cy.on('pan zoom resize', () => {
				for (const id of nodeOverlayMap.keys()) {
					updateOverlayAndLineForNode(cy.getElementById(id));
				}
			});

			node.on('position', () => {
				updateOverlayAndLineForNode(node);
			});
		});
	});
</script>

<div bind:this={container} class="w-full h-full overflow-x-clip relative bg-[#F0F0ED]">
	<svg bind:this={lineSVG} class="absolute top-0 lef-0 h-full w-full z-10 pointer-events-none"></svg>
</div>

<Modal bind:closeModal={closeAddEditElementModal} bind:showModal={isAddEditElementModalOpen}>
	<svelte:fragment slot="body">
		{#if addEditElementModalElementType === 'node'}
			<AddEditNodeForm bind:nodeLabelInput bind:nodeNotesTextarea />
		{:else if addEditElementModalElementType === 'edge'}
			<AddEditEdgeForm bind:edgeWeightInput />
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<Button on:click={() => Mousetrap.trigger('command+return')}>Speichern</Button>
		<Button on:click={() => Mousetrap.trigger('esc')} variant="secondary">Abbrechen</Button>
	</svelte:fragment>
</Modal>

<CollapsableSidePanel position="left" bind:toggle={toggleLeftSidePanel}>
	<div class="flex flex-col p-4 pr-0 gap-4 h-full max-h-full">
		<div class="flex flex-col bg-white rounded-md pointer-events-auto shadow-sm">
			<button on:click={handleAnalzerBtnClick} class="py-2">Gimme the numbers! 🧮</button>
			<hr />
			<button on:click={() => handleSave()} class="py-2">Speichern 📁</button>
			<hr />
			<button on:click={() => handleExport()} class="py-2">Export für den JO! 🦆</button>
		</div>
		{#if metrics.length}
			<div
				class="flex flex-col overflow-y-clip pointer-events-auto"
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
	<div class="p-4 pl-0 pointer-events-auto">
		<div class="flex flex-col bg-white rounded-md divide-y divide-gray-100 shadow-sm">
			<button on:click={() => applyLayout(cy, 'randomLayout', LAYOUT_PADDING)} class="py-2">Random Layout</button>
			<button on:click={() => cy.layout({ name: 'cola', animate: false }).run()} class="py-2">Cola</button>
			<button on:click={() => applyLayout(cy, 'fruchtermanReingold', LAYOUT_PADDING)} class="py-2"
				>Fruchterman & Reingold</button
			>
			<button on:click={() => applyLayout(cy, 'scaledFruchtermanReingold', LAYOUT_PADDING)} class="py-2"
				>Scaled Fruchterman & Reingold</button
			>
			<button on:click={() => applyLayout(cy, 'kamadaKawai', LAYOUT_PADDING)} class="py-2">Kamada Kawai</button>
		</div>
	</div>
</CollapsableSidePanel>
