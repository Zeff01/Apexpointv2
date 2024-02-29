import React from "react";
import LubieCard from "../../_modules/LubieCard";
import {motion} from "framer-motion"
import { fadeInOutDownToUp, SocialStagger, } from '@/components/animation/animation';
const Products = () => {
  return (
    <div
      id="products"
      className="w-full md:flex-row flex flex-col justify-center items-center mt-8 md:mb-0  mb-20 h-full "
    >
      <div className="">
        <div className="w-full flex flex-col items-center mb-5">
          <motion.h1
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.5,
            
            }}
          className="md:text-5xl text-4xl text-lubie-dark-blue  font-extrabold lg:text-4xl drop-shadow-md mb-6">
            Our Products
          </motion.h1>
          <motion.p 
             variants={fadeInOutDownToUp}
             initial="hidden"
             whileInView="visible"
             transition={{
               duration: 0.5,
               delay:0.2
             }}
          className="md:text-xl text-lubie-dark-blue text-center motion.y-8 w-[60%] mb-4">
            Introducing our product section: Dive into the world of LUBIE, a glycerin-free, paraben-free, and odor-free water-based lubricant meticulously crafted to alleviate discomfort caused by dryness and friction. Elevate your intimate experiences with Lubie's premium formula designed for ultimate pleasure and comfort.
          </motion.p>
        </div>

        {/* Items Sections */}
        <div className="md:flex-row  flex justify-center items-center w-full ">
          <motion.div 
           variants={SocialStagger}
           initial="hidden"
           whileInView="visible"
          className="container flex flex-wrap justify-center items-center gap-7 lg:w-[1200px] ">
            <LubieCard
              title="10ml Lubie"
              imageUrl="assets/lubie-assets/lubie-10ml.png"
              price="₱32"
              quantity="10"
            />
            <LubieCard
              title="35ml Lubie"
              imageUrl="assets/lubie-assets/lubie-35ml.png"
              price="₱132"
              quantity="30"
            />
            <LubieCard
              title="100ml Lubie"
              imageUrl="assets/lubie-assets/lubie-100ml.png"
              price="₱420"
              quantity="100"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Products;
