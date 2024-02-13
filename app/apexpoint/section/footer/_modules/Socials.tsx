import React from "react";
import {
  SocialsData,
  socialsData,
} from "@/components/data/apexpoint/socialsData";
import Link from "next/link";

type SocialsProps = {
  className?: string;
  iconColor?: string;
};

const Socials: React.FC<SocialsProps> = ({ className, iconColor }) => {
  const containerClassName = `flex gap-5 ${className || ""}`;

  return (
    <ul className={containerClassName}>
      {socialsData.map((item: SocialsData, index) => (
        <li key={index}>
          <Link
            className={`text-apexpoint-grey-text ${iconColor || ""}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
