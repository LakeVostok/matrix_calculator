import type { ChangeEvent } from "react";

import { MATRIX_A_NAME, MATRIX_B_NAME, MATRIX_C_NAME } from "../../../utils/constants";
import { Flex, FlexAlign, FlexDirection } from "../../atoms/Flex/Flex";
import { TypedMemo } from "../../../utils/TypedMemo";

import { ResultMatrix } from "./components/ResultMatrix/ResultMatrix";
import { InputMatrix } from "./components/InputMatrix/InputMatrix";
import { MatrixBrackets } from "./components/MatrixBrackets/MatrixBrackets";
import cn from "./MatrixBoard.module.scss";

const matrixALabel = <div className={ cn.matrixALabel }>{ MATRIX_A_NAME }</div>;
const matrixBLabel = <div className={ cn.matrixBLabel }>{ MATRIX_B_NAME }</div>;

function MatrixBoardInternal({
	resultMatrixCValue,
	inputMatrixAValue,
	inputMatrixBValue,
	onInputMatrixAChange,
	onInputMatrixBChange,
}: {
	resultMatrixCValue: Array<Array<number | undefined>>;
	inputMatrixAValue: Array<Array<{
		value: number | undefined;
		hasError: boolean;
	}>>;
	inputMatrixBValue: Array<Array<{
		value: number | undefined;
		hasError: boolean;
	}>>;
	onInputMatrixAChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onInputMatrixBChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<Flex
			direction={ FlexDirection.COLUMN }
			alignItems={ FlexAlign.START }
		>
			<Flex>
				<MatrixBrackets>
					<ResultMatrix
						name={ MATRIX_C_NAME }
						value={ resultMatrixCValue }
					/>
				</MatrixBrackets>
				<Flex className={ cn.matrixAWrapper }>
					<MatrixBrackets>
						<InputMatrix 
							name={ MATRIX_A_NAME }
							value={ inputMatrixAValue }
							onChange={ onInputMatrixAChange }
						/>
					</MatrixBrackets>
					{ matrixALabel }
				</Flex>
			</Flex>
			<Flex>
				<Flex 
					className={ cn.matrixBWrapper }
					direction={ FlexDirection.COLUMN }
				>
					<MatrixBrackets>
						<InputMatrix
							name={ MATRIX_B_NAME }
							value={ inputMatrixBValue }
							onChange={ onInputMatrixBChange }
						/>
					</MatrixBrackets>
					{ matrixBLabel }
				</Flex>
			</Flex>
		</Flex>
	);
}

export const MatrixBoard = TypedMemo(MatrixBoardInternal);
