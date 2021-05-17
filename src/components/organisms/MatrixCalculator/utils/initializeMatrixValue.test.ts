import { initializeMatrixValue } from "./initializeMatrixValue";

describe("initializeMatrixValue", () => {
	it("creates 2x2 matrix from scratch", () => {
		const actual = initializeMatrixValue({
			rowsCount: 2,
			columnsCount: 2,
			createCell: () => ({}),
		});

		const expected = [
			[{}, {}],
			[{}, {}],
		];

		expect(actual).toEqual(expected);
	});
});
