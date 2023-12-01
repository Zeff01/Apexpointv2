import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface MobileNavProps {
  navMenu: boolean;
  chloreliefLogo: StaticImageData;
  setNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
  links: { text: string; href: string }[];
}
const menuVariant = {
  initial: {
    scaleY: -2,
    originY: -2,
    y: '-100%',
  },
  animate: {
    scaleY: 1,
    originY: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
    ease: [0.13, 0, 0.4, 0],
  },
  exit: {
    scaleY: -1,
    originY: 1,
    y: '100%',
    transition: {
      duration: 0.6,
      ease: [0.13, 0, 0.4, 0],
    },
  },
};

const MobileNav: React.FC<MobileNavProps> = ({
  setNavMenu,
  navMenu,
  chloreliefLogo,
  links,
}) => {
  return (
    <div className='md:hidden flex'>
      <div className=' z-[99999] flex justify-between fixed bg-chlorelief-dark-green w-full h-[65px] px-6 py-3'>
        <Link href='/'>
          <Image
            src={chloreliefLogo}
            className='h-9 w-auto'
            alt='chlorelief-logo'
          />
        </Link>
        <div
          className='md:hidden block cursor-pointer z-[9999] pt-[8px] text-chlorelief-soft-slate'
          onClick={() => setNavMenu(!navMenu)}
        >
          {navMenu ? <IoClose size={32} /> : <GiHamburgerMenu size={32} />}
        </div>
      </div>
      {navMenu && (
        <motion.div
          variants={menuVariant}
          initial='initial'
          animate='animate'
          exit='exit'
          className='shadow-md w-full h-full fixed  bg-chlorelief-dark-green font-medium text-[25px] z-[1000] '
          onClick={() => setNavMenu(!navMenu)}
        >
          <ul className='gap-[50px] font-bold text-[40px] pt-[140px]'>
            {links.map((link, index) => (
              <Link
                key={index}
                onClick={() => setNavMenu(!navMenu)}
                href={link.href}
                className='flex flex-col items-center justify-center mb-4 text-chlorelief-soft-slate hover:text-chlorelief-soft-green ease-in-out duration-700'
              >
                <li>{link.text}</li>
              </Link>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
