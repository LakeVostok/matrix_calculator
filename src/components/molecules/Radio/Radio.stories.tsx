import React from "react";
import type { CreeveyStoryParams } from "creevey";

import type { PropCombination } from "../../utils/propCartesianProduct";
import { Flex, FlexAlign, FlexDirection, FlexJustify, FlexWrap } from "../Flex/Flex";
import { takeScreenshots } from "../../utils/takeScreenshots";
import { propCartesianProduct } from "../../utils/propCartesianProduct";

import { Radio } from "./Radio";

const targetSelector = "label";

const tests: CreeveyStoryParams["tests"] = {
	async normal() {
		await takeScreenshots.call(this, { targetSelector });
	},

	async hover() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (origin) => {
				await this.browser.actions().move({ origin }).perform();
			}
		});
	},

	async active() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (origin) => {
				await this.browser.actions().move({ origin }).press().perform();
			}
		});
	},

	async focus() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (origin) => {
				await this.browser.actions().move({ origin }).press().release().move({ x: 0, y: 0 }).perform();
			}
		});
	},

	async "focus+hover"() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (origin) => {
				await this.browser.actions().move({ origin }).press().release().perform();
			}
		});
	},
};

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
};

const propsCombinations = propCartesianProduct<React.ComponentProps<typeof Radio>>(propsVariations);

export const Cases = () => {
	return (
		<Flex 
			direction={ FlexDirection.COLUMN } 
			alignItems={ FlexAlign.START }
			flexWrap={ FlexWrap.WRAP }
		>
			{
				propsCombinations.map(({ name, props }, i) => {
					return (
						<Flex 
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
							<div style={ {
								width: "100px"
							} }>
								<Radio { ...props }/>
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
	title: "molecules/Radio",
	component: Radio,
};
