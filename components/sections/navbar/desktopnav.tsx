import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <nav className="h-14.5 font-share font-bold shadow-lg md:shadow-md flex w-full justify-between items-center sm:px-12 px-3 py-4">
      <div className="flex items-center gap-2">
        {title === 'Apexpoint' ? (
          <Image className="h-12 w-auto filter" src={apexLogo} alt="apexpoint" />
        ) : (
          <div className="hidden md:flex">
            <Link href="/">
              <Image
                className="h-12 w-auto filter hover:opacity-80 hover:scale-105 duration-200"
                src={apexLogo}
                alt="apexpoint"
              />
            </Link>
          </div>
        )}
        {title === 'Apexpoint' ? (
          <div className="hidden md:flex border-black border-l-2 pl-2 flex-col items-start gap-2">
            <Link className="hover:opacity-80 hover:scale-105 duration-200 " href="/chlorelief">
              <h2 className="h-5">Chlorelief</h2>
            </Link>
            <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/lubie">
              <h2 className="h-5">Lubie</h2>
            </Link>
          </div>
        ) : title === 'Lubie' ? (
          <div className="border-l-2 pl-2">
            <h2 className="text-4xl">Lubie</h2>
          </div>
        ) : (
          <div className="border-l-2 pl-2">
            <h2 className="text-4xl">Chlorelief</h2>
          </div>
        )}
      </div>
      <ul className="hidden md:flex gap-5">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:opacity-65 duration-200">
            <Link className="font-semibold" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default DesktopNav;
