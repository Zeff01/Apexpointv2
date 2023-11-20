"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
// import { motion } from "framer-motion";
import { BsPerson, BsCart3 } from "react-icons/bs";
export default function Navbar() {
  //state for mobile menu
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const openNav = () => {
    setNavMenu(true);
  };
  const closeNav = () => {
    setNavMenu(false);
  };
  const linkNav = [
    { link: <Link href="#home">HOME</Link> },
    { link: <Link href="#products">PRODUCTS</Link> },
    { link: <Link href="#about">ABOUT</Link> },
    { link: <Link href="#contacts">CONTACT</Link> },
  ];
  {
    /* Logic for Menu on mobile Animation */
  }
  const menuVariant = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
      ease: [0.13, 0, 0.4, 0],
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: [0.24, 1, 0.4, 1],
      },
    },
  };
  return (
    <header className="bg-chlorelief-green font-mono ">
      {/* Desktop view */}
      <div className="md:block py-3 hidden">
        <div className="flex justify-around items-center">
          <Image
            src={`/assets/chloLogo.png`}
            alt="Chlorelief Logo"
            width={120}
            height={50}
            className="hover:shadow-sm"
            priority
          />
          <ul className="flex gap-4 font-bold text-2xl ">
            {linkNav.map((nav, navKey) => (
              <li
                className="text-slate-800 hover:text-green-500 ease-in-out duration-700"
                key={navKey}
              >
                {nav.link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col px-10 md:hidden lg:hidden w-full ">
        <div className="flex flex-row justify-between">
          <Image
            src={`/assets/chloLogo.png`}
            alt="chlorelief logo"
            width={90}
            height={55}
            className=" hover:shadow-sm"
          />
          {/* Mobile menu burger design */}
          <div
            className=" rounded-md border-slate-500 bg-white flex justify-between items-center flex-col w-[26px] py-2 my-2"
            onClick={openNav}
          >
            <span className="w-[30px] h-[3px] bg-black block mt-1"></span>
            <span className="w-[30px] h-[3px] bg-black block mt-1"></span>
            <span className="w-[30px] h-[3px] bg-black block mt-1"></span>
          </div>
          {/* Menu Container  */}
          {navMenu && (
            <motion.div
              variants={menuVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full fixed bg-chlorelief-green font-medium text-[25px] z-[1000]"
            >
              <ul className="gap-[70px] pt-[190px]">
                {linkNav.map((mView, mKey) => (
                  <li
                    key={mKey}
                    onClick={closeNav}
                    className="flex flex-col items-center mb-4 text-chlorelief-red255 hover:text-white"
                  >
                    {mView.link}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
