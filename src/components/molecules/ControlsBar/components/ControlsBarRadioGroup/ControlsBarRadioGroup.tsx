import { TypedMemo } from "../../../../../utils/TypedMemo";
import { Flex, FlexJustify } from "../../../../atoms/Flex/Flex";
import { RadioGroup, Radio } from "../../../../atoms/RadioGroup/RadioGroup";

import cn from "./ControlsBarRadioGroup.module.scss";

function ControlsBarRadioGroupInternal({
	value,
	data,
	onChange,
}: {
	value: string;
	data: Array<{
		label: string;
		value: string;
	}>;
	onChange: (value: string) => void;
}) {
	return (
		<RadioGroup
			value={ value }
			onChange={ onChange }
		>
			<Flex
				justifyContent={ FlexJustify.SPACE_BETWEEN }
			>
				{
					data.map(({ value, label }) => {
						return (
							<div
								key={ value }
								className={ cn.radio }
							>
								<Radio
									value={ value }
								>
									{ label }
								</Radio>
							</div>
						);
					})
				}
			</Flex>
		</RadioGroup>
	);
}

export const ControlsBarRadioGroup = TypedMemo(ControlsBarRadioGroupInternal);
