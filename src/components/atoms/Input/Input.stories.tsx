import type { CreeveyStoryParams } from "creevey";

import type { PropCombination } from "../../utils/propCartesianProduct";
import { propCartesianProduct } from "../../utils/propCartesianProduct";
import { takeScreenshots } from "../../utils/takeScreenshots";
import { Flex, FlexAlign, FlexDirection, FlexJustify, FlexWrap } from "../Flex/Flex";

import { Input, InputSize } from "./Input";

const TAB_KEY = "\uE004";

const targetSelector = "input";

const tests: CreeveyStoryParams["tests"] = {
	async normal() {
		await takeScreenshots.call(this, { targetSelector });
	},

	async hover() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: origin => this.browser.actions()
				.move({ origin })
				.perform()
		});
	},

	async active() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: origin => this.browser.actions()
				.move({ origin })
				.press()
				.perform()
		});
	},

	async focus() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: () => this.browser.actions()
				.sendKeys(TAB_KEY)
				.perform()
		});
	},

	async "focus+hover"() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: origin => this.browser.actions()
				.move({ origin })
				.sendKeys(TAB_KEY)
				.perform()
		});
	},

	async input() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: origin => this.browser.actions()
				.move({ origin })
				.press()
				.release()
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
};

const propsCombinations = propCartesianProduct<React.ComponentProps<typeof Input>>(propsVariations);

export const Cases = () => {
	return (
		<Flex 
			direction={ FlexDirection.COLUMN } 
			alignItems={ FlexAlign.START }
			flexWrap={ FlexWrap.WRAP }
			style={ { 
				height: 700,
			} }
		>
			{
				propsCombinations.map(({ name, props }, i) => {
					return (
						<Flex 
							key={ name }
							className={ `sequence` }
							justifyContent={ FlexJustify.END }
							style={ { 
								padding: 20,
								border: "1px dashed black",
								width: "40%"
							} }	
						>
							<div 
								className="name"
								style={ {
									marginRight: 30,
								} }
							>
								{ name }
							</div>
							<div>
								<Input { ...props }/>
							</div>
						</Flex>
					);
				})
			}
		</Flex>
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
