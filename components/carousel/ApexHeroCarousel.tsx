import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import lubieProduct1 from "@/public/assets/lubie-products/lubie-35ml.png"
import lubieProduct2 from "@/public/assets/lubie-products/lubie-10ml.png"
import lubieProduct3 from "@/public/assets/lubie-products/lubie-100ml.png"
import chloroProduct1 from "@/public/assets/chlorelief-products/calamine-60ml.png"
import chloroProduct2 from "@/public/assets/chlorelief-products/calamine-120ml.png"
import chloroProduct3 from "@/public/assets/chlorelief-products/antiseptic-150ml.png"
import chloroProduct4 from "@/public/assets/chlorelief-products/alcohol-150ml.png"
import Image from 'next/image';

import { EffectCoverflow, Pagination, } from 'swiper/modules';
import Link from 'next/link';


const ApexSlider = () => {
    const colors = ["#368D2E", "#B7CED7", "#FC9BB2", "#B7CED7"];

function getColor(index: number) {
    const baseIndex = index % colors.length; // Cycle through all colors
    return colors[baseIndex];
}
  const ApexSliderData = [

    {
        image:chloroProduct2,
  
        productlink : "#"
      },
      {
        image:lubieProduct3,
   
        productlink : "#"
      },
    {
      image:lubieProduct1,

      productlink : "#FC9BB2"
    },
    {
      image:chloroProduct2,

      productlink : "#"
    },
    {
      image:lubieProduct2,

      productlink : "#"
    },
    {
      image:chloroProduct1,

      productlink : "#"
    },
    {
      image:chloroProduct4,

      productlink : "#"
    },
    {
        image:chloroProduct3,
  
        productlink : "#"
      },
 
  
  ]
  return (
<>
      <Swiper
       initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-6"
      >
       
        {ApexSliderData.map((slide, slide_id) => (
          <SwiperSlide key={slide_id}>
          <Image alt="1" src={slide.image} style={{backgroundColor:getColor(slide_id)}} className="shadow-lg"/>
          <Link href={slide.productlink} className="absolute bottom-6 right-6 text-white">View More</Link>
        </SwiperSlide>
      ))}
       
      </Swiper>
    </>
  )
}

export default ApexSlider