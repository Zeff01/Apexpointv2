import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface DesktopNavProps {
  chloreliefLogo: StaticImageData;
  links: { text: string; href: string }[];
}
const DesktopNav: React.FC<DesktopNavProps> = ({ chloreliefLogo, links }) => {
  return (
    <div className='md:block hidden '>
      <div className='shadow-lg z-[99999] flex justify-between items-center py-3 h-[65px] fixed w-full bg-chlorelief-dark-green'>
        <Link href='/' className='pl-[5px] pb-[10px]'>
          <Image
            src={chloreliefLogo}
            alt='Chlorelief Logo'
            width={120}
            height={50}
            className='hover:shadow-sm cursor-pointer '
            priority
          />
        </Link>
        <button className='flex gap-4 font-bold text-center text-2xl pr-[560px]'>
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
