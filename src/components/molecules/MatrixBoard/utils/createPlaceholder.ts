export function createPlaceholder({
	placeholderPrefix,
	rowIndex,
	columnIndex,
}: {
	placeholderPrefix: string;
	rowIndex: number;
	columnIndex: number;
}) {
	return `${placeholderPrefix}${rowIndex + 1},${columnIndex + 1}`;
}
