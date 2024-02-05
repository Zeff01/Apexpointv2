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

import React from "react";
import Section from "@/app/components/ui/Section";
import Header from "@/app/components/ui/Header";
import Carousel from "./components/Carousel";

const Stores = () => {
  return (
    <Section
      id="store"
      className="h-auto flex flex-col items-center justify-center bg-white gap-6 pt-14 px-0"
    >
      <Header>Available to Stores</Header>

      <Carousel />
    </Section>
  );
};

export default Stores;
