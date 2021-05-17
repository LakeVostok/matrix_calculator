import { changeMatrixColumnsCount } from "./changeMatrixColumnsCount";

function referenceEqualityCheck({
	originalMatrix,
	newMatrix,
}: {
	originalMatrix: Array<Array<unknown>>;
	newMatrix: Array<Array<unknown>>;
}) {
	// matrices are not the same by reference
	expect(newMatrix).not.toBe(originalMatrix);

	// old cells must be the same by reference
	expect(newMatrix[0][0]).toBe(originalMatrix[0][0]);
}

describe("changeMatrixColumnsCount", () => {
	it("adds one column to the right", () => {
		const matrix = [
			[{}, {}],
			[{}, {}],
		];

		const actual = changeMatrixColumnsCount({
			matrix,
			newColumnsCount: matrix[0].length + 1,
			createCell: () => ({}),
		});

		const expected = [
			[{}, {}, {}],
			[{}, {}, {}],
		];

		expect(actual).toEqual(expected);
		referenceEqualityCheck({
			originalMatrix: matrix,
			newMatrix: actual,
		});
	});

	it("removes one column from the right", () => {
		const matrix = [
			[{}, {}],
			[{}, {}],
		];

		const actual = changeMatrixColumnsCount({
			matrix,
			newColumnsCount: matrix[0].length - 1,
			createCell: () => ({}),
		});

		const expected = [
			[{}],
			[{}],
		];

		expect(actual).toEqual(expected);
		referenceEqualityCheck({
			originalMatrix: matrix,
			newMatrix: actual,
		});
	});

	it("doesn't changes column count if newRowsCount is same", () => {
		const matrix = [
			[{}, {}],
			[{}, {}],
		];

		const actual = changeMatrixColumnsCount({
			matrix,
			newColumnsCount: matrix[0].length,
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
