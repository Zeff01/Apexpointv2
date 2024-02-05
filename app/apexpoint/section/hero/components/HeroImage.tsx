import React from "react";
import heroImage from "@/public/assets/apex-hero-bg.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="w-full object-contain">
      <Image
        className="w-full shadow-custom rounded-md"
        src={heroImage}
        alt="Apexpoint"
      />
    </div>
  );
};

export default HeroImage;
