/// <reference types="cypress" />

const TARGET_URI = Cypress.env("URI");

class Page {
	constructor(uri: string) {
		cy.visit(uri);
	}
}

describe("Main", () => {
	let page: Page;

	beforeEach(() => {
		page = new Page(TARGET_URI);
	});

	it("works", function() {
		expect(true).to.equal(true);
	});
});
