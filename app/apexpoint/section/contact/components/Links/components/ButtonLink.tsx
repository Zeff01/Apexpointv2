import Link from "next/link";
import React from "react";
import ArrowRightIcon from "../../icons/ArrowRightIcon";

interface ButtonLink {
  link: string;
  linkText: string;
}

const ButtonLink: React.FC<ButtonLink> = ({ link, linkText }) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center text-sm duration-300 ease-in group-hover:translate-x-1 gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{linkText}</span>
      <ArrowRightIcon />
    </Link>
  );
};

export default ButtonLink;
