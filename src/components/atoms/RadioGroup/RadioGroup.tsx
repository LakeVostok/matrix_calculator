import { createContext, useMemo, memo, useContext } from "react";

import { getInputName } from "../../../utils/getInputName";
import { noop } from "../../../utils/noop";
import { Radio as OriginalRadio } from "../Radio/Radio";

interface IRadioGroupContext {
	value: string;
	name: string;
	onChange: (value: string) => void;
}

const RadioGroupContext = createContext<IRadioGroupContext>({
	value: "",
	name: "",
	onChange: noop,
});

function RadioGroupInternal({
	value,
	children,
	onChange,
}: {
	value: string;
	children: React.ReactNode;
	onChange: (value: string) => void;
}) {
	const currentName = useMemo(getInputName, []);

	const ctx = useMemo<IRadioGroupContext>(() => {
		return {
			value,
			name: currentName,
			onChange,
		};
	}, [currentName, onChange, value]);

	return (
		<RadioGroupContext.Provider value={ ctx }>
			{ children }
		</RadioGroupContext.Provider>
	);
}

function RadioInternal({
	value,
	children,
}: {
	value: string;
	children: React.ReactNode;
}) {
	const ctx = useContext(RadioGroupContext);

	return (
		<OriginalRadio 
			value={ value } 
			name={ ctx.name }
			isChecked={ value === ctx.value }
			onChange={ ctx.onChange }
		>
			{children}
		</OriginalRadio>
	);
}

export const RadioGroup = memo(RadioGroupInternal);
export const Radio = memo(RadioInternal);
