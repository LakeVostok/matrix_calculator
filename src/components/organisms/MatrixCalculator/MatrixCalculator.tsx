import { ChangeEvent, Component } from "react";

import { MATRIX_A_NAME, MATRIX_B_NAME, MATRIX_C_NAME } from "../../../utils/constants";
import { Flex, FlexAlign, FlexJustify } from "../../atoms/Flex/Flex";
import { ControlsBar } from "../../molecules/ControlsBar/ControlsBar";
import { MatrixBoard } from "../../molecules/MatrixBoard/MatrixBoard";
import { decodeInputName } from "../../../utils/decodeInputName";

import { initializeMatrixValue } from "./utils/initializeMatrixValue";
import { createResultCell } from "./utils/createResultCell";
import { createInputCell } from "./utils/createInputCell";
import { changeMatrixColumnsCount } from "./utils/changeMatrixColumnsCount";
import { changeMatrixRowsCount } from "./utils/changeMatrixRowsCount";
import { getMatricesProduct } from "./utils/getMatricesProduct";
import { getControlsBarMode } from "./utils/getControlsBarMode";
import { getValidatedState } from "./utils/getValidatedState";
import cn from "./MatrixCalculator.module.scss";

const radioData = [
	{
		label: `Матрица ${MATRIX_A_NAME}`,
		value: MATRIX_A_NAME,
	},
	{
		label: `Матрица ${MATRIX_B_NAME}`,
		value: MATRIX_B_NAME,
	}
];

interface MatrixCalculatorProps {
	minRowsCount: number;
	maxRowsCount: number;
	minColumnsCount: number;
	maxColumnsCount: number;
	matrixAInitialRowsCount: number;
	matrixAInitialColumnsCount: number;
	matrixBInitialRowsCount: number;
	matrixBInitialColumnsCount: number;
}

interface MatrixCalculatorState {
	isFocused: boolean;
	currentMatrixName: typeof MATRIX_A_NAME | typeof MATRIX_B_NAME;
	[MATRIX_C_NAME]: Array<Array<number | undefined>>;
	[MATRIX_A_NAME]: Array<Array<{
		value: number | undefined;
		hasError: boolean;
	}>>;
	[MATRIX_B_NAME]: Array<Array<{
		value: number | undefined;
		hasError: boolean;
	}>>;
	[key: string]: any;
}

export class MatrixCalculator extends Component<MatrixCalculatorProps, MatrixCalculatorState> {
	constructor(props: MatrixCalculatorProps) {
		super(props);

		const inputMatrixAValue = initializeMatrixValue({
			rowsCount: props.matrixAInitialRowsCount,
			columnsCount: props.matrixAInitialColumnsCount,
			createCell: createInputCell,
		});

		const inputMatrixBValue = initializeMatrixValue({
			rowsCount: props.matrixBInitialRowsCount,
			columnsCount: props.matrixBInitialColumnsCount,
			createCell: createInputCell,
		});

		const resultMatrixCValue = initializeMatrixValue({
			rowsCount: props.matrixAInitialRowsCount,
			columnsCount: props.matrixBInitialColumnsCount,
			createCell: createResultCell,
		});

		this.state = {
			isFocused: false,
			currentMatrixName: MATRIX_A_NAME,
			[MATRIX_C_NAME]: resultMatrixCValue,
			[MATRIX_A_NAME]: inputMatrixAValue,
			[MATRIX_B_NAME]: inputMatrixBValue,
		};
	}

	changeRowsCount = ({
		state,
		delta,
	}: {
		state: Readonly<MatrixCalculatorState>;
		delta: number;
	}) => {
		const currentMatrixName = state.currentMatrixName;
		const currentMatrix = state[currentMatrixName];

		const newRowsCount = currentMatrix.length + delta;

		if (newRowsCount > this.props.maxRowsCount || newRowsCount < this.props.minRowsCount) {
			return;
		}

		const newState: Partial<MatrixCalculatorState> = {
			[currentMatrixName]: changeMatrixRowsCount({
				matrix: currentMatrix,
				newRowsCount,
				createCell: createInputCell,
			}),
			[MATRIX_C_NAME]: currentMatrixName === MATRIX_A_NAME ? changeMatrixRowsCount({
				matrix: state[MATRIX_C_NAME],
				newRowsCount,
				createCell: createResultCell,
			}) : state[MATRIX_C_NAME],
		};

		return newState;
	}

