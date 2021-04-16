import cn from "./Icon.module.scss";

export enum IconType {
	CLEAR = "\uE012",
	SWAP = "\uE01F",
	ADD = "\uE00D",
	REMOVE = "\uE01E",
}

export function Icon({
	iconType,
}: {
	iconType: IconType;
}) {
	return (
		<span className={ cn.icon }>
			{ iconType }
		</span>
	);
}
