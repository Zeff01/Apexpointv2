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
import { Data } from "../data";

const ImageInfo = ({ name, logo }: Data) => {
  const content = logo?.map((item, index) => (
    <SwiperSlide key={index}>
      <Image src={item.src} alt={item.name} className="rounded-2xl" />
    </SwiperSlide>
  ));
  return (
    <div className="w-3/4 mx-4 h-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={true}
        speed={1000}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {content}
      </Swiper>
    </div>
    // </div>
  );
};

export default ImageInfo;
