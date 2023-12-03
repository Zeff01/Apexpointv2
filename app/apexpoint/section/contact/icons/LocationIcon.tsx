import React, { FunctionComponent, SVGProps } from 'react';

type TSVGElementProps = SVGProps<SVGSVGElement> & {
	className?: string;
};

const LoadIcon: FunctionComponent<TSVGElementProps> = props => {
	return (
		<svg
			width={24}
			height={30}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M12 18.003c3.309 0 6-2.691 6-6 0-3.31-2.691-6-6-6s-6 2.69-6 6c0 3.309 2.691 6 6 6Zm0-9c1.654 0 3 1.345 3 3 0 1.654-1.346 3-3 3-1.655 0-3-1.346-3-3 0-1.655 1.345-3 3-3Z"
				fill="#535353"
			/>
			<path
				d="M11.13 29.723a1.497 1.497 0 0 0 1.74 0c.456-.322 11.173-8.06 11.13-17.72 0-6.617-5.384-12-12-12S0 5.386 0 11.995c-.043 9.667 10.674 17.406 11.13 17.728ZM12 3.003c4.963 0 9 4.036 9 9.007.031 6.657-6.582 12.634-9 14.595-2.416-1.962-9.031-7.941-9-14.602 0-4.964 4.037-9 9-9Z"
				fill="#535353"
			/>
		</svg>
	);
};

export default LoadIcon;
