"use client";
import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Video = () => {
  const videos = [
    { name: "chlorelief", src: "/assets/videos/chloreliefVid.mp4" },
    { name: "lubie", src: "/assets/videos/lubieVid.mp4" },
  ];

  const content = videos.map((video) => (
    <SwiperSlide className="self-center object-contain " key={video.name}>
      <video
        className="object-contain object-center w-full h-full max-h-[90vh]"
        controls
      >
        <source src={video.src} />
      </video>
    </SwiperSlide>
  ));

  return (
    <div className="relative w-full h-full max-h-[90vh] object-contain z-99">
      <Swiper
        className="w-full"
        modules={[Navigation, A11y, Autoplay]}
        autoplay={false}
        speed={3000}
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

export default Video;
