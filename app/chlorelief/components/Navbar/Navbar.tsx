"use client";

import React, { useState } from "react";
import chloreliefLogo from "@/public/assets/chlorelief-logo.png";
import MobileNav from "./NavView/MobileNav";
import DesktopNav from "./NavView/DesktopNav";
import GoBackBtn from "./GoBackBtn/GoBackBtn";

export default function Navbar() {
  //state for mobile menu
  const [navMenu, setNavMenu] = useState<boolean>(false);

  const links = [
    { text: "Home", href: "#home",hover:"text-white hover:text-chlorelief-soft-green ease-in-out duration-700" },
    { text: "Products", href: "#product",hover:"text-white hover:text-chlorelief-soft-green ease-in-out duration-700" },
    { text: "About Us", href: "#about",hover:"text-white hover:text-chlorelief-soft-green ease-in-out duration-700" },
    { text: "Contacts", href: "#contact",hover:"text-white hover:text-chlorelief-soft-green ease-in-out duration-700" },
  ];

  //Jsx Structure
  return (
    <main className="h-f">
    <GoBackBtn />
    <nav className="bg-chlorelief-springwood font-mono hover:text-chlorelief-soft-green ease-in-out duration-700">
      <DesktopNav links={links} />
    </nav>
    </main>
  );
}
