import React from "react";
import classname from "classnames";
import type { ReactHTML, CSSProperties } from "react";

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

export function Flex({
	tag = "div",
	className,
	direction = FlexDirection.ROW,
	justifyContent = FlexJustify.CENTER,
	alignItems = FlexAlign.CENTER,
	flexWrap = FlexWrap.NOWRAP,
	style,
	children,
}: {
	tag?: keyof ReactHTML;
	className?: string;
	direction?: FlexDirection;
	justifyContent?: FlexJustify;
	alignItems?: FlexAlign;
	flexWrap?: FlexWrap,
	style?: CSSProperties,
	children: React.ReactNode;
}) {
	return React.createElement(tag, {
		className: classname(cn.root, flexJustifyCn[justifyContent], flexAlignCn[alignItems], flexDirectionCn[direction], flexWrapCn[flexWrap], className),
		style,
		children,
	});
}
