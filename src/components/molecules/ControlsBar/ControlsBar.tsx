import classname from "classnames";

import { Button, ButtonType, ButtonSize } from "../../atoms/Button/Button";
import { Flex, FlexAlign, FlexDirection, FlexJustify } from "../../atoms/Flex/Flex";
import { Icon, IconType } from "../../atoms/Icon/Icon";

import { ControlsBarRadioGroup } from "./components/ControlsBarRadioGroup/ControlsBarRadioGroup";
import { ControlsBarSizeChanger } from "./components/ControlsBarSizeChanger/ControlsBarSizeChanger";
import cn from "./ControlsBar.module.scss";

const strings = {
	multiply: "Умножить матрицы",
	clear: "Очистить матрицы",
	swap: "Поменять матрицы местами",
	error: "Такие матрицы нельзя перемножить, так как количество столбцов матрицы А не равно количеству строк матрицы В.",
};

const clearIcon = <Icon iconType={ IconType.CLEAR }/>;
const swapIcon = <Icon iconType={ IconType.SWAP }/>;

export enum ControlsBarMode {
	IDLE,
	INPUT,
	ERROR,
}

const barModeCn = {
	[ControlsBarMode.IDLE]: cn.modeIdle,
	[ControlsBarMode.INPUT]: cn.modeInput,
	[ControlsBarMode.ERROR]: cn.modeError,
};

export function ControlsBar({
	mode,
	rowsCount,
	columnsCount,
	minRowsCount,
	maxRowsCount,
	minColumnsCount,
	maxColumnsCount,
	currentMatrixName,
	radioData,
	onCurrentMatrixChange,
	onAddRow,
	onRemoveRow,
	onAddColumn,
	onRemoveColumn,
}: {
	mode: ControlsBarMode;
	rowsCount: number,
	columnsCount: number,
	minRowsCount: number;
	maxRowsCount: number;
	minColumnsCount: number;
	maxColumnsCount: number;
	currentMatrixName: string;
	radioData: Array<{
		label: string;
		value: string;
	}>;
	onCurrentMatrixChange: (matrixName: string) => void;
	onAddRow: () => void;
	onRemoveRow: () => void;
	onAddColumn: () => void;
	onRemoveColumn: () => void;
}) {
	return (
		<Flex
			className={ classname(cn.root, barModeCn[mode]) }
			direction={ FlexDirection.COLUMN }
			justifyContent={ FlexJustify.START }
			alignItems={ FlexAlign.START }
		>
			<div>
				<Button
					type={ ButtonType.ACTION }
					isDisabled={ mode === ControlsBarMode.ERROR }
				>
					{ strings.multiply }
				</Button>
			</div>
			<div className={ cn.clearWrapper }>
				<Button
					size={ ButtonSize.S }
					icon={ clearIcon }
				>
					{ strings.clear }
				</Button>
			</div>
			<div className={ cn.swapWrapper }>
				<Button
					size={ ButtonSize.S }
					icon={ swapIcon }
				>
					{ strings.swap }
				</Button>
			</div>

			<div className={ cn.radioWrapper }>
				<ControlsBarRadioGroup
					value={ currentMatrixName }
					data={ radioData }
					onChange={ onCurrentMatrixChange }
				/>
			</div>

			<div className={ cn.sizeChangerWrapper }>
				<ControlsBarSizeChanger
					isAddRowDisabled={ rowsCount >= maxRowsCount }
					isRemoveRowDisabled={ rowsCount <= minRowsCount }
					isAddColumnDisabled={ columnsCount >= maxColumnsCount }
					isRemoveColumnDisabled={ columnsCount <= minColumnsCount }
					onAddRow={ onAddRow }
					onRemoveRow={ onRemoveRow }
					onAddColumn={ onAddColumn }
					onRemoveColumn={ onRemoveColumn }
				/>
			</div>

			<div className={ cn.errorWrapper }>
				{ strings.error }
			</div>
		</Flex>
	);
}
