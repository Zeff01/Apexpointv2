import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./Navigation";

interface SmallNavsProps {
  nav: boolean;
  apexLogo: StaticImageData;
  chloreliefLogo: StaticImageData;
  lubieLogo: StaticImageData;
}

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

const SmallNavs: React.FC<SmallNavsProps> = ({
  nav,
  apexLogo,
}) => {
  return (
    <div
      className={
        nav
          ? "fixed left-0 top-0 w-1/2 max-w-[250px] shadow-2xl h-full border-r bg-white ease-in-out duration-500"
          : "fixed left-[-100%] top-0 h-full ease-in-out duration-500"
      }
    >
      <div className="pt-7 px-5">
        <Image className="h-8 w-auto" src={apexLogo} alt="apexpoint" />
      </div>
      <ul className="w-full mt-10">
        {navLinks.map((link) => (
          <li className="w-full" key={link.href}>
            <Link className="bg-zinc-100 hover:bg-zinc-300 flex w-full border border-zinc-200 px-6 py-4 font-semibold" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallNavs;
