export function getValidatedState(
	matrix: Array<Array<{
		value: number | undefined;
		hasError: boolean;
	}>>,
) {
	let hasError = false;

	const newMatrixState = matrix.map(row => {
		return row.map(cell => {
			if (cell.value === undefined) {
				hasError = true;

				return {
					value: cell.value,
					hasError: true,
				};
			}

			return cell;
		});
	});

	return {
		newMatrixState,
		hasError,
	};
}
