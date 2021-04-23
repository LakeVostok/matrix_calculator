import { useState } from "react";

import { Flex, FlexDirection } from "../Flex/Flex";

import { RadioGroup, Radio } from "./RadioGroup";

function ExampleGrid({
	value,
	setValue,
}: {
	value: string;
	setValue: (value: string) => void;
}) {
	return (
		<RadioGroup
			value={ value }
			onChange={ setValue }
		>
			<Flex direction={ FlexDirection.COLUMN }>
				<Radio value="1">radio 1</Radio>
				<Radio value="2">radio 2</Radio>
				<Radio value="3">radio 3</Radio>
				<Radio value="4">radio 3</Radio>
				<Radio value="5">radio 3</Radio>
			</Flex>
		</RadioGroup>
	);
}

export function Example() {
	const [value, setValue] = useState("");

	return <ExampleGrid value={ value } setValue={ setValue } />;
}

export default { 
	title: "atoms/RadioGroup",
	component: Example,
};
