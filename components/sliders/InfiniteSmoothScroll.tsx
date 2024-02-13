import { ProductData } from "@/app/components/data/apexpoint/productData";
import Image from "next/image";
import React from "react";

const InfiniteSmoothScroll = ({ name, logo }: ProductData) => {
  const carouselContent = logo?.map((item) => (
    <div key={item.name} className="slide">
      <Image src={item.src} alt={`${name}: ${item.name}`} />
    </div>
  ));
  return (
    <div className="slider">
      <div className="slide-track">{carouselContent}</div>
    </div>
  );
};

export default InfiniteSmoothScroll;
