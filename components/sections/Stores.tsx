<<<<<<< HEAD:app/components/section/Store/Stores.tsx
"use client";
import React from "react";
import Section from "@/app/components/ui/Section";
import Header from "@/app/components/ui/Header";
import Carousel from "./components/Carousel";

const Stores = () => {
  return (
    <Section id="store" className="hidden lg:block ">
      <Header className="pb-4">Available to Stores</Header>
      <Carousel />
    </Section>
  );
};

export default Stores;
=======
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
import Section from "@/components/ui/Section";
import Header from "@/components/ui/Header";
import Carousel from "@/components/carousel/Carousel";

const Stores = () => {
  return (
    <Section id="store" className="hidden lg:block  mt-28 ">
      <Header className="pb-4">Available to Stores</Header>
      <Carousel />
    </Section>
  );
};

export default Stores;
>>>>>>> 5f5d997 (fix structure):components/sections/Stores.tsx
