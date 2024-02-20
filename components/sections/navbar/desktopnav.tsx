import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// images
import apexLogo from '@/public/assets/apex-assets/apexpoint-name.png';
import chloroLogo from '@/public/assets/chlorelief-assets/chlorelief-logo.png';
import lubieLogo from '@/public/assets/lubie-assets/lubie-name.png';

interface DesktopNavProps {
  title: string;
}

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

const DesktopNav: React.FC<DesktopNavProps> = ({ title }) => {
  return (
    <nav className="shadow-lg md:shadow-md flex w-full justify-between items-center px-12 py-4">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image className="h-10 w-auto hover:opacity-80 hover:scale-105 duration-200" src={apexLogo} alt="apexpoint" />
        </Link>
        <div className="border-l-2 pl-2 flex flex-col items-start gap-2">
          {title === 'Apexpoint' ? (
            <>
              <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/chlorelief">
                <Image className="h-6 w-auto" src={chloroLogo} alt="chlorelief" />
              </Link>
              <Link className="hover:opacity-80 hover:scale-105 duration-200" href="/lubie">
                <Image className="h-6 w-auto object-contain" src={lubieLogo} alt="lubie" />
              </Link>
            </>
          ) : title === 'Lubie' ? (
            <Image className="h-8 w-auto object-contain" src={lubieLogo} alt="lubie" />
          ) : (
            <Image className="h-8 w-auto" src={chloroLogo} alt="chlorelief" />
          )}
        </div>
      </div>
      <ul className="hidden md:flex gap-10">
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
