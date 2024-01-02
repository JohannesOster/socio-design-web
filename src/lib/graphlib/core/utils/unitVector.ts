import type { Position } from '../types';

export const unitVector = (pu: Position, pv: Position): Position => {
	const diffX = pv.x - pu.x;
	const diffY = pv.y - pu.y;
	const length = Math.sqrt(diffX * diffX + diffY * diffY);
	if (length === 0) return { x: 0, y: 0 };
	return { x: diffX / length, y: diffY / length };
};
