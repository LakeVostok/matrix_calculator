import { TypedMemo } from "../../../../../utils/TypedMemo";
import { Button } from "../../../../atoms/Button/Button";
import { Flex, FlexAlign, FlexDirection } from "../../../../atoms/Flex/Flex";
import { Icon, IconType } from "../../../../atoms/Icon/Icon";

import cn from "./ControlsBarSizeChanger.module.scss";

const strings = {
	add: "Добавить",
	delete: "Удалить",
	row: "строку",
	column: "столбец",
};

const addIcon = <Icon iconType={ IconType.ADD }/>;
const removeIcon = <Icon iconType={ IconType.REMOVE }/>;

function ControlsBarSizeChangerInternal({
	isAddRowDisabled,
	isRemoveRowDisabled,
	isAddColumnDisabled,
	isRemoveColumnDisabled,
	onAddRow,
	onRemoveRow,
	onAddColumn,
	onRemoveColumn,
}: {
	isAddRowDisabled: boolean;
	isRemoveRowDisabled: boolean;
	isAddColumnDisabled: boolean;
	isRemoveColumnDisabled: boolean;
	onAddRow: () => void;
	onRemoveRow: () => void;
	onAddColumn: () => void;
	onRemoveColumn: () => void;
}) {
	return (
		<Flex 
			direction={ FlexDirection.COLUMN }
			alignItems={ FlexAlign.START }
		>
			<Flex
				className={ cn.buttonRow }
			>
				<div className={ cn.buttonWrapper }>
					<Button
						isDisabled={ isAddRowDisabled }
						icon={ addIcon }
						onClick={ onAddRow }
					>
						{ strings.add }
					</Button>
				</div>
				<div className={ cn.buttonWrapper }>
					<Button
						isDisabled={ isRemoveRowDisabled }
						icon={ removeIcon }
						onClick={ onRemoveRow }
					>
						{ strings.delete }
					</Button>
				</div>
				<div>{ strings.row }</div>
			</Flex>
			<Flex>
				<div className={ cn.buttonWrapper }>
					<Button
						isDisabled={ isAddColumnDisabled }
						icon={ addIcon }
						onClick={ onAddColumn }
					>
						{ strings.add }
					</Button>
				</div>
				<div className={ cn.buttonWrapper }>
					<Button
						isDisabled={ isRemoveColumnDisabled }
						icon={ removeIcon }
						onClick={ onRemoveColumn }
					>
						{ strings.delete }
					</Button>
				</div>
				<div>{ strings.column }</div>
			</Flex>
		</Flex>
	);
}

export const ControlsBarSizeChanger = TypedMemo(ControlsBarSizeChangerInternal);
