import { useState } from "react";

import { MATRIX_A_NAME, MATRIX_B_NAME } from "../../../utils/constants";
import { Flex } from "../../atoms/Flex/Flex";

import { ControlsBar, ControlsBarMode } from "./ControlsBar";

export const Example = () => {
	const [rowsCount, setRowsCount] = useState(4);
	const [columnsCount, setColumnsCount] = useState(4);

	return (
		<Flex>
			<div>rowsCount = {rowsCount}, columnsCount = {columnsCount}</div>
			<ControlsBar
				mode={ ControlsBarMode.IDLE }
				rowsCount={ rowsCount }
				columnsCount={ columnsCount }
				minRowsCount={ 2 }
				maxRowsCount={ 10 }
				minColumnsCount={ 2 }
				maxColumnsCount={ 10 }
				currentMatrixName={ MATRIX_A_NAME }
				radioData={ [
					{
						value: MATRIX_A_NAME,
						label: "Матрица А"
					},
					{
						value: MATRIX_B_NAME,
						label: "Матрица В"
					}
				] }
				onCurrentMatrixChange={ console.log }
				onAddRow={ () => setRowsCount(rowsCount + 1) }
				onRemoveRow={ () => setRowsCount(rowsCount - 1) }
				onAddColumn={ () => setColumnsCount(columnsCount + 1) }
				onRemoveColumn={ () => setColumnsCount(columnsCount - 1) }
			/>
		</Flex>
	);
};

export default { 
	title: "molecules/ControlsBar",
	component: Example,
};
