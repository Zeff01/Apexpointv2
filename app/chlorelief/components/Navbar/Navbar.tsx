'use client';

import React, { useState } from 'react';
import chloreliefLogo from '@/public/assets/chlorelief-logo.png';
import MobileNav from './NavView/MobileNav';
import DesktopNav from './NavView/DesktopNav';

export default function Navbar() {
  //state for mobile menu
  const [navMenu, setNavMenu] = useState<boolean>(false);

  const links = [
    { text: 'HOME', href: '#home' },
    { text: 'PRODUCTS', href: '#product' },
    { text: 'ABOUT', href: '#about' },
    { text: 'CONTACT', href: '#contact' },
  ];

  //Jsx Structure
  return (
    <nav className='bg-chlorelief-dark-green font-mono'>
      <DesktopNav links={links} chloreliefLogo={chloreliefLogo} />
      <MobileNav
        navMenu={navMenu}
        setNavMenu={setNavMenu}
        chloreliefLogo={chloreliefLogo}
        links={links}
      />
    </nav>
  );
}
