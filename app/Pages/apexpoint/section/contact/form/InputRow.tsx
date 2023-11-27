import React, { FunctionComponent, ReactNode } from 'react';

export type InputRowProps = {
	children: ReactNode;
	className?: string;
};

const InputRow: FunctionComponent<InputRowProps> = ({
	children,
	className,
}) => {
	return <div className={`relative h-16 w-full ${className}`}>{children}</div>;
};

export default InputRow;
