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
  textAnimation,
  AboutImage,
  headerAnimation,
  AboutText,
  childrenVariants,
  containerVariants,
} from '@/components/animation/animation';
import { useInView } from 'react-intersection-observer';
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
  const { ref, inView } = useInView();
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
    <div id="about" className="font-inter h-auto   sm:h-full" ref={ref}>
      <motion.div
        variants={headerAnimation}
        initial="hidden"
        viewport={{ once: true }}
        animate={inView ? 'visible' : 'hidden'}
      >
        <h2 className="text-chlorelief-chateaugreen font-bold text-center text-Header-Mobile lg:text-header-Default xl:text-Header-Desktop">
          ABOUT THE BRAND
        </h2>
      </motion.div>
     <div className='w-full flex justify-center items-end'>
     <div className="flex flex-row-reverse items-end justify-center md:justify-between my-10 md:min-w-[760px]">
 
 <div className="text-gray-400 text-lg max-w-full-lg text-center md:text-left flex flex-col h-full pb-7">
   <motion.div
     variants={textAnimation}
     initial="hidden"
     viewport={{ once: true }}
     animate={inView ? 'visible' : 'hidden'}
   >
     <h2 className="my-2">CHLORELIEF</h2>
   </motion.div>

   <motion.div
     variants={AboutText}
     initial="hidden"
     viewport={{ once: true }}
     animate={inView ? 'visible' : 'hidden'}
   >  
     {aboutText.map((text, index) => (
       <p key={index}>{text}</p>
     ))}
   </motion.div>
 </div>


<motion.div
 variants={AboutImage}
 initial="hidden"
 viewport={{ once: true }}
 animate={inView ? 'visible' : 'hidden'}
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
