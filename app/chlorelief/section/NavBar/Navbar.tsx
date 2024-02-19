"use client";

import DesktopNav from "./NavView/DesktopNav";
import Mobilenav from "@/components/sections/Mobilenav/page";

export default function Navbar() {
  const links = [
    {
      text: "Home",
      href: "#home",
      hover:
        "flex flex-col py-2hover:text-chlorelief-soft-green ease-in-out duration-300 sm:flex-row",
    },
    {
      text: "Products",
      href: "#product",
      hover:
        "flex flex-col py-2 hover:text-chlorelief-soft-green ease-in-out duration-300 sm:flex-row",
    },
    {
      text: "About Us",
      href: "#about",
      hover:
        "flex flex-col py-2 hover:text-chlorelief-soft-green ease-in-out duration-300 sm:flex-row",
    },
    {
      text: "Contacts",
      href: "#contact",
      hover:
        " flex flex-col py-2 hover:text-chlorelief-soft-green ease-in-out duration-730 sm:flex-row",
    },
  ];

  //Jsx Structure
  return (
    <>
      <nav className="bg-chlorelief-springwood font-inter  text-black flex justify-center text-Body-Desktop font-bold pt-8 z-[99999] ">
        <DesktopNav links={links} />
        <Mobilenav links={links} />
      </nav>
    </>
  );
}
