export type PropCombination<PropType> = {
	[key in keyof PropType]: Array<PropWithItName<PropType[key]>>
}

interface PropWithItName<T> {
	name: string;
	value: T;
}

type Result<PropType> = Array<{
	name: string;
	props: PropType;
}>;

function getCombinationName<PropType>(currentPropName: keyof PropType, lastCombinations: string, combinedValue: string) {
	if (currentPropName === "children") {
		return lastCombinations;
	}

	const description = `${currentPropName}-${combinedValue}`;
	
	if (lastCombinations) {
		return `${lastCombinations}, ${description}`;
	}

	return description;
}

export function propCartesianProduct<TargetProps extends {}>(combinations: PropCombination<TargetProps>): Result<TargetProps> {
	const categories = Object.keys(combinations) as Array<keyof typeof combinations>;

	const firstCategory = categories[0];

	let cache: Result<TargetProps> = combinations[firstCategory].map(({ name, value }) => {
		return {
			name: getCombinationName<TargetProps>(firstCategory, "", name),
			props: {
				[firstCategory]: value,
			} as TargetProps,
		};
	});

	for (let i = 1; i < categories.length; i++) {
		const newCombination = cache.reduce((res, lastCombinationWord) => {
			combinations[categories[i]].forEach(({ name, value }) => {
				res.push({
					name: getCombinationName<TargetProps>(categories[i], lastCombinationWord.name, name),
					props: {
						...lastCombinationWord.props,
						[categories[i]]: value,
					}
				});
			});
			return res;
		}, [] as Result<TargetProps>);

		cache = newCombination;
	}

	return cache;
}
