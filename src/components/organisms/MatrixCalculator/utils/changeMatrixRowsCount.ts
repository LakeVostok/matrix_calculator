import { createMatrixRow } from "./createMatrixRow";

export function changeMatrixRowsCount<CellType>({
	matrix,
	newRowsCount,
	createCell,
}: {
	matrix: Array<Array<CellType>>;
	newRowsCount: number;
	createCell: () => CellType;
}) {
	const newMatrix: Array<Array<CellType>> = [];

	for(let rowIndex = 0; rowIndex < newRowsCount; rowIndex++) {
		if (matrix[rowIndex] === undefined) {
			const newRow = createMatrixRow<CellType>({
				columnsCount: matrix[0].length,
				createCell,
			});

			newMatrix.push(newRow);
		} else {
			newMatrix.push(matrix[rowIndex]);
		}
	}

	return newMatrix;
}
