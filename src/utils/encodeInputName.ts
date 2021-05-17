export function encodeInputName({
	rowIndex,
	columnIndex,
}: {
	rowIndex: number;
	columnIndex: number;
}) {
	return `${rowIndex}-${columnIndex}`;
}
