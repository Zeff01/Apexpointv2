'use client';
import React from 'react';
import Section from '@/components/ui/Section';
import Cards from './components/Cards';
import { FadeStagger } from '@/components/animation/animation';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div variants={FadeStagger} initial="hidden" whileInView="visible">
      <Section
        id="about"
        className=" bg-apexpoint-light-orange pb-20  w-full flex flex-col md:flex-row gap-8 items-center md:items-stretch justify-between    py-8"
      >
        <Cards />
      </Section>
    </motion.div>
  );
};

export default About;
