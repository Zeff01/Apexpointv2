import {
  SocialsData,
  socialsData,
} from "@/app/components/data/apexpoint/socialsData";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <ul className="flex gap-5">
      {socialsData.map((item: SocialsData, index) => (
        <li key={index}>
          <Link
            className="text-apexpoint-grey-text"
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
