import React, { FunctionComponent, SVGProps } from "react";

type TSVGElementProps = SVGProps<SVGSVGElement> & {
  className?: string;
};

const MailFailIcon: FunctionComponent<TSVGElementProps> = (props) => {
  return (
    <svg
      width={21}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.865 15.833H4.532a1.667 1.667 0 0 1-1.667-1.666V5.833a1.667 1.667 0 0 1 1.667-1.666h11.667a1.667 1.667 0 0 1 1.666 1.666v4.584"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m2.865 5.833 7.5 5 7.5-5M16.198 13.333v2.5M16.198 18.333v.009"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailFailIcon;
