'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  //state for mobile menu
  const [navMenu, setNavMenu] = useState<boolean>(false);
  // Function to open mobile menu
  const openNav = () => {
    setNavMenu(true);
  };
  // Function i made to close mobile menu
  const closeNav = () => {
    setNavMenu(false);
  };
  const menuRef = useRef<HTMLDivElement>(null);
  // useEffect hook to handle clicks outside of the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeNav();
      }
    };
    // Add event listener for clicks outside the menu
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup function to remove the event listener when component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);
  // Array of navigation links. I moved <Link> from here then moved down to jsx structure then changed it into this. I've decided to nest link element into button
  const linkNav = [
    { text: 'HOME', href: '#home' },
    { text: 'PRODUCTS', href: '#product' },
    { text: 'ABOUT', href: '#about' },
    { text: 'CONTACT', href: '#contact' },
  ];

  // Logic for Menu on mobile Animation. Animation Variant for the mobile menu. It start from the right x axis

  const menuVariant = {
    initial: {
      scaleX: 2,
      originX: -2,
    },
    animate: {
      scaleX: 1,
      originX: 0,
      transition: {
        duration: 0.5,
      },
      ease: [0.13, 0, 0.4, 0],
    },
    exit: {
      scaleX: 1,

      transition: {
        duration: [0.24, 1, 0.4, 1],
      },
    },
  };

  return (
    <header className='bg-chlorelief-dark-green font-mono'>
      {/* Desktop view */}
      <div className='md:block py-3 hidden '>
        <div className='flex justify-between items-center '>
          <a href='#home' className='pl-[5px] pb-[10px]'>
            <Image
              src={`/assets/chlorelief-logo.png`}
              alt='Chlorelief Logo'
              width={120}
              height={50}
              className='hover:shadow-sm cursor-pointer '
              priority
            />
          </a>
          <button className='flex gap-4 font-bold text-center text-2xl pr-[560px]'>
            {linkNav.map((nav, navKey) => (
              <Link
                className='text-chlorelief-soft-slate hover:text-chlorelief-soft-green ease-in-out duration-700'
                key={navKey}
                href={nav.href}
              >
                {nav.text}
              </Link>
            ))}
          </button>
        </div>
      </div>
      {/* Mobile view */}
      <div className='flex md:hidden lg:hidden'>
        <div className='flex flex-row gap-[160px] justify-between fixed bg-chlorelief-dark-green w-full h-[50px]'>
          <a href='#home'>
            <Image
              src={`/assets/chlorelief-logom.png`}
              alt='chlorelief logo'
              width={160}
              height={70}
              className='hover:shadow-sm pl-[5px]'
            />
          </a>
          {/* Mobile menu burger design */}
          <div className='flex flex-col justify-center items-center'>
            <button onClick={openNav} className='text-white pr-[5px]'>
              <GiHamburgerMenu size={25} />
            </button>
            {/* Menu Container  */}
            {navMenu && (
              <motion.div
                variants={menuVariant}
                ref={menuRef}
                initial='initial'
                animate='animate'
                exit='exit'
                className='shadow-md fixed top-10 right-2 w-[100px] h-[150px] rounded-lg bg-chlorelief-soft-gray font-medium text-[25px] z-[1000]'
                onClick={closeNav}
              >
                <ul className='gap-[50px] font-bold text-sm pt-3'>
                  {linkNav.map((mView, mKey) => (
                    <Link
                      key={mKey}
                      onClick={closeNav}
                      href={mView.href}
                      className='flex flex-col items-center justify-center mb-4 text-chlorelief-dark-green hover:text-chlorelief-soft-green ease-in-out duration-700'
                    >
                      {mView.text}
                    </Link>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
