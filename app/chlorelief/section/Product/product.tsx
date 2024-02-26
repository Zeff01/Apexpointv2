'use client';
import ProductList from './data';
import { fadeInOutDownToUp } from '@/components/animation/animation';
import { motion , } from 'framer-motion';

export default function Product() {

  return (
    <>

      <div
        id="product"
        className="flex flex-col items-center min-h-screen h-full font-intra my-10 mb-20"

      >
        <div
         
        >
          <motion.h1 
          variants={fadeInOutDownToUp}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5
          }}
          className="text-red-500 font-bold text-center text-Header-Mobile lg:text-header-Default xl:text-Header-Desktop my-6">
            OUR PRODUCTS
          </motion.h1>
        </div>


        <div className="flex flex-col text-center text-gray-400   max-w-screen-lg  mb-4 mx-20 lg:mx-0">
            <motion.p 
            variants={fadeInOutDownToUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.5,
              delay:0.2
            }}
            
            className="text-lg lg:w-[700px]">
              Paraben-free paraben is not a natural product and is not something
              you'd find naturally in the body. Using skin products with paraben
              will make skin dry, brittle, cracked, and swollen. Also, paraben
              can cause many chemicals to enter the body that should not be
              there.

            </motion.p>

        </div>

        <div
        >

          <ProductList />
        </div>
      </div>
    </>
  );
}
