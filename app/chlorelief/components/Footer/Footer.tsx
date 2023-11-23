import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

//Nag coconflict iba kong file sa file ng ibang team pag nag de-structure kaya ganito manually nalang ginawa ko
import watson from "@/public/assets/watsons.png";
import watsons from "@/public/assets/w.png";
import rose from "@/public/assets/rose.png";
import rose1 from "@/public/assets/r.webp";
import mercury from "@/public/assets/mercury.png";
import mercury1 from "@/public/assets/m.png";
import laz from "@/public/assets/lazada.png";
import laz1 from "@/public/assets/l.png";
import shop from "@/public/assets/shopee.png";
import shop1 from "@/public/assets/s.png";
import logo1 from "@/public/assets/chloLogo.png";
import f from "@/public/assets/facebook.png";
import t from "@/public/assets/twitter.png";
import i from "@/public/assets/insta.png";

const Footer = () => {
  return (
    <div
      className=" bg-zinc-700
     px-10 sm:px-5 "
    >
      <div className="text-center pt-5">
        <span className="text-chlorelief-secondary-green font-bold text-2xl md:text-5xl text-green-500">
          Available Stores
        </span>
      </div>
      <div className="stores flex flex-wrap justify-around py-5 my-5 bg-white rounded px-10 ">
        <Image
          src={watson}
          alt="Watsons"
          width={200}
          height={80}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src={watsons}
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />

        <Image
          src={rose}
          alt="Rose"
          width={150}
          height={150}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src={rose1}
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />
        <Image
          src={mercury}
          alt="Mercury"
          width={280}
          height={80}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src={mercury1}
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />

        <Image
          src={laz}
          alt="Lazada"
          width={200}
          height={80}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src={laz1}
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />
        <Image
          src={shop}
          alt="Shopee"
          width={150}
          height={150}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src={shop1}
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />
      </div>
      <hr className="my-5" />
      <div className="img-container py-5 md:py-10  flex flex-col md:flex-row justify-around font-bold sm:flex-col items-center ">
        <div className="mb-5 md:mb-0">
          <a href="#">
            <Image
              src={logo1}
              alt="Logo"
              width={150}
              height={150}
              className="hover:opacity-25 ease-in-out duration-700 hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="text-chlorelief-secondary-green text-green-500 ">
          <ul className="list-none leading-loose">
            <li className="mb-2 md:mb-0">
              <a href="#" className={`${styles["custom-links"]}`}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={`${styles["custom-links"]}`}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" className={`${styles["custom-links"]}`}>
                Our Company
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <div className="icons text-center py-5 md:py-10">
        <span className="text-chlorelief-secondary-green text-green-500  font-bold">
          Subscribe to our Social media Accounts
        </span>
        <div className="flex justify-center mt-3 md:mt-5 gap-5">
          <Image
            src={f}
            alt="Facebook"
            width={35}
            height={35}
            className={`${styles["custom-icon"]}`}
          />
          <Image
            src={t}
            alt="Twitter"
            width={35}
            height={35}
            className={`${styles["custom-icon"]}`}
          />
          <Image
            src={i}
            alt="Instagram"
            width={35}
            height={35}
            className={`${styles["custom-icon"]}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
