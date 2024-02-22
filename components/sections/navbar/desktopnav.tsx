import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Dropdown from '@/components/sections/navbar/dropdown';

// image
import apexLogo from '@/public/assets/apex-assets/apexpoint-name.png';

interface DesktopNavProps {
  title: string;
}

interface NavLink {
  href: string;
  label: string;
}

{
  /*Links for the navbar */
}
const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

const DesktopNav: React.FC<DesktopNavProps> = ({ title }) => {
  return (
    <nav className="font-share font-bold shadow-lg md:shadow-md flex w-full justify-between items-center sm:px-12 px-3 py-4">
      <div className="flex items-center gap-2">
        {title === 'Apexpoint' ? (
          <Image className="h-8 w-auto filter" src={apexLogo} alt="apexpoint" />
        ) : (
          <div className="hidden md:flex">
            <Link href="/">
              <Image
                className="h-8 w-auto filter hover:opacity-80 hover:scale-105 duration-200"
                src={apexLogo}
                alt="apexpoint"
              />
            </Link>
          </div>
        )}
        {title === 'Apexpoint' ? (
          <div className="h-9 hidden md:flex border-black border-l-2 pl-2 flex-col justify-center">
            <Link className="hover:opacity-80 hover:scale-105 duration-200 " href="/chlorelief">
              <h2>Chlorelief</h2>
            </Link>
            <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/lubie">
              <h2>Lubie</h2>
            </Link>
          </div>
        ) : (
          <div className="border-l-2 pl-2">
            <h2 className="text-3xl">{title}</h2>
          </div>
        )}
      </div>
      <ul className="hidden md:flex gap-5">
        {navLinks.map((link) =>
          link.label === 'Products' && title === 'Apexpoint' ? (
            <Dropdown />
          ) : (
            <li key={link.href} className="hover:opacity-65 duration-200">
              <Link className="font-semibold" href={link.href}>
                {link.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};
export default DesktopNav;
