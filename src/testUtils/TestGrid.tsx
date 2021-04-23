import type { ElementType } from "react";

import { Flex, FlexAlign, FlexDirection, FlexJustify } from "../components/atoms/Flex/Flex";

import type { PropCombination } from "./propCartesianProduct";
import { propCartesianProduct } from "./propCartesianProduct";
import { SEQUENCE_CLASSNAME, DESCRIPTION_CLASSNAME } from "./takeScreenshots";

export function TestGrid<ComponentType extends ElementType>({
	propsVariations,
	Component,
}: {
	propsVariations: PropCombination<React.ComponentProps<ComponentType>>;
	Component: React.ElementType;
}) {
	const propsCombinations = propCartesianProduct<React.ComponentProps<any>>(propsVariations);

	return (
		<Flex 
			direction={ FlexDirection.COLUMN } 
			alignItems={ FlexAlign.START }
		>
			{
				propsCombinations.map(({ name, props }, i) => {
					return (
						<Flex 
							key={ `${name}` }
							className={ SEQUENCE_CLASSNAME }
							justifyContent={ FlexJustify.END }
							style={ { 
								padding: 20,
								borderBottom: "1px dashed black",
							} }	
						>
							<div>
								<Component { ...props }/>
							</div>
							<div 
								className={ DESCRIPTION_CLASSNAME }
								style={ {
									marginLeft: 30,
								} }
							>
								{ name }
							</div>
						</Flex>
					);
				})
			}
		</Flex>
	);
}
