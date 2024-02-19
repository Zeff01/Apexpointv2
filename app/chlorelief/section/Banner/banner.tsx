import React from "react";
import Image from "next/image";
import bannerImg from "@/public/assets/chlorelief-products/chlorelief-landscape.jpg";
const Banner = () => {
  return (
    <div className="hidden lg:block object-cover w-full">
      <Image
        src={bannerImg}
        alt="Banner"
        width={1000}
        height={500}
        className="object-cover w-full"
      />
    </div>
  );
};

export default Banner;
