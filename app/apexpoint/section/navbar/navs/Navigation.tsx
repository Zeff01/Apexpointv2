import React from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

const Navigation: React.FC = () => {
  return (
    // <div className="fixed top-0 p-4">
    <ul className="hidden md:flex gap-10">
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link className="font-semibold" href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
    // {/* </div> */}
  );
};

export default Navigation;
