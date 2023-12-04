import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./page.module.css";
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
import aboutLogo from "@/public/assets/chloLogo.png";
import facebook from "@/public/assets/facebook.png";
import twitter from "@/public/assets/twitter.png";
import instagram from "@/public/assets/insta.png";

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
    name: "watsons",
    img: watsons,
  },
  {
    name: "rose",
    img: rose,
  },
  {
    name: "mercury",
    img: mercury,
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

const companyMobile: Company[] = [
  {
    name: "watsons",
    img: watsonsMobile,
  },
  {
    name: "rose",
    img: roseMobile,
  },
  {
    name: "mercury",
    img: mercuryMobile,
  },
  {
    name: "lazada",
    img: lazadaMobile,
  },
  {
    name: "shopee",
    img: shopeeMobile,
  },
];

const social: SocialIcon[] = [
  {
    name: "facebook",
    img: facebook,
  },
  {
    name: "twitter",
    img: twitter,
  },
  {
    name: "instagram",
    img: instagram,
  },
];

const Footer = () => {
  return (
<div>
    <div className="text-center pt-5 mt-18">
        <span className="text-chlorelief-secondary-green font-semibold text-2xl md:text-xl text-green-500">
          Available in stores
        </span>
      </div>
      <div className="stores flex flex-wrap justify-around py-5 my-5 px-10 items-center">
        {companies.map((d, index) => (
          <div key={index}>
            <Image
              src={d.img}
              alt={d.name}
              width={130}
              height={80}
              className={`hidden md:block ${styles["custom-store"]}`}
            />
          </div>
        ))}
        {companyMobile.map((d, index) => (
          <Image
            src={d.img}
            alt={d.name}
            width={60}
            height={30}
            className={`block md:hidden ${styles["custom-store"]}`}
            key={index}
          />
        ))}
      </div>
    <div
      className=" bg-zinc-700
     px-10 py-5  mt-5 " >
 
      <div className="img-container   flex flex-col justify-center items-center ">
      <div className="mb-5 md:mb-0 flex flex-wrap justify-center ">
          <a href="javascript:void(0)">
            <Image
              src={aboutLogo}
              alt="Logo"
              width={150}
              height={150}
              className="hover:opacity-25 ease-in-out duration-700 hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="text-chlorelief-secondary-green text-green-500 py-3 text-sm ">
          <ul className="list-none leading-loose space-around flex">
            <li className="mb-2 md:mb-0">
              <a
                href="javascript:void(0)"
                className={`${styles["custom-links"]}`}
              >
               ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className={`${styles["custom-links"]}`}>
           CONTACT
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className={`${styles["custom-links"]}`}
              >
             OUR COMPANY
              </a>
            </li>
          </ul>
        </div>
      </div>
     
      <div className="icons text-center  ">
        <span className="text-chlorelief-secondary-green text-green-500  font-bold">
          Subscribe to Us!
        </span>
        <div className="flex justify-center mt-3 md:mt-5 gap-5">
          {social.map((d, index) => (
            <Image
              src={d.img}
              alt={d.name}
              width={25}
              height={25}
              className={`${styles["custom-icon"]}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
