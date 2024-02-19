import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const CheckIcon: FunctionComponent<TSVGElementProps> = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.865.5c-1.35 0-2.6.338-3.75 1.012A7.563 7.563 0 0 0 1.378 4.25 7.278 7.278 0 0 0 .365 8c0 1.35.338 2.6 1.013 3.75a7.563 7.563 0 0 0 2.737 2.738 7.278 7.278 0 0 0 3.75 1.012c1.35 0 2.6-.338 3.75-1.012a7.563 7.563 0 0 0 2.738-2.738A7.278 7.278 0 0 0 15.365 8c0-1.35-.337-2.6-1.012-3.75a7.563 7.563 0 0 0-2.738-2.737A7.278 7.278 0 0 0 7.865.5Zm-.937 11.588L2.84 8.15l1.35-1.763 2.663 3.188 5.137-5.212L13.34 6.2l-6.412 5.888Z"
        fill="#fff"
      />
    </svg>
  );
};

export default CheckIcon;
