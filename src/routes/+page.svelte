<script lang="ts">
	import { SideBar } from '$lib/components/SideBar';
	import { ToastContainer, pushToast } from '$lib/components/Toast';
	import { toCytoscape } from '$lib/graphlib/cytoscapeAdapter';
	import type { Edge, Graph } from '$lib/graphlib/graph';
	import { randomLayout } from '$lib/graphlib/layout/randomLayout';
	import { initCytoscape } from '$lib/initCytoscape';
	import { loadGraph, saveGraph } from '$lib/storage';
	import type cytoscape from 'cytoscape';
	import { onMount } from 'svelte';

	let cy: cytoscape.Core;

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
		{} as Record<string, {}>
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

	onMount(() => {
		const container = document.getElementById('cy-container');
		if (!container) return;
		cy = initCytoscape({
			initialElements: toCytoscape(graph, randomLayout(graph, { container: container.getBoundingClientRect() })),
			container
		});
		setupCommandPalette(cy);
		setupEdgeDrawingHandler(cy);
		setUpOptimizer(cy);
		setUpSaveBtn(cy);
	});

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
			},
			'cmd+s': (event: KeyboardEvent) => {
				event.preventDefault();
				const elements = cy.json().elements; // Get the current state of the graph
				saveGraph(elements);
				showSuccessToaster();
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

	const setupEdgeDrawingHandler = (cy: cytoscape.Core) => {
		/** Draw edges ============================= */
		let tempEdge = null as any;
		let isDrawing = false as any;
		let sourceNode = null as any;
		let ghostNode = null as any;
		let targetNode = null as any;
		let highlightedNode = null as any;

		cy.on('mousedown', 'node', (event) => {
			if (event.originalEvent.shiftKey) {
				isDrawing = true;
				sourceNode = event.target;

				sourceNode.ungrabify();

				ghostNode = cy.add({
					group: 'nodes',
					data: { id: 'ghost-node' },
					position: event.position,
					classes: ['ghost-node'], // CSS class for ghost node
					style: {
						width: 1,
						height: 1,
						opacity: 0
					}
				});

				tempEdge = cy.add({
					group: 'edges',
					data: {
						id: 'temp-edge',
						source: sourceNode.id(),
						target: ghostNode.id()
					},
					style: { 'line-style': 'dashed' },
					classes: ['temporary-edge'] // CSS class for styling the temporary edge
				});

				cy.boxSelectionEnabled(false);
			}
		});

		cy.on('mousemove', (event) => {
			const THRESHHOLD = 30;
			const isClose = (node1: any, node2: any) => {
				let p1 = node1.position();
				let p2 = node2.position();

				const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

				return distance < THRESHHOLD;
			};

			if (isDrawing && tempEdge) {
				ghostNode.position(event.position);

				let closestNode = cy
					.nodes()
					.filter((node) => {
						if (node.id() === sourceNode.id()) return false;
						if (node.id() === ghostNode.id()) return false;
						if (isClose(node, ghostNode)) {
							if (highlightedNode && highlightedNode.id()) {
								if (highlightedNode.id() === node.id()) {
									return true;
								}
							}

							highlightedNode = node;
							node.addClass('highlight');
							return true;
						} else {
							node.removeClass('highlight');
						}

						return false;
					})
					.first();

				if (closestNode.id()) {
					targetNode = closestNode;
				} else {
					highlightedNode = null;
					targetNode = ghostNode;
				}
			}
		});

		cy.on('mouseup', (event) => {
			if (isDrawing && tempEdge) {
				if (targetNode !== cy && targetNode.isNode()) {
					// Create permanent edge
					cy.add({
						group: 'edges',
						data: {
							source: sourceNode.id(),
							target: targetNode.id()
						}
					});
				}

				cy.remove(ghostNode);
				sourceNode.grabify();
				cy.boxSelectionEnabled(true);

				// Remove temporary edge
				tempEdge.remove();
				tempEdge = null;
				isDrawing = false;
				sourceNode = null;
				highlightedNode?.removeClass('highlight');
				highlightedNode = null;
			}
		});
	};

	const setUpOptimizer = (cy: cytoscape.Core) => {
		/** Trigger Optimization ============================= */
		const triggerBtn = document.getElementById('optimizeBtn');
		if (triggerBtn) {
			triggerBtn.onclick = (event) => {
				cy.layout({ name: 'cola', animate: false }).run();
			};
		}
	};

	const setUpSaveBtn = (cy: cytoscape.Core) => {
		const saveBtn = document.getElementById('saveBtn')!;
		saveBtn.onclick = () => {
			const elements = cy.json().elements; // Get the current state of the graph
			saveGraph(elements);
			showSuccessToaster();
		};
	};

	const showSuccessToaster = () => {
		pushToast({ message: '✅ Erfolgreich gespeichert!' });
	};
</script>

<div id="cy-container" class="w-full h-full overflow-x-clip"></div>
<SideBar {cy} />

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

<ToastContainer />
