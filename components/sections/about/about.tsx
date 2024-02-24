import React from 'react'
import { shippingbag, truck, card, return1 } from "@/public/assets/apexpoint";
import Image from "next/image";
import {motion } from "framer-motion"
import { SocialStagger , ScaleFadeInOutUpToDown} from "@/components/animation/animation"
type VariantType = {
    variant: "chlorelief" | "lubie";
};


export const About : React.FC<VariantType> = ({ variant }) => {
  return (
    <motion.div
     initial="hidden"
     whileInView="visible"
     variants={SocialStagger}
    className="pt-20 pb-28 mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-center gap-x-5 px-1 md:px-0 gap-y-10">
    {[
      {
        imgSrc: shippingbag,
        title: "Shop Online",
        description:
          "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
      },
      {
        imgSrc: truck,
        title: "Shipping",
        description:
          "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
      },
      {
        imgSrc: return1,
        title: "Return Policy",
        description:
          "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
      },
      {
        imgSrc: card,
        title: "Payment Methods",
        description:
          "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
      },
    ].map((item, index) => (
      <motion.div
        variants={ScaleFadeInOutUpToDown}
        key={index}
        className="flex flex-col text-center gap-y-2 justify-center items-center"
      >
        <Image
          src={item.imgSrc}
          alt="herlubie"
           
          className={`object-contain ${variant === 'lubie' ? 'blue-filter' : "chlorelief-filter" }`}
        />
        <p className={`text-xl font-bold ${variant === 'lubie' ? "text-lubie-navy-blue" : "text-chlorelief-chateaugreen" } `}>
          {item.title}
        </p>
        <p className={`text-sm ${variant === 'lubie' ? "text-lubie-navy-blue" : "text-chlorelief-chateaugreen" } text-balance `}>
          {item.description}
        </p>
      </motion.div>
    ))}
  </motion.div>
  )
}

export default About;