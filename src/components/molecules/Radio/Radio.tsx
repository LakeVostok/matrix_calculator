import classname from "classnames";

import cn from "./Radio.module.scss";

export function Radio({
	value,
	name,
	isDisabled,
	children,
}: {
	value: string;
	name: string;
	isDisabled?: boolean;
	children: React.ReactNode;
}) {
	return (
		<label className={ classname(cn.root, cn["size-m"]) }>
			<input
				className={ cn.input }
				type="radio"
				name={ name }
				value={ value }
				disabled={ isDisabled }
			/>
			<div className={ cn.pseudoRadio }/>
			<div className={ cn.text }>
				{ children }
			</div>
		</label>
	);
}
