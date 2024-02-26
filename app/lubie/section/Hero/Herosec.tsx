import React from 'react';
import Button from '../../_modules/button';
import Image from 'next/image';
import Icons from '../../_modules/icons';
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '@/public/assets/apexpoint';
import { motion } from 'framer-motion';
import { FadeStagger,fadeInOutLeftToRight, SocialStagger, fadeInOutRightToLeft, fadeInOutUpToDown,} from '@/components/animation/animation';
import Lubiehero from '@/public/assets/lubie-products/lubiehero3.webp';
import Lubie from '@/public/assets/lubie-products/aboutlubie.png';

function Herosec() {
  return (
    <div className="  overflow-hidden min-h-screen h-full relative flex flex-col justify-center items-center">
      <div className="  w-full flex flex-col items-center  bg-lubie-navy-blue lubiewave font-ubuntu text-lubie-white-color  justify-between ">
        {/* HERO TEXT AND ICON */}
        <div className="w-full  flex md:flex-row flex-col justify-center  relative  pt-12 px-6">
          <motion.div 
          initial="hidden"
          whileInView="visible"
           variants={SocialStagger}
       
          className="flex flex-col justify-center items-center sm:items-start mt-2 space-y-8 z-10">
          
              <motion.p 
              variants={fadeInOutLeftToRight}
              transition={{
                duration:0.5
               }}
              className="text-center md:text-right">Nature & Health</motion.p>
    

              <motion.p
               variants={fadeInOutLeftToRight}
               transition={{
                duration:0.5
               }}
               className=" text-3xl mb-5 md:text-4xl lg:text-5xl lg:leading-[65px] font-bold text-center sm:text-start sm:w-full">
                The first
                <span className="text-lubie-neon-green text-extra-bold">&nbsp; Multi-purpose &nbsp;</span>
                <br></br>
                FDA registered Lube <br></br> in the Philippines
              </motion.p>
   
  
              <motion.a 
               variants={fadeInOutLeftToRight}
               transition={{
                duration:0.5
               }}
              href="#about">
                {' '}
                <Button title="Read More" variant="hero" />
              </motion.a>
 
          </motion.div>
          <div className="opacity-20 md:opacity-100 md:flex w-full sm:w-auto   justify-start w-100 absolute top-6  md:relative sm:p-0">
            <div className=" sticky ">
              <motion.div initial="hidden" whileInView="visible" variants={fadeInOutRightToLeft}
              transition={{
                duration:0.5
              }}>
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
            variants={SocialStagger}
            initial="hidden"
            whileInView="visible"
          >
            <div className="flex w-full md:w-auto justify-center" >
              <Icons imageUrl={icon1} />
              <Icons imageUrl={icon2} />
            </div>
            <div className="flex w-full md:w-auto justify-center" >
              <Icons imageUrl={icon3} />
              <Icons imageUrl={icon4} />
            </div>
            <div className="flex w-full md:w-auto justify-center" >
              <Icons imageUrl={icon5} />
              <Icons imageUrl={icon6} />
            </div>
         
        </motion.div>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col  justify-center items-center   mt-8 relative container ">
        <motion.div 
          variants={fadeInOutLeftToRight}
          initial="hidden"
          whileInView="visible"
          transition={{
           duration:0.5
          }}
        className="flex justify-center align-start w-full ">
          <Image src={Lubie} loading='lazy' alt="herlubie" className="object-contain md:w-[500px] w-[300px] md:mb-12 mb-8" />
        </motion.div>
        <motion.div 
        variants={FadeStagger}
        initial="hidden"
        whileInView="visible"
        className="w-full flex flex-col mx-auto items-center justify-center  text-lubie-dark-blue ">
          <motion.p 
           variants={fadeInOutUpToDown}
           transition={{
            duration:0.5
           }}
          className="mb-3 font-semibold">Nature & Health</motion.p>
          <motion.h2
            transition={{
              duration:0.5
             }}
             variants={fadeInOutUpToDown}
              className="text-4xl  font-extrabold md:w-[auto] text-center mb-6">
            <span className="text-lubie-navy-blue">Water-based</span> <br></br>
            moisturizer
          </motion.h2>
          <div className="md:mx-auto mb-12">
            <motion.p 
              variants={fadeInOutUpToDown}
                transition={{
                  duration:0.5
                 }}
               
            className="md:text-left md:text-xl text-center px-5 lg:w-[600px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem
              ipsum dolor sit Lorem ipsum dolor sitametamet
            </motion.p>
          </div>
          <Button title="Read More" variant="about" />
        </motion.div>
      </div>
    </div>
  );
}

export default Herosec;
