import { TypedMemo } from "../../../../../utils/TypedMemo";
import { Flex } from "../../../../atoms/Flex/Flex";

import cn from "./MatrixRow.module.scss";

function MatrixRowInternal<CellType>({
	row,
	rowIndex,
	placeholderPrefix,
	renderCell
}: {
	row: Array<CellType>;
	rowIndex: number,
	placeholderPrefix: string,
	renderCell: (args: {
		cell: CellType;
		placeholderPrefix: string;
		rowIndex: number;
		columnIndex: number;
	}) => React.ReactNode;
}) {
	return (
		<Flex
			className={ cn.row }
		>
			{ 
				row.map((cell, columnIndex) => {
					return (
						<div
							key={ columnIndex }
							className={ cn.cell }
						>
							{ renderCell({ cell, rowIndex, columnIndex, placeholderPrefix }) }
						</div>
					);
				})
			}
		</Flex>
	);
}

export const MatrixRow = TypedMemo(MatrixRowInternal);
