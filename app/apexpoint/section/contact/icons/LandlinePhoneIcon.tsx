import React, { FunctionComponent, SVGProps } from 'react';

type TSVGElementProps = SVGProps<SVGSVGElement> & {
	className?: string;
};

const LandlinePhoneIcon: FunctionComponent<TSVGElementProps> = props => {
	return (
		<svg
			width={40}
			height={30}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M30.964 16.25c-.823-.618-2.153-.618-2.976 0l-3.355 2.516c-1.555-.348-4.457-1.137-6.297-2.516-1.84-1.38-2.892-3.557-3.355-4.723l3.355-2.516c.823-.617.823-1.615 0-2.232L9.918.465c-.823-.617-2.153-.617-2.976 0L1.234 4.746c-.8.6-1.25 1.424-1.234 2.265C.05 9.26.842 17.066 9.046 23.218c8.204 6.153 18.614 6.747 21.613 6.784h.059c1.111 0 2.161-.328 2.957-.924l5.708-4.281c.823-.617.823-1.615 0-2.232l-8.419-6.315Zm-.267 10.594c-2.627-.033-11.614-.562-18.675-5.86C4.938 15.673 4.252 8.909 4.21 6.979l4.22-3.165 5.442 4.082-2.721 2.04c-.503.377-.718.92-.572 1.44.05.182 1.285 4.486 4.78 7.107 3.493 2.62 9.232 3.546 9.474 3.584.701.112 1.419-.05 1.92-.428l2.723-2.04 5.443 4.081-4.222 3.165Z"
				fill="#535353"
			/>
		</svg>
	);
};

export default LandlinePhoneIcon;