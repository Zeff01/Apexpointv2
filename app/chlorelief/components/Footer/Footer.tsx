import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
const Footer = () => {
  return (
    <div
      className=" bg-zinc-700
     px-10 sm:px-5 "
    >
      <div className="text-center pt-5">
        <span className="text-chlorelief-secondary-green font-bold text-2xl md:text-5xl">
          Available Stores
        </span>
      </div>
      <div className="stores flex flex-wrap justify-around py-5 my-5 bg-white rounded ">
        <Image
          src="/assets/watsons.png"
          alt="Watsons"
          width={200}
          height={80}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/w.png"
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />

        <Image
          src="/assets/rose.png"
          alt="Rose"
          width={150}
          height={150}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/r.webp"
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/mercury.png"
          alt="Mercury"
          width={280}
          height={80}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/m.png"
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />

        <Image
          src="/assets/lazada.png"
          alt="Lazada"
          width={200}
          height={80}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/l.png"
          alt="Watsons"
          width={60}
          height={30}
          className={`block md:hidden ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/shopee.png"
          alt="Shopee"
          width={150}
          height={150}
          className={`hidden md:block ${styles["custom-store"]}`}
        />
        <Image
          src="/assets/s.png"
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
              src="/assets/chloLogo.png"
              alt="Logo"
              width={150}
              height={150}
              className="hover:opacity-25 ease-in-out duration-700 hover:cursor-pointer"
            />
          </a>
        </div>
        <div className="text-chlorelief-secondary-green ">
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
        <span className="text-chlorelief-secondary-green   font-bold">
          Subscribe to our Social media Accounts
        </span>
        <div className="flex justify-center mt-3 md:mt-5 gap-5">
          <Image
            src="/assets/facebook.png"
            alt="Facebook"
            width={35}
            height={35}
            className={`${styles["custom-icon"]}`}
          />
          <Image
            src="/assets/twitter.png"
            alt="Twitter"
            width={35}
            height={35}
            className={`${styles["custom-icon"]}`}
          />
          <Image
            src="/assets/insta.png"
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
