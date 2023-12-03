import React from "react";
import Image, { StaticImageData } from "next/image";
import serv from "@/public/assets/services.png";
import ship from "@/public/assets/shipping.png";
import ret from "@/public/assets/return-icon.png";
import payment from "@/public/assets/payment.png";
import mainImg from "@/public/assets/chloAbout.jpg";

const About = () => {
  interface About {
    title: string;
    img: StaticImageData;
  }

  const about: About[] = [
    {
      title: "payment",
      img: payment,
    },
    {
      title: "services",
      img: serv,
    },
    {
      title: "shipping",
      img: ship,
    },
    {
      title: "return",
      img: ret,
    },
  ];
  return (
    <div className="px-10 py-10" id="about">
      <div className="py-5 md:py-10  flex flex-col flex-wrap md:flex-row justify-around  sm:flex-col ">
        <div className="mb-5  md:w-1/3 w-full text-chlorelief-secondary-gray md:text-start text-start">
          <h2 className=" text-chlorelief-secondary-green text-green-700 text-5xl md:mt-5 font-bold">
            ABOUT THE BRAND
          </h2>
          <div className="">
            <h5 className="mt-5 font-bold">CHLORELIEF</h5>
            <p className="mt-10 text-2xl">
              Paraben-free – paraben is not a natural product and is not
              something you&apos;d find naturally in the body. Using skin
              products with paraben will make skin dry, brittle, cracked, and
              swollen. Also, paraben can cause many chemicals to enter the body
              that should not be there.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={mainImg}
            alt="About Image"
            width={750}
            height={350}
            className="rounded mt-10"
          />
        </div>
      </div>
      <div className="py-5 md:py-10  bg-chlorelief-primary-gray bg-gray-300 rounded">
        <div>
          <div className="flex flex-col md:flex-row justify-around  items-center">
            {about.map((d, index) => (
              <div key={index}>
                <h2 className="text-white font-bold">{d.title}</h2>
                <Image
                  src={d.img}
                  alt="icon"
                  width={80}
                  height={20}
                  className="py-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
