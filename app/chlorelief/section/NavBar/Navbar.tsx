"use client";

import DesktopNav from "./NavView/DesktopNav";
import Mobilenav from "@/components/sections/Mobilenav/page";

export default function Navbar() {
  const links = [
    {
      text: "Home",
      href: "#home",
      hover:
        " flex flex-col py-2 hover:text-green-400 duration-730 sm:flex-row",
    },
    {
      text: "Products",
      href: "#product",
      hover:
        " flex flex-col py-2 hover:text-green-400 duration-730 sm:flex-row",
    },
    {
      text: "About Us",
      href: "#about",
      hover:
        " flex flex-col py-2 hover:text-green-400 duration-730 sm:flex-row",
    },
    {
      text: "Contacts",
      href: "#contact",
      hover:
        " flex flex-col py-2 hover:text-green-400 duration-730 sm:flex-row",
    },
  ];

  //Jsx Structure
  return (
    <>
      <nav className="bg-chlorelief-springwood font-inter  text-gray-700 flex justify-center text-Body-Desktop pt-8 z-[99999] md:text-white ">
        <DesktopNav links={links} />
        <Mobilenav links={links} variant="Chlorelief" />
      </nav>
    </>
  );
}