	changeColumnsCount = ({
		state,
		delta,
	}: {
		state: Readonly<MatrixCalculatorState>;
		delta: number;
	}) => {
		const currentMatrixName = state.currentMatrixName;
		const currentMatrix = state[currentMatrixName];

		const newColumnsCount = currentMatrix[0].length + delta;

		if (newColumnsCount > this.props.maxColumnsCount || newColumnsCount < this.props.minColumnsCount) {
			return;
		}

		const newState: Partial<MatrixCalculatorState> = {
			[currentMatrixName]: changeMatrixColumnsCount({
				matrix: currentMatrix,
				newColumnsCount,
				createCell: createInputCell,
			}),
			[MATRIX_C_NAME]: currentMatrixName === MATRIX_B_NAME ? changeMatrixColumnsCount({
				matrix: state[MATRIX_C_NAME],
				newColumnsCount,
				createCell: createResultCell,
			}) : state[MATRIX_C_NAME],
		};

		return newState;
	}

	onAddRow = () => {
		this.setState(state => {
			return this.changeRowsCount({
				state,
				delta: 1,
			});
		});
	}

	onRemoveRow = () => {
		this.setState(state => {
			return this.changeRowsCount({
				state,
				delta: -1,
			});
		});
	}

	onAddColumn = () => {
		this.setState(state => {
			return this.changeColumnsCount({
				state,
				delta: 1,
			});
		});
	}

	onRemoveColumn = () => {
		this.setState(state => {
			return this.changeColumnsCount({
				state,
				delta: -1,
			});
		});
	}

	onCurrentMatrixChange = (currentMatrixName: string) => {
		this.setState({
			currentMatrixName: currentMatrixName as (typeof MATRIX_A_NAME | typeof MATRIX_B_NAME),
		});
	}

	onInputMatrixAChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState(state => {
			return {
				[MATRIX_A_NAME]: this.inputMatrixChangeHandler(e, state[MATRIX_A_NAME]),
			};
		});
	}

	onInputMatrixBChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState(state => {
			return {
				[MATRIX_B_NAME]: this.inputMatrixChangeHandler(e, state[MATRIX_B_NAME]),
			};
		});
	}

	inputMatrixChangeHandler = (
		e: ChangeEvent<HTMLInputElement>,
		matrixValue: Array<Array<{
			value: number | undefined;
			hasError: boolean;
		}>>
	) => {
		const cellValue = e.target.value;
		const valueWithoutLetters = cellValue.replace(/[^0-9]/, "");

		const numberValue = parseInt(valueWithoutLetters);
		const submitValue = isNaN(numberValue) ? undefined : numberValue;

		const {
			rowIndex,
			columnIndex,
		} = decodeInputName(e.target.name);
		const isSameValue = matrixValue[rowIndex][columnIndex].value === submitValue;

		if (isSameValue) {
			return matrixValue;
		}

		const newValue = matrixValue.map((row, valueRowIndex) => {
			if (valueRowIndex !== rowIndex) {
				return row;
			}

			return row.map((cell, valueColumnIndex) => {
				if (valueColumnIndex === columnIndex) {
					return {
						value: submitValue,
						hasError: matrixValue[rowIndex][columnIndex].hasError ? submitValue === undefined : matrixValue[rowIndex][columnIndex].hasError,
					};
				}

				return cell;
			});
		});

		return newValue;
	}

	onMatrixBoardFocus = () => {
		this.setState({
			isFocused: true,
		});
	}

	onMatrixBoardBlur = () => {
		this.setState({
			isFocused: false,
		});
	}

	getMultiplicationState = (state: Readonly<MatrixCalculatorState>): Partial<MatrixCalculatorState> => {		
		const validatedMatrixA = getValidatedState(state[MATRIX_A_NAME]);
		const validatedMatrixB = getValidatedState(state[MATRIX_B_NAME]);

		return {
			[MATRIX_A_NAME]: validatedMatrixA.hasError ? validatedMatrixA.newMatrixState : state[MATRIX_A_NAME],
			[MATRIX_B_NAME]: validatedMatrixB.hasError ? validatedMatrixB.newMatrixState : state[MATRIX_B_NAME],

			[MATRIX_C_NAME]: validatedMatrixA.hasError || validatedMatrixB.hasError ? state[MATRIX_C_NAME] : getMatricesProduct({
				matrixA: state[MATRIX_A_NAME],
				matrixB: state[MATRIX_B_NAME],
				getCellValue: ({ value }) => value,
			}),
		};
	}

	onMultiply = () => {
		this.setState(this.getMultiplicationState);
	}

	onClear = () => {
		this.setState(state => {
			const inputMatrixAValue = initializeMatrixValue({
				rowsCount: state[MATRIX_A_NAME].length,
				columnsCount: state[MATRIX_A_NAME][0].length,
				createCell: createInputCell,
			});
	
			const inputMatrixBValue = initializeMatrixValue({
				rowsCount: state[MATRIX_B_NAME].length,
				columnsCount: state[MATRIX_B_NAME][0].length,
				createCell: createInputCell,
			});
	
			const resultMatrixCValue = initializeMatrixValue({
				rowsCount: inputMatrixAValue.length,
				columnsCount: inputMatrixBValue[0].length,
				createCell: createResultCell,
			});

			return {
				[MATRIX_A_NAME]: inputMatrixAValue,
				[MATRIX_B_NAME]: inputMatrixBValue,
				[MATRIX_C_NAME]: resultMatrixCValue,
			};
		});
	}

	onSwap = () => {
		this.setState(state => {
			const inputMatrixAValue = state[MATRIX_B_NAME];
			const inputMatrixBValue = state[MATRIX_A_NAME];
	
			const resultMatrixCValue = initializeMatrixValue({
				rowsCount: inputMatrixAValue.length,
				columnsCount: inputMatrixBValue[0].length,
				createCell: createResultCell,
			});

			return {
				[MATRIX_A_NAME]: inputMatrixAValue,
				[MATRIX_B_NAME]: inputMatrixBValue,
				[MATRIX_C_NAME]: resultMatrixCValue,
			};
		});
	}

	render() {
		const currentMatrix = this.state[this.state.currentMatrixName];

		const mode = getControlsBarMode({
			matrixA: this.state[MATRIX_A_NAME],
			matrixB: this.state[MATRIX_B_NAME],
			isFocused: this.state.isFocused
		});

		return (
			<Flex
				className={ cn.root }
				justifyContent={ FlexJustify.START }
				alignItems={ FlexAlign.START }
			>
				<div className={ cn.controlsBarWrapper }>
					<ControlsBar 
						mode={ mode }
						rowsCount={ currentMatrix.length }
						columnsCount={ currentMatrix[0].length }
						minRowsCount={ this.props.minRowsCount }
						maxRowsCount={ this.props.maxRowsCount }
						minColumnsCount={ this.props.minColumnsCount }
						maxColumnsCount={ this.props.maxColumnsCount }
						currentMatrixName={ this.state.currentMatrixName }
						radioData={ radioData }
						onCurrentMatrixChange={ this.onCurrentMatrixChange }
						onAddRow={ this.onAddRow }
						onRemoveRow={ this.onRemoveRow }
						onAddColumn={ this.onAddColumn }
						onRemoveColumn={ this.onRemoveColumn }
						onMultiply={ this.onMultiply }
						onClear={ this.onClear }
						onSwap={ this.onSwap }
					/>
				</div>
				<div 
					className={ cn.matrixBoardWrapper }
					onFocus={ this.onMatrixBoardFocus }
					onBlur={ this.onMatrixBoardBlur }
				>	
					<MatrixBoard
						resultMatrixCValue={ this.state[MATRIX_C_NAME] }
						inputMatrixAValue={ this.state[MATRIX_A_NAME] }
						inputMatrixBValue={ this.state[MATRIX_B_NAME] }
						onInputMatrixAChange={ this.onInputMatrixAChange }
						onInputMatrixBChange={ this.onInputMatrixBChange }
					/>
				</div>
			</Flex>
		);
	}
}
