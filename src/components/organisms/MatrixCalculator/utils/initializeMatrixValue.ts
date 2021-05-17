export function initializeMatrixValue<CellType>({
	rowsCount,
	columnsCount,
	createCell,
}: {
	rowsCount: number;
	columnsCount: number;
	createCell: () => CellType;
}) {
	const newMatrix: Array<Array<CellType>> = [];

	for (let rowIndex = 0; rowIndex < rowsCount; rowIndex++) {
		const row: Array<CellType> = [];

		for(let cellIndex = 0; cellIndex < columnsCount; cellIndex++) {
			row.push(createCell());
		}

		newMatrix.push(row);
	}

	return newMatrix;
}
