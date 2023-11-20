'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const openNav = () => {
    setNavMenu(true);
  };
  const closeNav = () => {
    setNavMenu(false);
  };

  const chloreliefNav = [
    { id: 1, label: 'Home', link: '#home' },
    { id: 2, label: 'Products', link: '#products' },
    { id: 3, label: 'About Us', link: '#about' },
    { id: 4, label: 'Contacts', link: '#contacts' },
  ];

  return (
    <div className='bg-chlorelief-chateaugreen font-mono'>
      {/*desktop view */}
      <div className='lg:block md:flex md:flex-col md:w-full md:h-[92px] hidden mr-2'>
        <div className='flex-row flex justify-between '>
          <Image
            src={`/assets/chlorelief-logo2.png`}
            alt='Chlorelief Logo'
            width={160.89}
            height={63.76}
            className='pt-[39px] pl-[39px]'
          />
          <ul className='flex gap-4 pt-[28px] font-medium pr-[670px]'>
            {chloreliefNav.map((nav) => (
              <li className='hover:text-white' key={nav.id}>
                <a href={nav.link}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
       
      </div>
      {/*mobile view*/}
      <div className='flex flex-col md:hidden lg:hidden sm:block w-full h-[49px]'>
        <div className='flex justify-between gap-20 flex-row pt-[7px] mx-1'>
          <Image
            src={`/assets/chlorelief-logo3.png`}
            alt='chlorelief logo'
            width={92.38}
            height={31.26}
            className='pl-[2px]'
          />
          <div
            className='border-[1px] rounded-md border-black bg-white flex items-center flex-col w-[26px] h-[26px]'
            onClick={openNav}
          >
            <span className='w-[15px] h-[3px] bg-black block mt-1'></span>
            <span className='w-[15px] h-[3px] bg-black block mt-1'></span>
            <span className='w-[15px] h-[3px] bg-black block mt-1'></span>
          </div>
          {navMenu && (
            <div className='w-full h-full fixed bg-chlorelief-chateaugreen z-[1000]'>
              <ul className='gap-[70px] pt-[190px] font-medium '>
                {chloreliefNav.map((navMob) => (
                  <li
                    key={navMob.id}
                    className='flex flex-col items-center mb-4 text-white'
                  >
                    <a href={navMob.link} onClick={closeNav}>
                      {navMob.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
