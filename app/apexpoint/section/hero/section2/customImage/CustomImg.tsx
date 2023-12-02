import React from "react";
import heroImg from "@/public/assets/apexpoint-logo-name.png";
import Image from "next/image";

const CustomImg = () => {
  return (
    <div className="flex justify-end items-end relative pt-10 opacity-0 w-[560px] h-[330px] sm:opacity-10 md:opacity-30 lg:opacity-100">
      <Image
        className="h-full w-full object-contain min-w-[500px] absolute z-10 rounded-md shadow-custom"
        src={heroImg}
        alt="apexpoint"
      />
    </div>
  );
};

export default CustomImg;
