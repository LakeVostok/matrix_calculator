import { ChangeEvent } from "react";

import { Input } from "../../../../atoms/Input/Input";
import { Matrix } from "../../../Matrix/Matrix";
import { createPlaceholder } from "../../utils/createPlaceholder";
import { createValue } from "../../utils/createValue";
import { encodeInputName } from "../../../../../utils/encodeInputName";
import { TypedMemo } from "../../../../../utils/TypedMemo";

function InputMatrixInternal({
	name,
	value,
	onChange,
}: {
	name: string;
	value: Array<Array<{
		value: number | undefined;
		hasError: boolean;
	}>>;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<Matrix 
			name={ name }
			value={ value }
			renderCell={ renderCell }
			onChange={ onChange }
		/>
	);
}

export const InputMatrix = TypedMemo(InputMatrixInternal);

function renderCell({
	cell,
	placeholderPrefix,
	rowIndex,
	columnIndex,
	onChange,
}: {
	cell: {
		value: number | undefined;
		hasError: boolean;
	};
	placeholderPrefix: string;
	rowIndex: number;
	columnIndex: number;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	const placeholder = createPlaceholder({
		placeholderPrefix,
		rowIndex,
		columnIndex,
	});

	const value = createValue(cell.value);

	return (
		<Input
			value={ value }
			name={ encodeInputName({ rowIndex, columnIndex }) }
			placeholder={ placeholder }
			hasError={ cell.hasError }
			onChange={ onChange }
		/>
	);
}
