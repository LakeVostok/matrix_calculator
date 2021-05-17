import { changeMatrixRowsCount } from "./changeMatrixRowsCount";

function referenceEqualityCheck({
	originalMatrix,
	newMatrix,
}: {
	originalMatrix: Array<Array<unknown>>;
	newMatrix: Array<Array<unknown>>;
}) {
	// matrices are not the same by reference
	expect(newMatrix).not.toBe(originalMatrix);

	// old row must be the same by reference
	expect(newMatrix[0]).toBe(originalMatrix[0]);
}

describe("changeMatrixRowsCount", () => {
	it("adds one row to the bottom", () => {
		const matrix = [
			[{}, {}],
			[{}, {}],
		];

		const actual = changeMatrixRowsCount({
			matrix,
			newRowsCount: matrix.length + 1,
			createCell: () => ({}),
		});

		const expected = [
			[{}, {}],
			[{}, {}],
			[{}, {}],
		];

		expect(actual).toEqual(expected);
		referenceEqualityCheck({
			originalMatrix: matrix,
			newMatrix: actual,
		});
	});

	it("removes one row from the bottom", () => {
		const matrix = [
			[{}, {}],
			[{}, {}],
		];

		const actual = changeMatrixRowsCount({
			matrix,
			newRowsCount: matrix.length - 1,
			createCell: () => ({}),
		});

		const expected = [
			[{}, {}],
		];

		expect(actual).toEqual(expected);
		referenceEqualityCheck({
			originalMatrix: matrix,
			newMatrix: actual,
		});
	});

	it("doesn't changes row count if newRowsCount is same", () => {
		const matrix = [
			[{}, {}],
			[{}, {}],
		];

		const actual = changeMatrixRowsCount({
			matrix,
			newRowsCount: matrix.length,
			createCell: () => ({}),
		});

		const expected = [
			[{}, {}],
			[{}, {}],
		];

		expect(actual).toEqual(expected);
		referenceEqualityCheck({
			originalMatrix: matrix,
			newMatrix: actual,
		});
	});
});
