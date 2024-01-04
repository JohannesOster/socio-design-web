const POSITIVE_MIN_WEIGHT = 1; // smalles positive so the range of possible values is [1, Infinity]
const NEGATIVE_MAX_WEIGHT = -1; // largets negative number so the range of possible values is [-1; -Infinity]

interface RGBColor {
	r: number;
	g: number;
	b: number;
}

export const weightToColor = (weight: number, minWeight: number, maxWeight: number): string => {
	if (!weight) return 'gray';

	let normalizedWeight: number;
	let colorStart: RGBColor;
	let colorEnd: RGBColor;

	if (weight < 0) {
		if (minWeight === NEGATIVE_MAX_WEIGHT) normalizedWeight = NEGATIVE_MAX_WEIGHT;
		else normalizedWeight = (weight - NEGATIVE_MAX_WEIGHT) / (NEGATIVE_MAX_WEIGHT - minWeight);
		colorStart = { r: 255, g: 200, b: 200 }; // Lighter Red
		colorEnd = { r: 255, g: 0, b: 0 }; // Darker Red
	} else {
		if (maxWeight === POSITIVE_MIN_WEIGHT) normalizedWeight = POSITIVE_MIN_WEIGHT;
		else normalizedWeight = (weight - POSITIVE_MIN_WEIGHT) / (maxWeight - POSITIVE_MIN_WEIGHT);
		colorStart = { r: 200, g: 200, b: 255 }; // Lighter Blue
		colorEnd = { r: 0, g: 0, b: 255 }; // Darker Blue
	}

	return interpolateColor(colorStart, colorEnd, Math.abs(normalizedWeight));
};

const interpolateColor = (colorStart: RGBColor, colorEnd: RGBColor, factor: number): string => {
	let result: RGBColor = {
		r: Math.round(colorStart.r + factor * (colorEnd.r - colorStart.r)),
		g: Math.round(colorStart.g + factor * (colorEnd.g - colorStart.g)),
		b: Math.round(colorStart.b + factor * (colorEnd.b - colorStart.b))
	};

	return `rgb(${result.r}, ${result.g}, ${result.b})`;
};
