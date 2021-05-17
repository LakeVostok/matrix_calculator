export function createMatrixRow<CellType>({
	columnsCount,
	createCell,
}: {
	columnsCount: number;
	createCell: () => CellType;
}) {
	const newRow: Array<CellType> = [];

	for(let cellIndex = 0; cellIndex < columnsCount; cellIndex++) {
		newRow.push(createCell());
	}

	return newRow;
}
