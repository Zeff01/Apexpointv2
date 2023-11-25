import React, { FunctionComponent, SVGProps } from 'react';

type TSVGElementProps = SVGProps<SVGSVGElement> & {
	className?: string;
};

const MailSendIcon: FunctionComponent<TSVGElementProps> = props => {
	return (
		<svg
			width={21}
			height={20}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M10.365 15.833H4.532a1.667 1.667 0 0 1-1.667-1.666V5.833a1.667 1.667 0 0 1 1.667-1.666h11.667a1.667 1.667 0 0 1 1.666 1.666v4.584M16.198 18.333v-5M18.698 15.833l-2.5-2.5-2.5 2.5"
				stroke="#fff"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="m2.865 5.833 7.5 5 7.5-5"
				stroke="#fff"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default MailSendIcon;
