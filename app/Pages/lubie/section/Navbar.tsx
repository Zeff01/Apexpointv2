'use client'
// Navbar.js
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks  from "../components/Navlinks";
import Hamburger from "../components/Hamburger";

// Navbar Component
export default function Navbar() {
  // State for controlling the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);


  // JSX structure for the Navbar
  return (
    <main className="Navbar fixed w-full h-16 bg-lubie-gray-white text-lubie-dark-blue overflow-hidden font-semibold pt-0 z-50 top-0">
      <div className="wrapper flex items-center justify-between md:justify-around">
        {/* Left Section - Logo */}
        <div className="left grow-2 items-center justify-start">
          {/* Wrap the anchor tag with Link */}
          <Link href="/" className="logo text-2xl font-bold w-auto text-yellow-400">
       
          <Image
                src="/assets/lubie-logo.png"
                width="110"
                height="100"
                alt=""
                className="flex md:hidden "
               
            />

            <Image
                src="/assets/lubie-logoname.png"
                width="130"
                height="100"
                alt=""
                className="hidden md:flex "
            />
          </Link>
        </div>

        {/* Middle Section - Navigation Links */}
        <Navlinks/>


        {/* Right Section - Hamburger Menu */}
       <Hamburger/>
      </div>
    </main>
  );
}
