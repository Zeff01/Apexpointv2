import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const LoadIcon: FunctionComponent<TSVGElementProps> = (props) => {
  return (
    <svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.365 2.5a7.5 7.5 0 1 0 7.5 7.5"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LoadIcon;
