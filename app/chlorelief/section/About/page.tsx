'use client';
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import mainImg from '@/public/assets/chlorelief-products/chlorelief-white-bg.jpg';
import serv from '@/public/assets/chlorelief-assets/services.png';
import ship from '@/public/assets/lubie-assets/shipping.png';
import ret from '@/public/assets/chlorelief-assets/return-icon.png';
import payment from '@/public/assets/chlorelief-assets/payment.png';
import Shipping from "@/components/sections/about/about"
import {
 fadeInOutDownToUp,fadeInOutRightToLeft,fadeInOutLeftToRight
} from '@/components/animation/animation';
import { motion } from 'framer-motion';
interface About {
  title: string;
  img: StaticImageData;
}

const aboutData: About[] = [
  { title: 'services', img: serv },
  { title: 'shipping', img: ship },
  { title: 'return', img: ret },
  { title: 'payment', img: payment },
];

const About = () => {

  const aboutText = [
    'Paraben-free paraben is not a ',
    'natural product and is not',
    'something you apod find naturally',
    'in the body. Using skin products',
    'with paraben will make skin dry,',
    'brittle, cracked, and swollen.',
    'Also, paraben can cause many',
    'chemicals to enter the body that',
    'that should not be there.',
  ];

  return (
    <div id="about" className="font-inter h-auto   sm:h-full">
   

        <motion.h2
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration:0.5}}
        className="text-chlorelief-chateaugreen font-bold text-center text-Header-Mobile lg:text-header-Default xl:text-Header-Desktop">
          ABOUT THE BRAND
        </motion.h2>
  
     <div className='w-full flex justify-center items-end'>
     <div className="flex flex-row-reverse items-end justify-center md:justify-between my-10 md:min-w-[760px]">
 
 <div className="text-gray-400 text-lg max-w-full-lg text-center md:text-left flex flex-col h-full pb-7">
  
     <motion.h2
        variants={fadeInOutRightToLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration:0.5}}
     className="my-2">ChloRelief</motion.h2>
  

   <motion.div
      variants={fadeInOutRightToLeft}
      initial="hidden"
      whileInView="visible"
      transition={{ duration:0.5}}
  


   >  
     {aboutText.map((text, index) => (
       <p key={index}>{text}</p>
     ))}
   </motion.div>
 </div>


<motion.div
   variants={fadeInOutLeftToRight}
   initial="hidden"
   whileInView="visible"
   transition={{ duration:0.5}}

>
 <Image src={mainImg} width={400} alt="About Image" className="hidden md:block object-contain" />
</motion.div>
</div>
     </div>

     <Shipping variant='chlorelief' />
    </div>
  );
};

export default About;
