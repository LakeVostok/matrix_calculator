import type { WebDriver, WebElement } from "selenium-webdriver";

export async function takeScreenshots(this: {
	browser: WebDriver;
	expect: Chai.ExpectStatic;
}, {
	descriptionSelector = ".name",
	sequenceSelector = ".sequence",
	targetSelector,
	beforeScreen,
}: {
	descriptionSelector?: string;
	sequenceSelector?: string,
	targetSelector: string;
	beforeScreen?: (targetElement: WebElement) => Promise<void>;
}) {
	const sequences = await this.browser.findElements({ css: sequenceSelector });

	const screenshots: Record<string, string> = {};

	for (let i = 0; i < sequences.length; i++) {
		const sequence = sequences[i];

		const [name, element] = await Promise.all([
			sequence.findElement({ css: descriptionSelector }),
			sequence.findElement({ css: targetSelector }),
		]);

		beforeScreen && await beforeScreen(element);

		const [nameText, screenShot] = await Promise.all([
			name.getText(),
			element.takeScreenshot(),
		]);

		screenshots[nameText] = screenShot;
	}

	await this.expect(screenshots).to.matchImages();
}
