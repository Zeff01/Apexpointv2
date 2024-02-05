"use client";
import React from "react";
import Image from "next/image";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ProductData } from "@/app/components/data/apexpoint/productData";

const Slider = ({ name, logo }: ProductData) => {
  const content = logo?.map((item, index) => (
    <SwiperSlide key={index}>
      <Image
        src={item.src}
        alt={item.name}
        className="rounded-2xl object-contain w-full h-auto"
      />
    </SwiperSlide>
  ));
  return (
    <div className="w-full h-auto">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        autoplay={true}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
      >
        {content}
      </Swiper>
    </div>
  );
};

export default Slider;
