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
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { IconType } from "react-icons";

interface Store {
  name: string;
  img: StaticImageData;
}

interface Company {
  stores: Store[];
  socialicons: SocialIcon[];
}

interface SocialIcon {
  icon: IconType; // Use IconType from 'react-icons' for better type definition
  url: string;
}

const companies: Company[] = [
  {
    stores: [
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
    ],
    socialicons: [
      {
        icon: FaFacebook,
        url: "www.facebook.com",
      },
      {
        icon: FaTiktok,
        url: "www.facebook.com",
      },
      {
        icon: CiLinkedin,
        url: "www.facebook.com",
      },
      {
        icon: PiInstagramLogoFill,
        url: "www.facebook.com",
      },
      {
        icon: FaTwitter,
        url: "www.facebook.com",
      },
    ],
  },
];

const Footer = () => {
  return (
    <FooterSection
      companies={companies}
      backgroundColor="bg-chlorelief-springwood"
    />
  );
};

export default Footer;
