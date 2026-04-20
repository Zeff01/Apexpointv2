import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Dropdown from '@/components/sections/navbar/dropdown';

interface DesktopNavProps {
  title: string;
}

interface NavLink {
  href: string;
  label: string;
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
      {/* LEFT SIDE */}
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          <Link href="/" className="flex items-center">
            {/* ICON (never changes) */}
            <Image
              src="/assets/apex-assets/apexpoint-logo.png"
              alt="apex icon"
              width={32}
              height={32}
              className="h-8 w-auto"
            />

            {/* TEXT (can invert) */}
            <Image
              src="/assets/apex-assets/apexpoint-name.png"
              alt="apex text"
              width={100}
              height={32}
              className={`h-6 w-auto ${title !== 'Apexpoint' ? 'invert' : ''} transition duration-200`}
            />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <Image
            src="/assets/apex-assets/apexpoint-logo.png"
            alt="apex icon"
            width={32}
            height={32}
            className="h-8 w-auto"
          />

          <Image
            src="/assets/apex-assets/apexpoint-name.png"
            alt="apex text"
            width={100}
            height={32}
            className={`h-6 w-auto ${title !== 'Apexpoint' ? 'invert' : ''}`}
          />
        </div>

        {title === 'Apexpoint' ? (
          <div className="h-9 hidden md:flex border-black border-l-2 pl-2 flex-col justify-center">
            <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/chlorelief">
              <h2>ChloRelief</h2>
            </Link>
            <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/lubie">
              <h2>LUBIE</h2>
            </Link>
          </div>
        ) : (
          <div className="border-l-2 pl-2">
            <h2 className="text-3xl">{title}</h2>
          </div>
        )}
      </div>

      {/* RIGHT SIDE NAV */}
      <ul className="hidden md:inline-flex gap-5">
        {navLinks.map((link) =>
          link.label === 'Products' && title === 'Apexpoint' ? (
            <Dropdown key="products-dropdown" />
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
