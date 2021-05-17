import { getMatricesProduct } from "./getMatricesProduct";

describe("getMatricesProduct", () => {
	it("creates correct product of two matrices", () => {
		const matrixA = [
			[1, 2],
			[3, 4],
			[5, 6]
		];

		const matrixB = [
			[1, 2, 3],
			[4, 5, 6],
		];

		const actual = getMatricesProduct({
			matrixA,
			matrixB,
			getCellValue: cell => cell,
		});

		const expected = [
			[9, 12, 15],
			[19, 26, 33],
			[29, 40, 51],
		];
	
		expect(actual).toEqual(expected);
	});

	it("throws error if matrices are not compatible", () => {
		const matrixA = [
			[1, 2],
			[3, 4],
			[5, 6]
		];

		const matrixB = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		];

		const actual = () => getMatricesProduct({
			matrixA,
			matrixB,
			getCellValue: cell => cell,
		});
	
		expect(actual).toThrow("Matrices are not compatible");
	});

	it("throws error if some value is undefined", () => {
		const matrixA = [
			[undefined, 2],
			[3, 4],
			[5, 6]
		];

		const matrixB = [
			[1, 2, 3],
			[4, 5, 6],
		];

		const actual = () => getMatricesProduct({
			matrixA,
			matrixB,
			getCellValue: cell => cell,
		});
	
		expect(actual).toThrow("Got undefined value while multiplying the matrices");
	});
});
