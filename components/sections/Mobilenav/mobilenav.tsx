'use client';

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { BiSolidLeftArrow } from 'react-icons/bi';
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

interface MobileNavProps {
  variant?: 'lubie' | 'chlorelief' | 'apex'; // Define variant prop
}

const Mobilenav: React.FC<MobileNavProps> = ({ variant }) => {
  const [nav, setNav] = useState(false);

  let backgroundClass;
  let hamburgerColor;
  let textcolor;
  switch (variant) {
    case 'lubie':
      backgroundClass = 'bg-lubie-nav-blue';
      hamburgerColor = 'text-white';
      textcolor = 'text-lubie-dark-blue';
      break;
    case 'chlorelief':
      backgroundClass = 'bg-chlorelief-star-green';
      hamburgerColor = 'text-white';
      textcolor = 'text-chlorelief-springwood';
      break;
    case 'apex':
      backgroundClass = 'bg-apexpoint-nav-orange';
      hamburgerColor = ' text-gray-800';
      textcolor = 'text-gray-800';
      break;
    default:
      backgroundClass = 'bg-white';
  }

  return (
    <>
      <button
        className={`flex md:hidden ${hamburgerColor} fixed right-5  ${variant === `apex` ? `top-5` : `top-2`}  z-[60]`}
        onClick={() => setNav(!nav)}
      >
        <Hamburger toggled={nav} toggle={setNav} />
      </button>
      <div
        className={
          nav
            ? `fixed right-0 top-0 w-1/2 max-w-[250px] shadow-2xl h-full border-r ${backgroundClass} flex flex-col justify-between  ease-in-out duration-500 z-[70]`
            : 'fixed right-[-100%] top-0 h-full ease-in-out duration-500 z-[70] flex flex-col justify-between'
        }
      >
        <div
          onClick={() => setNav(!nav)}
          className={`cursor-pointer absolute right-5 top-4 ${variant === `chlorelief` ? textcolor : textcolor}`}
        >
          <Hamburger toggled={nav} toggle={setNav} />
        </div>

        <ul className={`w-full mt-20 text-xl  ${textcolor}`}>
          {navLinks.map((link) => (
            <li className="w-full" key={link.href}>
              <Link className=" hover:bg-zinc-100 flex w-full font-bold px-6 py-4 " href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`${textcolor} px-6 py-6 mb-11 text-2xl font-bold`}>
          {variant === 'apex' ? (
            <>
              <Link className="flex items-center mb-5" href="/chlorelief">
                <BiSolidLeftArrow /> <p className="ml-3 ">CHLORELIEF</p>
              </Link>
              <Link className="flex items-center mb-5" href="/lubie">
                <BiSolidLeftArrow /> <p className="ml-3 ">LUBIE</p>
              </Link>
            </>
          ) : variant === 'lubie' ? (
            <>
              <Link className="flex items-center mb-5" href="/">
                <BiSolidLeftArrow /> <p className="ml-3">APEXPOINT</p>
              </Link>
              <Link className="flex items-center mb-5" href="/chlorelief">
                <BiSolidLeftArrow /> <p className="ml-3">CHLORELIEF</p>
              </Link>
            </>
          ) : (
            <>
              <Link className="flex items-center mb-5" href="/">
                <BiSolidLeftArrow /> <p className="ml-3 ">APEXPOINT</p>
              </Link>
              <Link className="flex items-center mb-5" href="/lubie">
                <BiSolidLeftArrow /> <p className="ml-3">LUBIE</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobilenav;