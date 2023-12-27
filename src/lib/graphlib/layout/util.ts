import type { Layout, Position } from '../graph';

export const deepCopyLayout = (layout: Layout): Layout => {
	// poor man's deep copy
	return JSON.parse(JSON.stringify(layout));
};

export const unitVector = (pu: Position, pv: Position): Position => {
	const diffX = pv.x - pu.x;
	const diffY = pv.y - pu.y;
	const length = Math.sqrt(diffX * diffX + diffY * diffY);
	if (length === 0) return { x: 0, y: 0 };
	return { x: diffX / length, y: diffY / length };
};

export const distance = (pu: Position, pv: Position): number => {
	const diffX = pv.x - pu.x;
	const diffY = pv.y - pu.y;
	return Math.sqrt(diffX * diffX + diffY * diffY);
};

const MIN_DISTANCE = 10; // Minimum distance between nodes to avoid overlap
export const avoidOverlaps = (layout: Layout): Layout => {
	const _layout = deepCopyLayout(layout);

	const keys = Object.keys(_layout);
	for (let i = 0; i < keys.length; i++) {
		for (let j = i + 1; j < keys.length; j++) {
			const node1 = _layout[keys[i]];
			const node2 = _layout[keys[j]];

			let dx = node2.x - node1.x;
			let dy = node2.y - node1.y;
			let dist = Math.sqrt(dx * dx + dy * dy);

			// Check for exact overlap and apply a random displacement if needed
			if (dist === 0) {
				const randomDisplacement = 1 + Math.random() * 5; // Random displacement between 1 and 6
				dx = randomDisplacement;
				dy = randomDisplacement;
				dist = Math.sqrt(dx * dx + dy * dy);
			}

			if (dist < MIN_DISTANCE) {
				// Calculate unit vector
				const ux = dx / dist;
				const uy = dy / dist;

				// Calculate displacement
				const displacement = (MIN_DISTANCE - dist) / 2;
				const dispX = ux * displacement;
				const dispY = uy * displacement;

				// Adjust positions
				node1.x -= dispX;
				node1.y -= dispY;
				node2.x += dispX;
				node2.y += dispY;
			}
		}
	}

	return _layout;
};
