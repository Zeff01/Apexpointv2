'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsPerson, BsCart3 } from 'react-icons/bs';

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
    { link: <Link href='#home'>Home</Link> },
    { link: <Link href='#products'>Products</Link> },
    { link: <Link href='#about'>About</Link> },
    { link: <Link href='#contacts'>Contacts</Link> },
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
    <header className='bg-chlorelief-green font-mono'>
      {/* Desktop view */}
      <div className='md:block flex-col hidden w-full h-[75px] py-[6px]'>
        <div className='flex-row flex justify-evenly  mx-2'>
          <Image
            src={`/assets/chlorelief-logo2.png`}
            alt='Chlorelief Logo'
            width={120}
            height={50}
            className='hover:shadow-sm' priority
          />

          <ul className='flex gap-4 font-medium text-[18px] pr-[300px] pt-[16px]'>
            {linkNav.map((nav, navKey) => (
              <li
                className='text-chlorelief-red255 hover:text-white'
                key={navKey}
              >
                {nav.link}
              </li>
            ))}
            <p className='pl-[30px] flex flex-row gap-[20px]'>
              <span className='hover:text-chlorelief-gray85'>
                <BsCart3 size={25} />
              </span>
              <span className='hover:text-chlorelief-gray85'>
                <BsPerson size={28} />
              </span>
            </p>
          </ul>
        </div>
      </div>
      {/* Mobile view */}
      <div className='flex flex-col md:hidden lg:hidden w-full md:h-[55px]'>
        <div className='flex flex-row justify-between'>
          <Image
            src={`/assets/chlorelief-logom.png`}
            alt='chlorelief logo'
            width={90}
            height={55}
            className=' hover:shadow-sm'
          />
          {/* Mobile menu burger design */}
          <div
            className='border-[1px] rounded-md border-black bg-white flex items-center flex-col w-[26px] h-[26px] my-2'
            onClick={openNav}
          >
            <span className='w-[15px] h-[2px] bg-black block mt-1'></span>
            <span className='w-[15px] h-[2px] bg-black block mt-1'></span>
            <span className='w-[15px] h-[2px] bg-black block mt-1'></span>
          </div>
          {/* Menu Container  */}

          {navMenu && (
            <motion.div
              variants={menuVariant}
              initial='initial'
              animate='animate'
              exit='exit'
              className='w-full h-full fixed bg-chlorelief-green font-medium text-[25px] z-[1000]'
            >
              <ul className='gap-[70px] pt-[190px]'>
                {linkNav.map((mView, mKey) => (
                  <li
                    key={mKey}
                    onClick={closeNav}
                    className='flex flex-col items-center mb-4 text-chlorelief-red255 hover:text-white'
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
