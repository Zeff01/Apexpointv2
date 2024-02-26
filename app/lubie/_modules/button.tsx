import React from "react";
``;
interface ButtonProps {
  title: string;
  variant: "hero" | "about";
}
import { motion } from 'framer-motion';
import {  fadeInOutUpToDown} from '@/components/animation/animation';
export default function Button({ title, variant }: ButtonProps) {
  return (
    <>
      <motion.button
       variants={fadeInOutUpToDown}
       transition={{
         duration:0.5
        }}
        className={`p-2  font-bold w-[200px] rounded-lg border-box border-2 m-auto transition-all ease-in-out ${
          variant === "about"
            ? "hover:bg-lubie-dark-blue hover:text-white text-lubie-dark-blue border-lubie-dark-blue"
            : "border-white hover:text-lubie-dark-blue hover:bg-white text-white bg-lubie-navy-blue"
        }  text-black-200 `}
      >
        {title}
      </motion.button>
    </>
  );
}
