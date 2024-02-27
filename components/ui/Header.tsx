'use client';
import React, { HTMLAttributes, ReactNode } from 'react';
import { fadeInOutDownToUp } from '@/components/animation/animation';
import { motion } from 'framer-motion';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <motion.h1
      variants={fadeInOutDownToUp}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.5,
      }}
      className="text-Header-Mobile min-[425px]:text-Header-Default md:text-Header-Desktop w-64 min-w-full font-semibold text-center"
    >
      {children}
    </motion.h1>
  );
};

export default Header;
