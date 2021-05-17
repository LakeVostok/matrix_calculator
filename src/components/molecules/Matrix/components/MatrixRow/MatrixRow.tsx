import { ChangeEvent } from "react";

import { TypedMemo } from "../../../../../utils/TypedMemo";
import { Flex } from "../../../../atoms/Flex/Flex";

import cn from "./MatrixRow.module.scss";

function MatrixRowInternal<CellType>({
	row,
	rowIndex,
	placeholderPrefix,
	renderCell,
	onChange,
}: {
	row: Array<CellType>;
	rowIndex: number,
	placeholderPrefix: string,
	renderCell: (args: {
		cell: CellType;
		placeholderPrefix: string;
		rowIndex: number;
		columnIndex: number;
		onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	}) => React.ReactNode;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
							{ renderCell({ cell, rowIndex, columnIndex, placeholderPrefix, onChange }) }
						</div>
					);
				})
			}
		</Flex>
	);
}

export const MatrixRow = TypedMemo(MatrixRowInternal);
