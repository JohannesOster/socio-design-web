export const setupEdgeDrawer = (cy: cytoscape.Core) => {
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
