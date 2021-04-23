import type { CreeveyStoryParams } from "creevey";

import type { PropCombination } from "../../../testUtils/propCartesianProduct";
import { takeScreenshots } from "../../../testUtils/takeScreenshots";
import { createTests, TAB_KEY } from "../../../testUtils/interactivityTestScenario";
import { TestGrid } from "../../../testUtils/TestGrid";
import { noop } from "../../../utils/noop";

import { Input, InputSize } from "./Input";

const targetSelector = "input";

const tests: CreeveyStoryParams["tests"] = {
	...createTests(targetSelector),
	
	input() {
		return takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: () => this.browser.actions()
				.sendKeys(TAB_KEY)
				.sendKeys("Text")
				.perform()
		});
	}
};

const propsVariations: PropCombination<React.ComponentProps<typeof Input>> = {
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
	size: [
		{
			name: "M",
			value: InputSize.M
		}, 
		{
			name: "S",
			value: InputSize.S
		}
	],
	value: [
		{
			name: "with",
			value: "Input",
		},
		{
			name: "without",
			value: undefined,
		},
	],
	placeholder: [
		{
			name: "with",
			value: "Placeholder",
		},
		{
			name: "without",
			value: undefined,
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
		<TestGrid<typeof Input>
			propsVariations={ propsVariations }
			Component={ Input }
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
	title: "atoms/Input",
	component: Input,
};
