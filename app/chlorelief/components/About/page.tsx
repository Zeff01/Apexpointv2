import React from "react";
import Image from "next/image";
import abtImg from "@/public/assets/chloAbout.jpg";
import serv from "@/public/assets/services-icon.png";
import ship from "@/public/assets/shipping-icon.png";
import ret from "@/public/assets/return-icon.png";
import payment from "@/public/assets/payment-icon.png";
const About = () => {
  return (
    <div className="px-10 py-10" id="about">
      <div className="py-5 md:py-10  flex flex-col flex-wrap md:flex-row justify-around  sm:flex-col ">
        <div className="mb-5 md:mb-0 md:w-1/3 w-full text-chlorelief-secondary-gray md:text-start text-start">
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
            src={abtImg}
            alt="About Image"
            width={750}
            height={350}
            className="rounded"
          />
        </div>
      </div>
      <div className="py-5 md:py-10  bg-chlorelief-primary-gray bg-gray-300 rounded">
        <div className="flex flex-col md:flex-row justify-around  sm:flex-col   items-center">
          <div>
            <h2 className="text-2xl text-chlorelief-primary-green font-bold mb-5">
              Services
            </h2>
            <Image
              src={serv}
              alt="services"
              width={80}
              height={50}
              className="rounded"
            />
          </div>
          <div>
            <h2 className="text-2xl text-chlorelief-primary-green font-bold mb-5">
              Services
            </h2>
            <Image
              src={ship}
              alt="shipping"
              width={80}
              height={50}
              className="rounded"
            />
          </div>
          <div>
            <h2 className="text-2xl text-chlorelief-primary-green font-bold mb-5">
              Return
            </h2>
            <Image
              src={ret}
              alt="return"
              width={80}
              height={50}
              className="rounded"
            />
          </div>
          <div>
            <h2 className="text-2xl text-chlorelief-primary-green font-bold mb-5">
              Services
            </h2>
            <Image
              src={payment}
              alt="payment"
              width={80}
              height={50}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
