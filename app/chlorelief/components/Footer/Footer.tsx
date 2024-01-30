import React from "react";
import Image, { StaticImageData } from "next/image";
import watsons from "@/public/assets/watsons.png";
import watsonsMobile from "@/public/assets/watsonsMobile.png";
import rose from "@/public/assets/rose.png";
import roseMobile from "@/public/assets/roseMobile.webp";
import mercury from "@/public/assets/mercury.png";
import mercuryMobile from "@/public/assets/mercuryMobile.png";
import lazada from "@/public/assets/lazada.png";
import lazadaMobile from "@/public/assets/lazadaMobile.png";
import shopee from "@/public/assets/shopee.png";
import shopeeMobile from "@/public/assets/shopeeMobile.png";
import FooterSection from "./Links";


interface Company {
  name: string;
  img: StaticImageData;
}

interface SocialIcon {
  name: string;
  img: StaticImageData;
}

const companies: Company[] = [
   {
    name: "mercury",
    img: mercury,
  },
  {
    name: "watsons",
    img: watsons,
  },
  {
    name: "rose",
    img: rose,
  },
  {
    name: "lazada",
    img: lazada,
  },
  {
    name: "shopee",
    img: shopee,
  },
];


const Footer = () => {
  return (
<div>
  <div className="text-center">
    {/* Add any content for the header */}
  </div>
  <div className="stores flex-wrap justify-around py-5 my-5 px-10 items-center hidden sm:hidden md:hidden lg:flex ">
    {companies.map((d, index) => (
      <div className="grayscale"  key={index}>
        <Image
          src={d.img}
          alt={d.name}
          width={130}
          height={80}
        />
      </div>
    ))}
  </div>
  <FooterSection/>
</div>


  );
};

export default Footer;
