import { TypedMemo } from "../../../../../utils/TypedMemo";
import { Input } from "../../../../atoms/Input/Input";
import { Matrix } from "../../../Matrix/Matrix";
import { createPlaceholder } from "../../utils/createPlaceholder";
import { createValue } from "../../utils/createValue";

function ResultMatrixInternal({
	name,
	value,
}: {
	name: string;
	value: Array<Array<number | undefined>>;
}) {
	return (
		<Matrix
			name={ name }
			value={ value }
			renderCell={ renderCell }
		/>
	);
}

export const ResultMatrix = TypedMemo(ResultMatrixInternal);

function renderCell({
	cell,
	placeholderPrefix,
	rowIndex,
	columnIndex,
}: {
	cell: number | undefined
	placeholderPrefix: string;
	rowIndex: number;
	columnIndex: number;
}) {
	const placeholder = createPlaceholder({
		placeholderPrefix,
		rowIndex,
		columnIndex,
	});

	const value = createValue(cell);

	return (
		<Input
			isDisabled
			value={ value }
			placeholder={ placeholder }
		/>
	);
}
