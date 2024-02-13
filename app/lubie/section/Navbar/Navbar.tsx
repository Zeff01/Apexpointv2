"use client";

import React, { useState } from "react";
import DesktopNav from "@/app/chlorelief/section/NavBar/NavView/DesktopNav";

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
    {
      text: "Apexpoint",
      href: "#apexpoint",
      hover: "text-white hover:text-blue-400 ease-in-out duration-700",
    },
    {
      text: "Chlorelief",
      href: "#chlorelief",
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
