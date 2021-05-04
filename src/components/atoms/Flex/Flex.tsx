import React from "react";
import type { ReactHTML, AllHTMLAttributes } from "react";
import classname from "classnames";

import cn from "./Flex.module.scss";

export enum FlexDirection {
	ROW,
	COLUMN,
}

const flexDirectionCn = {
	[FlexDirection.COLUMN]: cn.fdc,
	[FlexDirection.ROW]: cn.fdr,
};

export enum FlexJustify {
	CENTER,
	END,
}

const flexJustifyCn = {
	[FlexJustify.CENTER]: cn.jcc,
	[FlexJustify.END]: cn.jce,
};

export enum FlexAlign {
	CENTER,
	START,
}

const flexAlignCn = {
	[FlexAlign.CENTER]: cn.aic,
	[FlexAlign.START]: cn.ais,
};

export enum FlexWrap {
	NOWRAP,
	WRAP,
}

const flexWrapCn = {
	[FlexWrap.NOWRAP]: cn.fwn,
	[FlexWrap.WRAP]: cn.fww,
};

export enum FlexDisplay {
	FLEX,
	INLINE_FLEX
}

const flexDisplayCn = {
	[FlexDisplay.FLEX]: cn.df,
	[FlexDisplay.INLINE_FLEX]: cn.dif,
};

interface FlexProps<Tag extends keyof ReactHTML> extends AllHTMLAttributes<Tag> {
	tag?: Tag;
	direction?: FlexDirection;
	justifyContent?: FlexJustify;
	alignItems?: FlexAlign;
	flexWrap?: FlexWrap,
	display?: FlexDisplay,
	children: React.ReactNode;
}

export function Flex<Tag extends keyof ReactHTML>({
	tag,
	className,
	direction = FlexDirection.ROW,
	justifyContent = FlexJustify.CENTER,
	alignItems = FlexAlign.CENTER,
	flexWrap = FlexWrap.NOWRAP,
	display = FlexDisplay.FLEX,
	style,
	children,
	...attrs
}: FlexProps<Tag>) {
	return React.createElement(tag || "div", {
		className: classname(
			cn.root,
			flexJustifyCn[justifyContent], 
			flexAlignCn[alignItems], 
			flexDirectionCn[direction], 
			flexWrapCn[flexWrap],
			flexDisplayCn[display],
			className,
		),
		style,
		children,
		...attrs,
	});
}
