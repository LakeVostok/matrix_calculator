import classname from "classnames";

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
}: {
	value?: string;
	placeholder?: string;
	size?: InputSize;
	isDisabled?: boolean;
}) {
	return (
		<input
			className={ classname(cn.root, inputSizeCn[size]) }
			type="text"
			value={ value }
			placeholder={ placeholder }
			disabled={ isDisabled }
		/>
	);
}
