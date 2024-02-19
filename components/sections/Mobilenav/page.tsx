import React, { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link"; // Assuming you're using Next.js for routing

interface MobileNavProps {
  links: { text: string; href: string; hover: string }[];
}

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-2 top-5  sm:hidden">
      <button className="text-white" onClick={handleClick}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
      <div
        className={`fixed left-0 top-0 h-screen bg-white shadow-lg w-auto px-10 z-[9999] transition-all duration-300 pt-8 ${
          isOpen ? "translate-x-0 ]" : "-translate-x-full "
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
