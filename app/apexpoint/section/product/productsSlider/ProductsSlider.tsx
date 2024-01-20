"use client";

import Image from "next/image";

// slider imports
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Data } from "../data";

type ProductsSliderProps = {
  products: Data["products"];
};

const ProductsSlider: React.FC<ProductsSliderProps> = ({ products }) => {
  const content = products?.map((product, index) => (
    <SwiperSlide key={index}>
      <Image
        className="px-2 w-full h-auto"
        src={product?.src}
        alt={product?.name}
      />
    </SwiperSlide>
  ));

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };

  return (
    <main className="h-[50vh] w-full flex items-center justify-center bg-apexpoint-light-orange my-14">
      <Swiper
        // install Swiper modules
        modules={[Autoplay]}
        centeredSlides={true}
        simulateTouch={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        breakpoints={breakpoints}
      >
        {content}
      </Swiper>
    </main>
  );
};

export default ProductsSlider;
