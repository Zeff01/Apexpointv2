'use client'
// Navbar.js
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";

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
                className="flex md:hidden hover:shadow-sm "
               
            />

            <Image
                src="/assets/lubie-logoname.png"
                width="130"
                height="100"
                alt=""
                className="hidden md:flex hover:shadow-sm "
            />
          </Link>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="middle  grow-1 items-center justify-center pt-7 hidden md:flex">
          {/* Individual navigation links */}
          {/* Hidden on small screens (md:block) */}
          <div className="itemContainer flex items-center justify-center mr-12">
          <Link href="" className="text-sm hidden md:block hover:font-bold shadow-sm transition-color duration-300">
              Home
            </Link>
          </div>
          <div className="itemContainer flex items-center justify-center mr-12">
          <Link href="" className="text-sm hidden md:block hover:font-bold shadow-sm transition-color duration-300">
              Products
            </Link>
          </div>
          <div className="itemContainer flex items-center justify-center mr-12">
         <Link href="" className="text-sm hidden md:block hover:font-bold shadow-sm transition-color duration-300">
              About Us
            </Link>
          </div>
          <div className="itemContainer flex items-center justify-center mr-12">
          <Link href="" className="text-sm hidden md:block hover:font-bold shadow-sm transition-color duration-300">
              Contact Us
            </Link>
          </div>
        </div>


        {/* Right Section - Hamburger Menu */}
        <div className="right">
          {/* Hamburger menu icon */}
          {/* Mobile menu appears on click */}
          <div
            className="hamburger cursor-pointer mb-12 md:cursor-none "
            onClick={() => {setMenuOpen(!menuOpen);}}>
            {/* Mobile menu content */}
            <div className={`fixed top-0 w-[50%] h-screen bg-lubie-gray-white text-lubie-dark-blue flex items-center justify-center ease-in duration-500 z-50  ${menuOpen ?  "left-0" : "left-[-100%]"}`}>
              <div className="flex flex-col items-center">
                {/* Mobile menu links */}
                <Link
                  href="/"
                  className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
                  onClick={() => {
                    setMenuOpen(!menuOpen);}}>
                  Home
                </Link>

                <Link
                  href="#products"
                  className=" text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
                  onClick={() => setMenuOpen(false)}>
                  Products
                </Link>

                <Link
                  href="#about"
                  className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
                  onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>

                <Link
                  href="#contact"
                  className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
                  onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Hamburger icon toggle */}
            {menuOpen ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-11 h-12 md:hidden hover:font-bold transition-color duration-1000 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className=" w-11 h-12 md:hidden hover:font-bold transition-color duration-1000"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
