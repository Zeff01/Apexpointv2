import React, { FunctionComponent, SVGProps } from 'react';

type TSVGElementProps = SVGProps<SVGSVGElement> & {
	className?: string;
};

const ArrowRightIcon: FunctionComponent<TSVGElementProps> = props => {
	return (
		<svg
			width={13}
			height={14}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="m3.689 12.132 1.534 1.37 7.277-6.5-7.277-6.5-1.534 1.37 4.658 4.161H.5v1.939h7.847l-4.658 4.16Z"
				fill="#757575"
			/>
		</svg>
	);
};

export default ArrowRightIcon;
