import React, { FunctionComponent, SVGProps } from 'react';

type TSVGElementProps = SVGProps<SVGSVGElement> & {
	className?: string;
};

const MobilePhoneIcon: FunctionComponent<TSVGElementProps> = props => {
	return (
		<svg
			width={24}
			height={31}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.9 2.377H5.1c-.61 0-1.195.198-1.626.55-.432.351-.674.828-.674 1.325v22.5c0 .498.242.975.674 1.326.431.352 1.016.55 1.626.55h13.8c.61 0 1.195-.198 1.626-.55.432-.351.674-.828.674-1.326v-22.5c0-.497-.242-.974-.674-1.325-.431-.352-1.016-.55-1.626-.55ZM5.1.502c-1.22 0-2.39.396-3.253 1.099C.985 2.304.5 3.258.5 4.252v22.5c0 .995.485 1.949 1.347 2.652.863.703 2.033 1.098 3.253 1.098h13.8c1.22 0 2.39-.395 3.253-1.098.862-.703 1.347-1.657 1.347-2.652v-22.5c0-.994-.485-1.948-1.347-2.651C21.29.898 20.12.502 18.9.502H5.1Z"
				fill="#535353"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 26.752c.61 0 1.195-.197 1.627-.549.43-.351.673-.828.673-1.326 0-.497-.242-.974-.674-1.325-.43-.352-1.016-.55-1.626-.55-.61 0-1.195.198-1.626.55-.431.351-.674.828-.674 1.325 0 .498.243.975.674 1.326.431.352 1.016.55 1.626.55Z"
				fill="#535353"
			/>
		</svg>
	);
};

export default MobilePhoneIcon;
