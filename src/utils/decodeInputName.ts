export function decodeInputName(name: string) {
	const [rowIndex, columnIndex] = name.split("-");

	return {
		rowIndex: Number(rowIndex),
		columnIndex: Number(columnIndex),
	};
}
