export function changeMatrixColumnsCount<CellType>({
	matrix,
	newColumnsCount,
	createCell,
}: {
	matrix: Array<Array<CellType>>;
	newColumnsCount: number;
	createCell: () => CellType;
}) {
	const newMatrix: Array<Array<CellType>> = [];

	for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
		const newRow: Array<CellType> = [];

		for(let cellIndex = 0; cellIndex < newColumnsCount; cellIndex++) {
			newRow.push(
				matrix[rowIndex][cellIndex] === undefined ? createCell() : matrix[rowIndex][cellIndex]
			);
		}

		newMatrix.push(newRow);
	}

	return newMatrix;
}
