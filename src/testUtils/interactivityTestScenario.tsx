import type { CreeveyStoryParams } from "creevey";

import { takeScreenshots } from "./takeScreenshots";

export const TAB_KEY = "\uE004";

export const createTests = (targetSelector: string): CreeveyStoryParams["tests"] => {
	return {
		normal() {
			return takeScreenshots.call(this, { targetSelector });
		},

		hover() {
			return takeScreenshots.call(this, {
				targetSelector,
				beforeScreen: origin => this.browser.actions()
					.move({ origin })
					.perform()
			});
		},

		active() {
			return takeScreenshots.call(this, {
				targetSelector,
				beforeScreen: origin => this.browser.actions()
					.move({ origin })
					.press()
					.perform()
			});
		},

		focus() {
			return takeScreenshots.call(this, {
				targetSelector,
				beforeScreen: () => this.browser.actions()
					.sendKeys(TAB_KEY)
					.perform()
			});
		},

		"focus+hover"() {
			return takeScreenshots.call(this, {
				targetSelector,
				beforeScreen: origin => this.browser.actions()
					.move({ origin })
					.sendKeys(TAB_KEY)
					.perform()
			});
		},
	};
};
