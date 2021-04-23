import classname from "classnames";
import { useCallback } from "react";
import type { ChangeEvent } from "react";

import cn from "./Input.module.scss";

export enum InputSize {
	S,
	M,
}

const inputSizeCn = {
	[InputSize.S]: cn["size-s"],
	[InputSize.M]: cn["size-m"],
};

export function Input({
	value,
	placeholder,
	size = InputSize.M,
	isDisabled,
	onChange,
}: {
	value?: string;
	placeholder?: string;
	size?: InputSize;
	isDisabled?: boolean;
	onChange: (value: string) => void;
}) {
	const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	}, [onChange]);

	return (
		<input
			className={ classname(cn.root, inputSizeCn[size]) }
			type="text"
			value={ value }
			placeholder={ placeholder }
			disabled={ isDisabled }
			onChange={ changeHandler }
		/>
	);
}
