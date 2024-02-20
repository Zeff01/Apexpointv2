'use client';

import DesktopNav from '@/components/sections/navbar/desktopnav';

export default function Navbar() {
  const title = 'Chorelief';

  //Jsx Structure
  return (
    <>
      <nav className="bg-chlorelief-dark-green md:text-white sticky top-0 z-50 ">
        <DesktopNav title={title} />
      </nav>
    </>
  );
}
