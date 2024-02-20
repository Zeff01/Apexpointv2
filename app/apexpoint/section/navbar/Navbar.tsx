'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// img
import apexLogo from '@/public/assets/apex-assets/apexpoint-name.png';
import chloroLogo from '@/public/assets/chlorelief-assets/chlorelief-logo.png';
import lubieLogo from '@/public/assets/lubie-assets/lubie-name.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

// component
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [productsDropDown, setProductsDropDown] = useState<boolean>(false);

  interface NavLink {
    href: string;
    label: string;
  }

  const navLinks: NavLink[] = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg md:shadow-md sticky top-0 flex w-full justify-between items-center px-12 py-4 z-50">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image className="h-10 w-auto hover:opacity-80 hover:scale-105 duration-200" src={apexLogo} alt="apexpoint" />
        </Link>
        <div className="border-l-2 pl-2 flex flex-col items-start gap-2">
          <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/chlorelief">
            <Image className="h-6 w-auto" src={chloroLogo} alt="chlorelief" />
          </Link>
          <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/lubie">
            <Image className="h-6 w-auto object-contain" src={lubieLogo} alt="lubie" />
          </Link>
        </div>
      </div>
      <div onClick={() => setNav(!nav)} className="cursor-pointer block md:hidden z-[40]">
        <RxHamburgerMenu size={30} />
      </div>

      {/* //DESKTOP VIEW */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:opacity-65 duration-200">
            <Link className="font-semibold" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* //MOBILE VIEW */}
      <div
        className={
          nav
            ? 'fixed right-0 top-0 w-1/2 max-w-[250px] shadow-2xl h-full border-r bg-white ease-in-out duration-500 z-50'
            : 'fixed right-[-100%] top-0 h-full ease-in-out duration-500 z-50'
        }
      >
        <div className="pt-7 px-5 relative">
          <Image className="h-8 w-auto" src={apexLogo} alt="apexpoint" />
          <div onClick={() => setNav(!nav)} className="cursor-pointer absolute right-5 top-7">
            <IoCloseOutline size={30} />
          </div>
        </div>
        <ul className="w-full mt-10">
          {navLinks.map((link) => (
            <li className="w-full" key={link.href}>
              <Link className=" hover:bg-zinc-100 flex w-full border-y  px-6 py-4 font-semibold" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
