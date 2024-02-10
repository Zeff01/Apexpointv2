import React from "react";
import goBackImg from "@/public/assets/Back.png";
import Image from "next/image";;
import  Link  from "next/link";
//import MobileNav from "@/app/chlorelief/components/Navbar/NavView/MobileNav";
import { useState } from "react";
const links = [
  { text: "Home", href: "#home",hover:"flex flex-col items-start px-10 mb-4 text-blue-700 hover:text-blue-200 ease-in-out duration-700"},
  { text: "Products", href: "#product",hover:"flex flex-col items-start px-10 mb-4 text-blue-700 hover:text-blue-200 ease-in-out duration-700" },
  { text: "About Us", href: "#about",hover:"flex flex-col items-start px-10 mb-4 text-blue-700 hover:text-blue-200 ease-in-out duration-700" },
  { text: "Contacts", href: "#contact",hover:"flex flex-col items-start px-10 mb-4 text-blue-700 hover:text-blue-200 ease-in-out duration-700" },
];
const BackBtn = () => {
    const [navMenu, setNavMenu] = useState<boolean>(false);
  return (
    <main className="flex bg-lubie-navy-blue white  items-center justify-between -z-0">
    <Link href='/' className=" flex items-center gap-2 pt-2 sm:px-20 sm:gap-4 lg:pt-10">
      <Image src={goBackImg} alt="Go back to Apexpoint" />
      <p className="text-sm text-chlorelief-light-red sm:text-lg">Back to Apexpoint</p>
    </Link>
   {/* <MobileNav navMenu={navMenu} setNavMenu={setNavMenu} links={links} /> */} {/* to fix the imported file module */}
    </main>
  );
};
export default BackBtn;