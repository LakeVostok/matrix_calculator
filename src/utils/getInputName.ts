let nameCounter = 0;

export function getInputName() {
	return `name-${nameCounter++}`;
}
