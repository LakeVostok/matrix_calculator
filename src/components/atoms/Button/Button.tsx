import classname from "classnames";

import { TypedMemo } from "../../../utils/TypedMemo";
import { Flex, FlexDisplay } from "../Flex/Flex";

import cn from "./Button.module.scss";

export enum ButtonSize {
	S,
	M,
}

const buttonSizeCn = {
	[ButtonSize.S]: cn["size-s"],
	[ButtonSize.M]: cn["size-m"],
};

export enum ButtonType {
	DEFAULT,
	ACTION,
}

const buttonTypeCn = {
	[ButtonType.DEFAULT]: cn["type-default"],
	[ButtonType.ACTION]: cn["type-action"],
};

function ButtonInternal({
	icon,
	isDisabled,
	type = ButtonType.DEFAULT,
	size = ButtonSize.M,
	onClick,
	children,
}: {
	icon?: React.ReactNode;
	isDisabled?: boolean;
	type?: ButtonType;
	size?: ButtonSize;
	onClick?: () => void;
	children: React.ReactNode;
}) {
	return (
		<Flex
			tag="button"
			display={ FlexDisplay.INLINE_FLEX }
			className={ classname(cn.root, buttonSizeCn[size], buttonTypeCn[type], {
				[cn.hasIcon]: Boolean(icon)
			}) }
			disabled={ isDisabled }
			onClick={ onClick }
		>
			{ 
				icon && <div className={ cn.icon }>{ icon }</div> 
			}

			<div>{ children }</div>
		</Flex>
	);
}

export const Button = TypedMemo(ButtonInternal);
