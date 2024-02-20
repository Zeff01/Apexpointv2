import React from 'react';
import Button from '../../_modules/button';
import Image from 'next/image';
import Icons from '../../_modules/icons';
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '@/public/assets/apexpoint';
import { motion } from 'framer-motion';
import { textAnimation, headerAnimation, containerAnimation, itemAnimation } from '@/components/animation/animation';
import Lubiehero from '@/public/assets/lubie-products/lubiehero3.png';
import Lubie from '@/public/assets/lubie-products/aboutlubie.png';

function Herosec() {
  return (
    <div className="  min-h-screen h-full relative flex flex-col justify-center items-center">
      <div className="  w-full flex flex-col items-center  bg-lubie-navy-blue lubiewave font-ubuntu text-lubie-white-color  justify-between ">
        {/* HERO TEXT AND ICON */}
        <div className="w-full  flex md:flex-row flex-col justify-center  relative  pt-12 px-6">
          <div className="flex flex-col justify-center items-center sm:items-start mt-2 space-y-8 z-10">
            <motion.div variants={textAnimation} initial="hidden" animate="visible">
              <p className="text-center md:text-right">Nature & Health</p>
            </motion.div>
            <motion.div variants={textAnimation} initial="hidden" animate="visible">
              <p className=" text-3xl mb-5 md:text-4xl lg:text-5xl lg:leading-[65px] font-bold text-center sm:text-start sm:w-full">
                The first
                <span className="text-lubie-neon-green text-extra-bold">&nbsp; Multi-purpose &nbsp;</span>
                <br></br>
                FDA registered Lube <br></br> in the Philippines
              </p>
            </motion.div>
            <motion.div variants={textAnimation} initial="hidden" animate="visible">
              <a href="#about">
                {' '}
                <Button title="Read More" variant="hero" />
              </a>
            </motion.div>
          </div>
          <div className="opacity-20 md:opacity-100 md:flex w-full sm:w-auto   justify-start w-100 absolute top-6  md:relative sm:p-0">
            <div className=" sticky ">
              <motion.div initial="hidden" animate="visible" variants={headerAnimation}>
                <Image
                  src={Lubiehero}
                  alt="Lubiehero"
                  className=" object-contain z-0 lg:w-[500px] sm:w-[300px] w-[270px] m-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* HERO ICONS */}
        <div className="flex items-start w-full mt-8 pb-8">
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center w-full"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex w-full md:w-auto justify-center" variants={itemAnimation}>
              <Icons imageUrl={icon1} />
              <Icons imageUrl={icon2} />
            </motion.div>
            <motion.div className="flex w-full md:w-auto justify-center" variants={itemAnimation}>
              <Icons imageUrl={icon3} />
              <Icons imageUrl={icon4} />
            </motion.div>
            <motion.div className="flex w-full md:w-auto justify-center" variants={itemAnimation}>
              <Icons imageUrl={icon5} />
              <Icons imageUrl={icon6} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col  justify-center items-center   mt-8 relative container ">
        <div className="flex justify-center align-start w-full ">
          <Image src={Lubie} alt="herlubie" className="object-contain md:w-[500px] w-[300px] md:mb-12 mb-8" />
        </div>
        <div className="w-full flex flex-col mx-auto items-center justify-center  text-lubie-dark-blue ">
          <p className="mb-3 font-semibold">Nature & Health</p>
          <h2 className="text-4xl  font-extrabold md:w-[auto] text-center mb-6">
            <span className="text-lubie-navy-blue">Water-based</span> <br></br>
            moisturizer
          </h2>
          <div className="md:mx-auto mb-12">
            <p className="md:text-left md:text-xl text-center px-5 lg:w-[600px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit Lorem ipsum dolor sitametamet
            </p>
          </div>
          <Button title="Read More" variant="about" />
        </div>
      </div>
    </div>
  );
}

export default Herosec;
