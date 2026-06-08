export function lerp(start: number, end: number, percentage: number) {
	if (percentage === 0) return end;
	return start + (end - start) * percentage;
}
