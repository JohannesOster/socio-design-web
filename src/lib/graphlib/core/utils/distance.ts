import type { Position } from '../types';

export const distanceSquared = (pu: Position, pv: Position): number => {
	const diffX = pv.x - pu.x;
	const diffY = pv.y - pu.y;
	return diffX * diffX + diffY * diffY;
};

export const distance = (pu: Position, pv: Position): number => {
	return Math.sqrt(distanceSquared(pu, pv));
};
