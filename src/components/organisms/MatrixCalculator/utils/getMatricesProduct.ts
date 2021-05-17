import { isMatricesCompatible } from "./isMatricesCompatible";

export function getMatricesProduct<CellType>({
	matrixA,
	matrixB,
	getCellValue,
}: {
	matrixA: Array<Array<CellType>>;
	matrixB: Array<Array<CellType>>;
	getCellValue: (cell: CellType) => number | undefined;
}) {
	const isCompatible = isMatricesCompatible({
		matrixA,
		matrixB,
	});

	if (!isCompatible) {
		throw new Error("Matrices are not compatible");
	}

	const result: Array<Array<number>> = [];

	const inputMatrixARowsCount = matrixA.length;
	const inputMatrixBColumnsCount = matrixB[0].length;
	const inputMatrixBRowsCount = matrixB.length;

	for(let rowIndex = 0; rowIndex < inputMatrixARowsCount; rowIndex++) {
		const resultRow: Array<number> = [];

		for(let columnIndex = 0; columnIndex < inputMatrixBColumnsCount; columnIndex++) {
			resultRow[columnIndex] = 0;

			for(let pointer = 0; pointer < inputMatrixBRowsCount; pointer++) {
				const valueA = getCellValue(matrixA[rowIndex][pointer]);
				const valueB = getCellValue(matrixB[pointer][columnIndex]);

				if (valueA === undefined || valueB === undefined) {
					throw new Error("Got undefined value while multiplying the matrices");
				} else {
					resultRow[columnIndex] += valueA * valueB;
				}
			}
		}

		result.push(resultRow);
	}

	return result;
}
