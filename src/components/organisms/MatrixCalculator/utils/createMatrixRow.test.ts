import { createMatrixRow } from "./createMatrixRow";

describe("createMatrixRow", () => {
	it("creates new row of cells", () => {
		const actual = createMatrixRow({
			columnsCount: 2,
			createCell: () => ({}),
		});

		const expected = [{}, {}];

		expect(actual).toEqual(expected);
	});

	it("creates empty row when columnsCount is 0", () => {
		const actual = createMatrixRow({
			columnsCount: 0,
			createCell: () => ({}),
		});

		expect(actual).toEqual([]);
	});
});
