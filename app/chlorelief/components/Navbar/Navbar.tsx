"use client";

import React, { useState } from "react";
import chloreliefLogo from "@/public/assets/chlorelief-logo.png";
import MobileNav from "./NavView/MobileNav";
import DesktopNav from "./NavView/DesktopNav";
import Image from "next/image";
import Link from "next/link";
import Logo from "./NavView/Logo/Logo";

export default function Navbar() {
  //state for mobile menu
  const [navMenu, setNavMenu] = useState<boolean>(false);

  const links = [
    { text: "HOME", href: "#home" },
    { text: "PRODUCTS", href: "#product" },
    { text: "ABOUT", href: "#about" },
    { text: "CONTACT", href: "#contact" },
  ];

  //Jsx Structure
  return (
    <nav className="bg-chlorelief-dark-green font-mono justify-between flex flex-row w-full items-center px-[10px] h-[65px] z-[9999]">
      <Logo chloreliefLogo={chloreliefLogo} />
      <DesktopNav links={links} /> <div></div>
      <MobileNav navMenu={navMenu} setNavMenu={setNavMenu} links={links} />
    </nav>
  );
}
