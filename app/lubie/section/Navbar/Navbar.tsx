'use client';

import DesktopNav from '@/components/sections/navbar/desktopnav';

export default function Navbar() {
  const title = 'Lubie';
  const links = [
    {
      text: 'Home',
      href: '#home',
      hover: ' flex flex-col text-white py-2 hover:text-blue-400 duration-730 sm:flex-row',
    },
    {
      text: 'Products',
      href: '#product',
      hover: ' flex flex-col text-white py-2 hover:text-blue-400 duration-730 sm:flex-row',
    },
    {
      text: 'About Us',
      href: '#about',
      hover: ' flex flex-col text-white py-2 hover:text-blue-400 duration-730 sm:flex-row',
    },
    {
      text: 'Contacts',
      href: '#contact',
      hover: ' flex flex-col text-white py-2 hover:text-blue-400 duration-730 sm:flex-row',
    },
  ];

  //Jsx  Structure
  return (
    <>
      <nav className="bg-lubie-soft-blue md:text-white sticky top-0 z-50">
        <DesktopNav title={title} />
      </nav>
    </>
  );
}
