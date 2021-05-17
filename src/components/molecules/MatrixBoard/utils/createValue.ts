export function createValue(value: number | undefined) {
	return value === undefined ? "" : String(value);
}
