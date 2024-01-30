import React from 'react';
import Link from 'next/link';

interface DesktopNavProps {
  links: { text: string; href: string }[];
}
const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <div className='md:block hidden'>
      <div className='flex justify-center items-center'>
        <button className='flex gap-10 font-semibold text-center text-xl '>
          {links.map((link, index) => (
            <Link
              className='text-white hover:text-chlorelief-soft-green ease-in-out duration-700'
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
