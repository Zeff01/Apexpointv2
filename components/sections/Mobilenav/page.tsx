import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link"; // Assuming you're using Next.js for routing

interface MobileNavProps {
  links: { text: string; href: string; hover: string }[];
  variant?: "Lubie" | "Chlorelief"; // Define variant prop
}

const MobileNav: React.FC<MobileNavProps> = ({ links, variant = "blue" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed right-5 top-5 z-50 sm:hidden text-gray-300`}>
      <button className={`text-inherit`} onClick={handleClick}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
      <div
        className={`fixed left-0 top-0 h-screen ${variant === "Lubie" ? "bg-sky-400" : "bg-green-400"} shadow-lg w-auto px-10 z-[99999] transition-all duration-300 pt-8 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {links.map((link, index) => (
          <Link className={link.hover} href={link.href} key={index}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
