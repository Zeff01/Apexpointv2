'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  //state for mobile menu
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const openNav = () => {
    setNavMenu(true);
  };
  const closeNav = () => {
    setNavMenu(false);
  };
  const linkNav = [
    { link: <Link href='#home'>HOME</Link> },
    { link: <Link href='#product'>PRODUCTS</Link> },
    { link: <Link href='#about'>ABOUT</Link> },
    { link: <Link href='#contact'>CONTACT</Link> },
  ];
  {
    /* Logic for Menu on mobile Animation */
  }
  const menuVariant = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
      ease: [0.13, 0, 0.4, 0],
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: [0.24, 1, 0.4, 1],
      },
    },
  };
  return (
    <header className='bg-green-900 font-mono '>
      {/* Desktop view */}
      <div className='md:block py-3 hidden'>
        <div className='flex justify-around items-center'>
          <Image
            src={`/assets/chlorelief-logo.png`}
            alt='Chlorelief Logo'
            width={120}
            height={50}
            className='hover:shadow-sm'
            priority
          />
          <ul className='flex gap-4 font-bold text-2xl '>
            {linkNav.map((nav, navKey) => (
              <li
                className='text-chlorelief-soft-slate hover:text-chlorelief-soft-green ease-in-out duration-700'
                key={navKey}
              >
                {nav.link}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile view */}
      <div className='flex flex-col md:hidden lg:hidden w-full h-[50px] pt-[5px]'>
        <div className='flex flex-row justify-between'>
          <Image
            src={`/assets/chlorelief-logom.png`}
            alt='chlorelief logo'
            width={160}
            height={70}
            className='hover:shadow-sm pl-10'
          />
          {/* Mobile menu burger design */}
          <span onClick={openNav} className='text-white pt-[7px] pr-10'>
            <GiHamburgerMenu size={25}/>
          </span>
          {/* Menu Container  */}
          {navMenu && (
            <motion.div
              variants={menuVariant}
              initial='initial'
              animate='animate'
              exit='exit'
              className='w-1 h-1  bg-green-900 font-medium text-[25px] '
            >
              <ul className='gap-[70px] pt-[190px] font-bold text-2xl'>
                {linkNav.map((mView, mKey) => (
                  <li
                    key={mKey}
                    onClick={closeNav}
                    className='flex flex-col items-center mb-4 text-chlorelief-soft-slate hover:text-chlorelief-soft-green ease-in-out duration-700'
                  >
                    {mView.link}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
