"use client";

import Image from "next/image";

// slider imports
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// imported imgs
import MercuryLogo from "@/public/assets/logos/mercury-logo.png";
import LazadaLogo from "@/public/assets/logos/lazada-logo.png";
import ShopeeLogo from "@/public/assets/logos/shopee-logo.png";
import RosePharmacyLogo from "@/public/assets/logos/rose-pharmacy-logo.png";
import WatsonsLogo from "@/public/assets/logos/watsons-logo.png";

const AvailableAt = () => {
  const logos = [
    {
      name: "Shopee Logo",
      src: ShopeeLogo,
    },
    {
      name: "Mercury Drug Logo",
      src: MercuryLogo,
    },
    {
      name: "Lazada Logo",
      src: LazadaLogo,
    },
    {
      name: "Rose Pharmacy Logo",
      src: RosePharmacyLogo,
    },
    {
      name: "Watsons Logo",
      src: WatsonsLogo,
    },
  ];

  const content = logos.map((logo, index) => (
    <SwiperSlide className="self-center object-contain " key={index}>
      <Image
        className="px-2 w-full h-auto min-w-[170px] max-w-[250px]"
        src={logo.src}
        alt={logo.name}
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
    <main className="h-auto flex flex-col items-center justify-center bg-apexpoint-light-orange gap-6 pt-14">
      <div className="w-full text-center text-4xl font-semibold">
        <h1>Available to Stores</h1>
      </div>
      <Swiper className="w-full"
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={100}
        slidesPerView={4}
        simulateTouch={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={4000}
        breakpoints={breakpoints}
      >
        {content}
      </Swiper>
    </main>
  );
};

export default AvailableAt;
