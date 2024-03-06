'use client';

import DesktopNav from '@/components/sections/navbar/desktopnav';

export default function Navbar() {
  const title = 'ChloRelief';

  //Jsx Structure
  return (
    <nav className="bg-chlorelief-dark-green text-white sticky top-0 z-50 ">
      <DesktopNav title={title} />
      
    </nav>
  );
}
