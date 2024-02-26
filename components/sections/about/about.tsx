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
          "Explore our diverse range of products with ease, all from the comfort of your home.",
      },
      {
        imgSrc: truck,
        title: "Shipping",
        description:
          "Enjoy reliable and efficient doorstep delivery for a seamless shopping experience.",
        },
      {
        imgSrc: return1,
        title: "Return Policy",
        description:
          "Shop worry-free with our hassle-free return policy, ensuring your satisfaction.",
      },
      {
        imgSrc: card,
        title: "Payment Methods",
        description:
          "Choose your preferred secure payment option for a smooth and convenient transaction process.",
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
        <p className={`text-xl font-bold ${variant === 'lubie' ? "text-lubie-navy-blue" : "text-chlorelief-springwood" } `}>
          {item.title}
        </p>
        <p className={`text-sm ${variant === 'lubie' ? "text-lubie-navy-blue" : "text-chlorelief-springwood" } text-balance `}>
          {item.description}
        </p>
      </motion.div>
    ))}
  </motion.div>
  )
}

export default About;