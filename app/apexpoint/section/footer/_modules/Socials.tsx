"use client"

import React from "react";
import {
  SocialsData,
  socialsData,
} from "@/components/data/apexpoint/socialsData";
import Link from "next/link";
import {motion} from "framer-motion"
import {SocialStagger, ScaleFadeInOutLeftToRight} from "@/components/animation/animation";
type SocialsProps = {
  className?: string;
  iconColor?: string;
};

const Socials: React.FC<SocialsProps> = ({ className, iconColor }) => {
  const containerClassName = `flex gap-5 ${className || ""}`;

  return (
    <motion.ul
     variants={SocialStagger}
     initial="hidden"
     whileInView="visible"

    className={containerClassName}>
      {socialsData.map((item: SocialsData, index) => (
        <motion.li
         variants={ScaleFadeInOutLeftToRight}
        key={index}>
          
          <Link
            className={`text-apexpoint-grey-text ${iconColor || ""}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Socials;
