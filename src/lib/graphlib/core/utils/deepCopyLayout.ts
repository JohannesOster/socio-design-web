import type { Layout } from '../types';

export const deepCopyLayout = (layout: Layout): Layout => {
	// poor man's deep copy
	return JSON.parse(JSON.stringify(layout));
};
