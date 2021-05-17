import type { Meta } from "@storybook/react";
import { ChangeEvent, useCallback, useState } from "react";

import { Input } from "../../atoms/Input/Input";

import { 
	Matrix,
} from "./Matrix";

export function Primary() {
	const [matrixValue, setMatrixValue] = useState<Array<Array<number | undefined>>>([
		[undefined, undefined],
		[undefined, undefined],
	]);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const [rowIndex, columnIndex] = e.target.name.split("-");
	
		const newValue = [...matrixValue];
		newValue[Number(rowIndex)][Number(columnIndex)] = Number(value);

		setMatrixValue(newValue);
	}, [matrixValue]);

	const renderCell = useCallback(({
		cell,
		placeholderPrefix,
		rowIndex,
		columnIndex,
	}: {
		cell: number | undefined;
		placeholderPrefix: string;
		rowIndex: number;
		columnIndex: number;
	}) => {
		return (
			<Input
				value={ cell === undefined ? "" : String(cell) }
				name={ `${rowIndex}-${columnIndex}` }
				placeholder={ `${placeholderPrefix}${rowIndex + 1},${columnIndex + 1}` }
				onChange={ onChange }
			/>
		);
	}, [onChange]);

	return (
		<Matrix<number | undefined>
			value={ matrixValue }
			name="A"
			renderCell={ renderCell }
		/>
	);
}

export default { 
	title: "molecules/Matrix",
	component: Primary,
	parameters: {
		creevey: {
		  skip: "Not required",
		},
	},
} as Meta;
