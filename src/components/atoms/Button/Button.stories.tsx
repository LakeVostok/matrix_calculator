import React from "react";
import type { CreeveyStoryParams } from "creevey";

import { Icon, IconType } from "../Icon/Icon";
import { Flex, FlexAlign, FlexDirection, FlexJustify, FlexWrap } from "../Flex/Flex";
import { takeScreenshots } from "../../utils/takeScreenshots";
import { propCartesianProduct } from "../../utils/propCartesianProduct";
import type { PropCombination } from "../../utils/propCartesianProduct";

import { Button, ButtonType, ButtonSize } from "./Button";

const targetSelector = "button";

const tests: CreeveyStoryParams["tests"] = {
	async normal() {
		await takeScreenshots.call(this, { targetSelector });
	},

	async hover() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (button) => {
				await this.browser.actions().move({ origin: button }).perform();
			}
		});
	},

	async active() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (button) => {
				await this.browser.actions().move({ origin: button }).press().perform();
			}
		});
	},

	async focus() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (button) => {
				await this.browser.actions().move({ origin: button }).press().release().move({ x: 0, y: 0 }).perform();
			}
		});
	},

	async "focus+hover"() {
		await takeScreenshots.call(this, {
			targetSelector,
			beforeScreen: async (button) => {
				await this.browser.actions().move({ origin: button }).press().release().perform();
			}
		});
	},
};

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

const propsCombinations = propCartesianProduct<React.ComponentProps<typeof Button>>(propsVariations);

export const Cases = () => {
	return (
		<Flex 
			direction={ FlexDirection.COLUMN } 
			alignItems={ FlexAlign.START }
			flexWrap={ FlexWrap.WRAP }
			style={ { 
				height: 600,
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
							<div style={ {
								width: "100px"
							} }>
								<Button { ...props }/>
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
	title: "atoms/Button",
	component: Button,
};
