import React from "react";

import { Flex, FlexDirection, FlexDisplay } from "../../atoms/Flex/Flex";
import { TypedMemo } from "../../../utils/TypedMemo";

import { MatrixRow } from "./components/MatrixRow/MatrixRow";

function MatrixInternal<CellType>({
	name,
	value,
	renderCell,
}: {
	name: string;
	value: Array<Array<CellType>>;
	renderCell: (args: {
		cell: CellType;
		placeholderPrefix: string;
		rowIndex: number;
		columnIndex: number;
	}) => React.ReactNode;
}) {
	const placeholderPrefix = name.toLowerCase();

	return (
		<Flex
			display={ FlexDisplay.INLINE_FLEX }
			direction={ FlexDirection.COLUMN }
		>
			{
				value.map((row, rowIndex) => {
					return (
						<MatrixRow<CellType>
							key={ rowIndex }
							row={ row }
							rowIndex={ rowIndex }
							placeholderPrefix={ placeholderPrefix }
							renderCell={ renderCell }
						/>
					);
				})
			}
		</Flex>
	);
}

export const Matrix = TypedMemo(MatrixInternal);
