'use client';
import React from 'react';
import Link from 'next/link';
import Section from '../../ui/Section';
import { FooterDataType, footerData } from '@/components/data/apexpoint/footerData';
import Socials from '@/app/apexpoint/section/footer/_modules/Socials';
import Image from 'next/image';
import apexpointLogo from '@/public/assets/apex-assets/apexpoint-logo.png';
import { motion } from 'framer-motion';
import { FadeStagger, fadeInOutDownToUp, fadeInOutLeftToRight } from '@/components/animation/animation';
type FooterProps = {
  variant: 'chlorelief' | 'lubie';
};

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const data = footerData.map((item: FooterDataType) => {
    return (
      <motion.div variants={FadeStagger} initial="hidden" whileInView="visible" key={item.title} className="p-4 ">
        <motion.p
          variants={fadeInOutLeftToRight}
          transition={{
            duration: 0.5,
          }}
          className="m-3 ml-0 font-medium"
        >
          {item.title}
        </motion.p>
        <motion.ul>
          {item.list.map((list, index) => (
            <motion.li
              variants={fadeInOutLeftToRight}
              transition={{
                duration: 0.5,
              }}
              key={index}
              className="flex gap-3 mb-3 text-sm"
            >
              {list.icon && (
                <Image
                  className="grayscale object-contain"
                  src={list.icon}
                  alt={list.information}
                  width={19}
                  height={19}
                />
              )}
              {list.href ? (
                <Link href={list.href}>
                  {list.information}
                </Link>
              ) : (
                <span>{list.information}</span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    );
  });

  return (
    <Section
      id="footer"
      className={`p-4 ${variant === 'chlorelief' ? 'bg-chlorelief-springwood' : 'bg-lubie-dark-blue'}  text-white `}
    >
      <div className="md:flex w-100 md:justify-between md:px-8 lg:px-0 lg:justify-center lg:gap-[50px]  md:mb-[10px] hidden ">
        {data}
      </div>
      <div className="flex justify-center">
        <Socials iconColor="text-white" />
      </div>
      <motion.div
        variants={fadeInOutDownToUp}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
        }}
        className="flex justify-center items-center gap-3  mt-5 mb-0"
      >
        <Image src={apexpointLogo} alt="apexpoint" width={30} />
        <p className="text-lubie-light-blue text-xs m-0">2021 © Copyright. All rights reserved.</p>
      </motion.div>
    </Section>
  );
};

export default Footer;
