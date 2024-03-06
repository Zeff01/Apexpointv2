'use client';

import DesktopNav from '@/components/sections/navbar/desktopnav';

export default function Navbar() {
  const title = 'LUBIE';

  //Jsx  Structure
  return (
    <>
      <nav className="bg-lubie-soft-blue text-white sticky top-0 z-50">
        <DesktopNav title={title} />

      </nav>
    </>
  );
}
