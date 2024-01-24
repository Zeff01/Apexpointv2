
import React from 'react';
import { Lubiehero } from '@/public/assets/lubie';
import {motion} from 'framer-motion';
import Image from 'next/image';




export default function Header()  {

    return (
     
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        transition={{duration: 0.3}}
        variants={{
            visible: {opacity:1, scale:1},
            hidden: {opacity:0, scale:0}
        }}>
           
           <Image src={Lubiehero}
            alt='Lubiehero' 
            className=" object-contain z-0"
            layout=""/>
        

        </motion.div>
           
      


    )

}