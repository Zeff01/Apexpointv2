import React from "react";
import heroImg from "@/public/assets/apexpoint-logo-name.png";
import Image from "next/image";

const CustomImg = () => {
  return (
    <div className="hidden w-[550px] h-[320px] lg:flex justify-end items-center relative pt-10">
      <Image
        className="h-full w-full object-contain min-w-[500px] absolute z-10 rounded-md shadow-custom"
        src={heroImg}
        alt="apexpoint"
      />
    </div>
  );
};

export default CustomImg;
