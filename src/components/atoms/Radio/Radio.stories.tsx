import React from "react";

import type { PropCombination } from "../../../testUtils/propCartesianProduct";
import { noop } from "../../../utils/noop";
import { createTests } from "../../../testUtils/interactivityTestScenario";
import { TestGrid } from "../../../testUtils/TestGrid";

import { Radio } from "./Radio";

const tests = createTests("label");

const propsVariations: PropCombination<React.ComponentProps<typeof Radio>> = {
	value: [
		{
			name: "value",
			value: "value",
		}
	],
	name: [
		{
			name: "name",
			value: "name",
		}
	],
	isDisabled: [
		{
			name: "false",
			value: false,
		},
		{
			name: "true",
			value: true,
		},
	],
	children: [
		{
			name: "default",
			value: "Radio",
		},
	],
	onChange: [
		{
			name: "fake change handler",
			value: noop,
		}
	],
};

export const Cases = () => {
	return (
		<TestGrid<typeof Radio>
			propsVariations={ propsVariations }
			Component={ Radio }
		/>
	);
};

Cases.parameters = {
	creevey: {
		captureElement: "#root",
		tests, 
	},
};

export default { 
	title: "atoms/Radio",
	component: Radio,
};
