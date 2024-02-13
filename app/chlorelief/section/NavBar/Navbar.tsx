"use client";

import DesktopNav from "./NavView/DesktopNav";

export default function Navbar() {
  const links = [
    {
      text: "Home",
      href: "#home",
      hover: " hover:text-chlorelief-soft-green ease-in-out duration-300",
    },
    {
      text: "Products",
      href: "#product",
      hover: " hover:text-chlorelief-soft-green ease-in-out duration-300",
    },
    {
      text: "About Us",
      href: "#about",
      hover: " hover:text-chlorelief-soft-green ease-in-out duration-300",
    },
    {
      text: "Contacts",
      href: "#contact",
      hover: " hover:text-chlorelief-soft-green ease-in-out duration-730",
    },
  ];

  //Jsx Structure
  return (
    <>
      <nav className="bg-chlorelief-springwood font-inter text-white text-Caption-Desktop pt-8 ">
        <DesktopNav links={links} />
      </nav>
    </>
  );
}
