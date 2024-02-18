import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import mainImg from "@/public/assets/chlorelief-products/chlorelief-white-bg.jpg";
import serv from "@/public/assets/chlorelief-assets/services.png";
import ship from "@/public/assets/lubie-assets/shipping.png";
import ret from "@/public/assets/chlorelief-assets/return-icon.png";
import payment from "@/public/assets/chlorelief-assets/payment.png";

interface About {
  title: string;
  img: StaticImageData;
}

const aboutData: About[] = [
  { title: "services", img: serv },
  { title: "shipping", img: ship },
  { title: "return", img: ret },
  { title: "payment", img: payment },
];

const About = () => {
  const aboutText = [
    "Paraben-free paraben is not a ",
    "natural product and is not",
    "something you apod find naturally",
    "in the body. Using skin products",
    "with paraben will make skin dry,",
    "brittle, cracked, and swollen.",
    "Also, paraben can cause many",
    "chemicals to enter the body that",
    "that should not be there.",
  ];

  return (
    <div id="about" className="font-inter h-auto sm:h-full">
      <h2 className="text-chlorelief-chateaugreen font-bold text-center text-Header-Mobile lg:text-header-Default xl:text-Header-Desktop">
        ABOUT THE BRAND
      </h2>
      <div className="flex flex-row-reverse items-center justify-evenly my-10">
        <div className="text-Body-Default sm:text-Body-Desktop">
          <div className="text-gray-400 max-w-full-lg text-center md:text-left">
            <h2 className="my-4">CHLORELIEF</h2>
            {aboutText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <Image
          src={mainImg}
          alt="About Image"
          className="hidden md:block object-scale-down"
        />
      </div>
      <div className="hidden md:flex justify-evenly">
        {aboutData.map((data, index) => (
          <div key={index}>
            <h2 className="text-chlorelief-chateaugreen font-bold ">
              {data.title}
            </h2>
            <div className="h">
              <Image
                src={data.img}
                alt="icon"
                width={80}
                height={20}
                className="py-2 hue-rotate-90"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
