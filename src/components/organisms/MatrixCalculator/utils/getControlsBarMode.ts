import { ControlsBarMode } from "../../../molecules/ControlsBar/ControlsBar";

import { isMatricesCompatible } from "./isMatricesCompatible";

export function getControlsBarMode<CellType>({
	matrixA,
	matrixB,
	isFocused,
}: {
	matrixA: Array<Array<CellType>>;
	matrixB: Array<Array<CellType>>;
	isFocused: boolean;
}) {
	const isCompatible = isMatricesCompatible({
		matrixA,
		matrixB,
	});
	
	if (isCompatible) {
		return isFocused ? ControlsBarMode.INPUT : ControlsBarMode.IDLE; 
	} 
	
	return ControlsBarMode.ERROR;
}
