import React from "react";

import { Icon, IconType } from "../Icon/Icon";
import type { PropCombination } from "../../../testUtils/propCartesianProduct";
import { createTests } from "../../../testUtils/interactivityTestScenario";
import { TestGrid } from "../../../testUtils/TestGrid";

import { Button, ButtonType, ButtonSize } from "./Button";

const tests = createTests("button");

const propsVariations: PropCombination<React.ComponentProps<typeof Button>> = {
	type: [
		{
			name: "action",
			value: ButtonType.ACTION,
		},
		{
			name: "default",
			value: ButtonType.DEFAULT,
		}
	],
	size: [
		{
			name: "M",
			value: ButtonSize.M
		}, 
		{
			name: "S",
			value: ButtonSize.S
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
	icon: [
		{
			name: "without_icon",
			value: null,
		}, 
		{
			name: "with_icon",
			value: <Icon iconType={ IconType.ADD }/>,
		},
	],
	children: [
		{
			name: "default",
			value: "Button",
		},
	],
};

export const Cases = () => {
	return (
		<TestGrid<typeof Button>
			propsVariations={ propsVariations }
			Component={ Button }
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
	title: "atoms/Button",
	component: Button,
};
