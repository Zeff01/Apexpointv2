import React from 'react';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  navMenu: boolean;

  setNavMenu: React.Dispatch<React.SetStateAction<boolean>>;
  links: { text: string; href: string }[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  setNavMenu,
  navMenu,

  links,
}) => {
  return (
    <div className='md:hidden flex'>
      <div className='  flex   bg-chlorelief-dark-green  px-6 py-3 '>
        <div
          className='md:hidden block cursor-pointer z-[9999] pt-[8px] text-chlorelief-soft-slate'
          onClick={() => setNavMenu(!navMenu)}
        >
          {navMenu ? <IoClose size={32} /> : <GiHamburgerMenu size={32} />}
        </div>
      </div>
      <AnimatePresence>
        {navMenu && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='top-0 right-0 shadow-md  w-[60%] h-full fixed  bg-chlorelief-dark-green font-medium z-[100] 
          '
            onClick={() => setNavMenu(!navMenu)}
          >
            <ul className='gap-[50px] font-bold text-[30px] pt-[140px]'>
              {links.map((link, index) => (
                <Link
                  key={index}
                  onClick={() => setNavMenu(!navMenu)}
                  href={link.href}
                  className='transition-color  flex flex-col items-center justify-center mb-4 text-chlorelief-soft-slate hover:text-chlorelief-soft-green ease-in-out duration-700'
                >
                  <li>{link.text}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
