import { TypedMemo } from "../../../../../utils/TypedMemo";
import { Flex, FlexAlign } from "../../../../atoms/Flex/Flex";

import cn from "./MatrixBrackets.module.scss";

const leftBracket = <div className={ cn.leftBracket }/>;
const rightBracket = <div className={ cn.rightBracket }/>;

function MatrixBracketsInternal({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Flex
			alignItems={ FlexAlign.STRETCH }
		>
			{ leftBracket }
			<div className={ cn.content }>{ children}</div>
			{ rightBracket }
		</Flex>
	);
}

export const MatrixBrackets = TypedMemo(MatrixBracketsInternal);
