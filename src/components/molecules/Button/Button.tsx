import classname from "classnames";

import { ButtonNative } from "../../atoms/ButtonNative/ButtonNative";

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

export function Button({
	icon,
	isDisabled,
	type = ButtonType.DEFAULT,
	size = ButtonSize.M,
	children,
}: {
	icon?: React.ReactNode;
	isDisabled?: boolean;
	type?: ButtonType;
	size?: ButtonSize;
	children: React.ReactNode;
}) {
	return (
		<ButtonNative
			className={ classname(cn.root, buttonSizeCn[size], buttonTypeCn[type], {
				[cn.hasIcon]: Boolean(icon)
			}) }
			isDisabled={ isDisabled }
		>
			{ 
				icon && <div className={ cn.icon }>{ icon }</div> 
			}

			<div>{ children }</div>
		</ButtonNative>
	);
}
