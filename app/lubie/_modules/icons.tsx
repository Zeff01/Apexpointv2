import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import { ScaleItem, } from "@/components/animation/animation"
interface IconsProps {
  imageUrl: string;
}

export default function Icons({ imageUrl }: IconsProps) {
  return (
    <motion.div
     variants={ScaleItem}
    className="flex flex-col items-center space-y-5 mb-5 ">
      <div className="rounded-full bg-white p-2 w-[70px] h-[70px] flex items-center justify-center  ">
        <Image className="scale-75 z-0" src={imageUrl} alt="hero icon" />
      </div>
      <p className="w-3/4 text-center  ">Lorem ipsum dolor sit amet</p>
    </motion.div>
  );
}
