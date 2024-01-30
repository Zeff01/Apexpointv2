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
    { text: "Home", href: "#home" },
    { text: "Products", href: "#product" },
    { text: "About Us", href: "#about" },
    { text: "Contacts", href: "#contact" },
  ];

  //Jsx Structure
  return (
    <main className="h-f">
    <GoBackBtn />
    <nav className="bg-chlorelief-springwood font-mono sticky">
      <DesktopNav links={links} />
    </nav>
    </main>
  );
}
