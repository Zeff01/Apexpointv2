import React from "react";
import heroImg from "@/public/assets/apex-hero-bg.png";
import Image from "next/image";

const CustomImg = () => {
  return (
    // <div className="hidden md:flex justify-end items-end relative pt-10 opacity-0 w-[560px] h-[330px] sm:opacity-10 md:opacity-30 lg:opacity-100">
    <div className="hidden md:block absolute md:w-3/4 w-1/2 object-cover">
      <Image
        className="h-auto w-full max-w-[650px] z-10 rounded-md shadow-custom"
        src={heroImg}
        alt="apexpoint"
      />
    </div>
  );
};

export default CustomImg;
