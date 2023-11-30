import React from "react";
import Image from "next/image";

interface IconsProps {
  imageUrl: string;
}

export default function Icons({ imageUrl }: IconsProps) {
  return (
    <div className="flex flex-col items-center space-y-3 ">
      <div className="rounded-full bg-white p-2 w-[70px] h-[70px] flex items-center justify-center  ">
        <Image className="scale-75 z-0" src={imageUrl} alt="hero icon" />
      </div>
      <p className="w-3/4 text-center">Lorem ipsum dolor sit amet</p>
    </div>
  );
}
