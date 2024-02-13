"use client";

import React, { useState } from "react";
import Image from "next/image";

// img
import apexLogo from "@/public/assets/apexpoint-name.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

// component
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

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

  return (
    <nav className="bg-white shadow-lg md:shadow-md sticky top-0 flex w-full justify-between items-center px-12 h-[8vh] z-[9999]">
      <Link href="/">
        <Image className="h-8 w-auto" src={apexLogo} alt="apexpoint" />
      </Link>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer block md:hidden z-[9999999]"
      >
        {nav ? <IoCloseOutline size={30} /> : <RxHamburgerMenu size={30} />}
      </div>

      {/* //DESKTOP VIEW */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link className="font-semibold" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* //MOBILE VIEW */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-1/2 max-w-[250px] shadow-2xl h-full border-r bg-white ease-in-out duration-500"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-500 "
        }
      >
        <div className="pt-7 px-5">
          <Image className="h-8 w-auto" src={apexLogo} alt="apexpoint" />
        </div>
        <ul className="w-full mt-10">
          {navLinks.map((link) => (
            <li className="w-full" key={link.href}>
              <Link
                className=" hover:bg-zinc-100 flex w-full border-y  px-6 py-4 font-semibold"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
