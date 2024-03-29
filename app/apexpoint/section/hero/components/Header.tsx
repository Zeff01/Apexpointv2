import React from 'react';
import { ScaleFadeInOutUpToDown } from '@/components/animation/animation';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      variants={ScaleFadeInOutUpToDown}
      transition={{
        duration: 0.3,
      }}
      className="text-3xl min-[320px]:text-4xl min-[425px]:text-6xl md:text-5xl lg:text-7xl px-0 font-black uppercase whitespace-nowrap drop-shadow-md text-shadow "
    >
      less is <span className="text-apexpoint-dark-orange drop-shadow-2xl text-outline">more</span>
    </motion.h1>
  );
};

export default Header;
