"use client";

import React from "react";
import DesktopNav from "@/app/chlorelief/section/NavBar/NavView/DesktopNav";
import Mobilenav from "@/components/sections/Mobilenav/page";

export default function Navbar() {
  // State for controlling the mobile menu
  const links = [
    {
      text: "Home",
      href: "#home",
      hover: "text-white hover:text-blue-400 ease-in-out duration-700",
    },
    {
      text: "Products",
      href: "#product",
      hover: "text-white hover:text-blue-400 ease-in-out duration-700",
    },
    {
      text: "About Us",
      href: "#about",
      hover: "text-white hover:text-blue-400 ease-in-out duration-700",
    },
    {
      text: "Contacts",
      href: "#contact",
      hover: "text-white hover:text-blue-400 ease-in-out duration-700",
    },
  ];
  return (
    <main className="h-f">
      <nav className="bg-lubie-navy-blue font-mono sticky hover:text-blue-400 ease-in-out duration-700">
        <DesktopNav links={links} />
      </nav>
    </main>
  );
}
