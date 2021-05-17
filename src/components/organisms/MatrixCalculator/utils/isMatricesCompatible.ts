export function isMatricesCompatible<CellType>({
	matrixA,
	matrixB,
}: {
	matrixA: Array<Array<CellType>>;
	matrixB: Array<Array<CellType>>;
}) {
	return matrixA[0].length === matrixB.length;
}
