"use client";
// Navbar.js
import React, { useState } from "react";
import DesktopNav from "@/app/chlorelief/components/Navbar/NavView/DesktopNav";
import BackBtn from "../components/backbtn";
// Navbar Component
export default function Navbar() {
  // State for controlling the mobile menu
  const links = [
    { text: "Home", href: "#home",hover:"text-white hover:text-blue-400 ease-in-out duration-700" },
    { text: "Products", href: "#product",hover:"text-white hover:text-blue-400 ease-in-out duration-700" },
    { text: "About Us", href: "#about",hover:"text-white hover:text-blue-400 ease-in-out duration-700" },
    { text: "Contacts", href: "#contact",hover:"text-white hover:text-blue-400 ease-in-out duration-700" },
  ];
  return (
      <main className="h-f">
        <BackBtn />
        <nav className="bg-lubie-navy-blue font-mono sticky hover:text-blue-400 ease-in-out duration-700">
          <DesktopNav links={links} />
        </nav>
        </main>
      );
    }