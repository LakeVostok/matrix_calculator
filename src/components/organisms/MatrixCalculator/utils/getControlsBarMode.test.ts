import { ControlsBarMode } from "../../../molecules/ControlsBar/ControlsBar";

import { getControlsBarMode } from "./getControlsBarMode";

describe("getControlsBarMode", () => {
	it("when matrices are compatible and not focused, mode should be IDLE", () => {
		const matrixA = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = getControlsBarMode({
			matrixA,
			matrixB,
			isFocused: false,
		});

		const expected = ControlsBarMode.IDLE;

		expect(actual).toEqual(expected);
	});

	it("when matrices are compatible and focused, mode should be INPUT", () => {
		const matrixA = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = getControlsBarMode({
			matrixA,
			matrixB,
			isFocused: true,
		});

		const expected = ControlsBarMode.INPUT;

		expect(actual).toEqual(expected);
	});

	it("when matrices are not compatible and not focused, mode should be ERROR", () => {
		const matrixA = [
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = getControlsBarMode({
			matrixA,
			matrixB,
			isFocused: false,
		});

		const expected = ControlsBarMode.ERROR;

		expect(actual).toEqual(expected);
	});

	it("when matrices are not compatible and focused, mode should be ERROR", () => {
		const matrixA = [
			[undefined, undefined, undefined],
			[undefined, undefined, undefined],
		];

		const matrixB = [
			[undefined, undefined],
			[undefined, undefined],
		];

		const actual = getControlsBarMode({
			matrixA,
			matrixB,
			isFocused: true,
		});

		const expected = ControlsBarMode.ERROR;

		expect(actual).toEqual(expected);
	});
});
