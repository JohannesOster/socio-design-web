import cytoscape from 'cytoscape';
import cola from 'cytoscape-cola';
import { theme } from './cytoscapeTheme';
import { weightToColor } from './helper';
import { distance } from './graphlib/core/utils';

interface InitGraphOptions {
	initialElements?: cytoscape.ElementDefinition[];
	container: HTMLElement;
	layoutPadding?: number;
}

cytoscape.use(cola);

export const initCytoscape = ({ initialElements = [], container, layoutPadding = 16 }: InitGraphOptions) => {
	const cy = cytoscape({
		container,
		minZoom: 0.25,
		maxZoom: 8,
		elements: initialElements,
		layout: { name: 'preset', padding: layoutPadding },
		style: [
			{
				selector: 'node',
				style: {
					label: (el) => el.data().label || el.id(),
					color: theme.node.default.color,
					backgroundColor: theme.node.default.backgroundColor,
					overlayColor: theme.node.default.overlayColor,
					overlayShape: theme.node.default.overlayShape
				}
			},
			{
				selector: 'node:active',
				style: { overlayOpacity: theme.node.active.overlayOpacity }
			},
			{
				selector: 'node:selected',
				style: {
					backgroundColor: theme.node.selected.backgroundColor,
					overlayColor: theme.node.selected.backgroundColor,
					color: theme.node.selected.color
				}
			},

			{
				selector: 'node.highlight', // custom class when new edge is close to target node
				style: {
					backgroundColor: theme.node.highlighed.backgroundColor,
					color: theme.node.highlighed.color
				}
			},

			{
				selector: 'edge',
				style: {
					width: theme.edge.default.strokeWidth,
					curveStyle: theme.edge.default.curveStyle,
					targetArrowShape: theme.edge.default.targetArrowShape,
					overlayColor: theme.edge.default.overlayColor
				}
			},
			{
				selector: 'edge:active',
				style: { overlayOpacity: theme.edge.active.overlayOpacity }
			},
			{
				selector: 'edge:selected',
				style: {
					lineColor: theme.edge.selected.strokeColor,
					targetArrowColor: theme.edge.selected.strokeColor
				}
			}
		]
	});

	const getWeightColor = (ele: cytoscape.Singular) => {
		if (ele.selected()) return theme.edge.selected.strokeColor;
		let maxPositive = 0;
		let minNegative = 0;

		cy.edges().forEach((edge) => {
			let weight = edge.data().weight || 0;
			if (weight > 0) maxPositive = Math.max(maxPositive, weight);
			else minNegative = Math.min(minNegative, weight);
		});

		const weight = ele.data().weight;
		return weightToColor(weight, minNegative, maxPositive);
	};

	const getEdgeLabel = (ele: cytoscape.Singular) => {
		const { source: sourceId, target: targetId } = ele.data();
		console.log('ASDF');
		const sourcePos = cy.getElementById(sourceId).position();
		const targetPos = cy.getElementById(targetId).position();
		console.log(sourcePos, targetPos);
		return Math.round(distance(sourcePos, targetPos) * 100) / 100;
	};

	cy.style()
		.selector('edge')
		.style('line-color', getWeightColor)
		.style('target-arrow-color', getWeightColor)
		// .style('label', getEdgeLabel)
		.update();

	return cy;
};
