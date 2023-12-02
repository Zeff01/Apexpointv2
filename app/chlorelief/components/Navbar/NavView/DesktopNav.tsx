import React from 'react';
import Link from 'next/link';

interface DesktopNavProps {
  links: { text: string; href: string }[];
}
const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <div className='md:block hidden'>
      <div className='flex justify-center items-center py-3 '>
        <button className='flex gap-4 font-bold text-center text-2xl '>
          {links.map((link, index) => (
            <Link
              className='text-chlorelief-soft-slate hover:text-chlorelief-soft-green ease-in-out duration-700'
              key={index}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </button>
      </div>
    </div>
  );
};
export default DesktopNav;
