import React, { FunctionComponent } from 'react';
import { useField } from 'formik';

export type InputProps = {
	label: string;
	type: string;
	name: string;
	id: string;
	placeholder: string;
};

const TextInput: FunctionComponent<InputProps> = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label
				className="absolute left-5 top-[-.7rem] z-10 bg-white py-1 px-2 text-xs text-[#787878]"
				htmlFor={props.id || props.name}>
				{meta.touched && meta.error ? (
					<span className="text-apexpoint-dark-orange">*{meta.error}</span>
				) : (
					<span>{label}</span>
				)}
			</label>
			<input
				className="absolute left-0 top-0 z-[1] h-full w-full rounded-lg border-[1.5px] border-solid border-black bg-white p-6 text-xs focus:border-apexpoint-green focus:outline-none"
				autoComplete="off"
				{...field}
				{...props}
			/>
		</>
	);
};

export default TextInput;
