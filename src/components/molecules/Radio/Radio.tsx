import classname from "classnames";
import { useCallback, memo } from "react";

import cn from "./Radio.module.scss";

function RadioInternal({
	value,
	name,
	isDisabled,
	isChecked,
	children,
	onChange,
}: {
	value: string;
	name: string;
	isChecked?: boolean;
	isDisabled?: boolean;
	children: React.ReactNode;
	onChange: (value: string) => void;
}) {
	const changeHandler = useCallback(() => {
		onChange(value);
	}, [value, onChange]);

	return (
		<label className={ classname(cn.root, cn["size-m"]) }>
			<input
				className={ cn.input }
				type="radio"
				name={ name }
				value={ value }
				checked={ isChecked }
				disabled={ isDisabled }
				onChange={ changeHandler }
			/>
			<div className={ cn.pseudoRadio }/>
			<div className={ cn.text }>
				{ children }
			</div>
		</label>
	);
}

export const Radio = memo(RadioInternal);
