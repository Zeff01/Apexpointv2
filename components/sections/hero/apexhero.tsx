'use client';
import React from 'react';
import ApexSwiper from '@/components/carousel/ApexHeroCarousel';
import Header from '@/app/apexpoint/section/hero/components/Header';
import { ScaleFadeInOutDownToUp } from '@/components/animation/animation';
import { motion } from 'framer-motion';

const apexhero = () => {
  return (
    <section className="apex min-h-screen bg-apexpoint-light-orange flex justify-center items-center flex-col gap-8 md:gap-4">
      <Header />
      <ApexSwiper />
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={ScaleFadeInOutDownToUp}
        transition={{
          delay: 0.3,
          duration: 0.3,
        }}
        className="md:w-[600px] p-3 md:p-0 text-center text-xl"
      >
        ApexPoint Pharmaceutical and Medical Supplies Manufacturing OPC. Providing superior products with the use of{' '}
        <span className="text-chlorelief-soft-green">sustainable</span> raw materials.
      </motion.p>

      <motion.a
        initial="hidden"
        whileInView="visible"
        variants={ScaleFadeInOutDownToUp}
        transition={{
          delay: 0.4,
          duration: 0.3,
        }}
        href="#contact"
      >
        <button className="bg-chlorelief-chateaugreen text-white p-3 rounded-md">Contact Us</button>
      </motion.a>
    </section>
  );
};

export default apexhero;
