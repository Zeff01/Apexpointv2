import React from "react";
import Image, { StaticImageData } from "next/image";
import serv from "@/public/assets/services.png";
import ship from "@/public/assets/shipping.png";
import ret from "@/public/assets/return-icon.png";
import payment from "@/public/assets/payment.png";
import mainImg from "@/public/assets/chlorelief-products/chlorelief-white-bg.jpg";

const About = () => {
  interface About {
    title: string;
    img: StaticImageData;
  }

  const about: About[] = [
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
    {
      title: "payment",
      img: payment,
    },
   
  ];
  return (
    <div className="font-saira-condensed sm:py-40 md:py-40 lg:py-20 " id="about">
       <h2 className=" text-chlorelief-secondary-green text-center text-green-700 text-4xl sm:mt-20 md:mt-5 sm font-semibold">
            ABOUT THE BRAND
          </h2>
      <div className="py-5 flex flex-col flex-wrap md:flex-row-reverse justify-around items-end sm:flex-col md:items-center ">
        <div className="mb-5 lg:w-1/3 md:mx-20 text-chlorelief-secondary-gray sm:text-start md:text-center">
          <div className="text-gray-400 text-start pb-8">
            <h5 className="mt-5 font-light text-xl text-center sm:text-center md:text-center lg:text-left">CHLORELIEF</h5>
            <p className="mt-10 text-center sm:text-center text-[12px] md:text-center md:text-2xl lg:text-left ">
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
            layout="responsive"
            width={650}
            height={550}
            className="rounded mt-10 hidden sm:hidden md:hidden lg:block"
          />
        </div>
      </div>
      <div className="py-5 md:py-10  bg-chlorelief-primary-gray  rounded">
        <div>
          <div className="hidden items-center sm:hidden flex-row md:flex justify-evenly md:items-start">
            {about.map((d, index) => (
              <div key={index}>
                <h2 className="text-green-500 font-bold">{d.title}</h2>
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
