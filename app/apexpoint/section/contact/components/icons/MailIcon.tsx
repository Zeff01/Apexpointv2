import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const CheckIcon: FunctionComponent<TSVGElementProps> = (props) => {
  return (
    <svg
      width={30}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27 .502H3c-1.655 0-3 1.402-3 3.125v18.75c0 1.724 1.345 3.125 3 3.125h24c1.654 0 3-1.401 3-3.125V3.627c0-1.723-1.346-3.125-3-3.125Zm0 3.125v.799l-12 9.723L3 4.427v-.8h24ZM3 22.377V8.384l11.079 8.976a1.453 1.453 0 0 0 1.842 0L27 8.384l.003 13.993H3Z"
        fill="#535353"
      />
    </svg>
  );
};

export default CheckIcon;
