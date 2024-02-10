import React from "react";
import goBackImg from "@/public/assets/Back.png";
import Image from "next/image";
// import MobileNav from "../NavView/MobileNav";
import { useState } from "react";
import  Link  from "next/link";


const links = [
  { text: "Home", href: "#home",hover:" text-chlorelief-dark-green hover:text-chlorelief-soft-green ease-in-out duration-700"},
  { text: "Products", href: "#product",hover:"text-chlorelief-dark-green hover:text-chlorelief-soft-green ease-in-out duration-700" },
  { text: "About Us", href: "#about",hover:" text-chlorelief-dark-green hover:text-chlorelief-soft-green ease-in-out duration-700" },
  { text: "Contacts", href: "#contact",hover:" text-chlorelief-dark-green hover:text-chlorelief-soft-green ease-in-out duration-700" },
];


const GoBackBtn = () => {

  const [navMenu, setNavMenu] = useState<boolean>(false);
  return (
    <main className="flex bg-chlorelief-springwood items-center justify-between py-5 sticky ">
    <Link href='/' className=" flex items-center gap-2 pt-2 sm:px-20 sm:gap-4 lg:pt-10">
      <Image src={goBackImg} alt="Go back to Apexpoint" />
      <p className="text-white text-Caption-Mobile sm:text-Caption-Desktop font-inter">Back to Apexpoint</p>
    </Link>
    {/* <MobileNav navMenu={navMenu} setNavMenu={setNavMenu} links={links} /> */}
    </main>
  );
};

export default GoBackBtn;
