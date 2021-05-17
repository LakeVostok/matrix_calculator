import classname from "classnames";
import type { ChangeEvent } from "react";

import { TypedMemo } from "../../../utils/TypedMemo";

import cn from "./Input.module.scss";

export enum InputSize {
	S,
	M,
}

const inputSizeCn = {
	[InputSize.S]: cn["size-s"],
	[InputSize.M]: cn["size-m"],
};

function InputInternal({
	value,
	name,
	placeholder,
	size = InputSize.M,
	isDisabled,
	hasError,
	onChange,
}: {
	value?: string;
	name?: string;
	placeholder?: string;
	size?: InputSize;
	isDisabled?: boolean;
	hasError?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<input
			className={ classname(cn.root, inputSizeCn[size], { 
				[cn.hasError]: hasError,
			}) }
			type="text"
			name={ name }
			value={ value }
			placeholder={ placeholder }
			disabled={ isDisabled }
			onChange={ onChange }
		/>
	);
}

export const Input = TypedMemo(InputInternal);
