import { isMatricesCompatible } from "./isMatricesCompatible";

describe("isMatricesCompatible", () => {
	it("is allowed when columns count in matrixA is same as row count in matrixB", () => {
		const matrixA = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = isMatricesCompatible({
			matrixA,
			matrixB
		});

		expect(actual).toEqual(true);
	});

	it("is allowed when columns count in matrixA is same as row count in matrixB, but sizes are different", () => {
		const matrixA = [
			[undefined, undefined],
			[undefined, undefined],
			[undefined, undefined],
			[undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined, undefined, undefined],
			[undefined, undefined, undefined, undefined],
		];

		const actual = isMatricesCompatible({
			matrixA,
			matrixB
		});

		expect(actual).toEqual(true);
	});

	it("is not allowed when columns count in matrixA is less then row count in matrixB", () => {
		const matrixA = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = isMatricesCompatible({
			matrixA,
			matrixB
		});

		expect(actual).toEqual(false);
	});

	it("is not allowed when columns count in matrixA is greater then row count in matrixB", () => {
		const matrixA = [
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = isMatricesCompatible({
			matrixA,
			matrixB
		});

		expect(actual).toEqual(false);
	});
});
