import classname from "classnames";
import type { ReactNode } from "react";

import cn from "./ButtonNative.module.scss";

export function ButtonNative({
	className,
	isDisabled,
	children,
}: {
	className?: string;
	isDisabled?: boolean;
	children: ReactNode;
}) {
	return (
		<button
			className={ classname(cn.root, className) }
			disabled={ isDisabled }
		>
			{ children }
		</button>
	);
}
