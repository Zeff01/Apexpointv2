import { StaticImageData } from "next/image";
import Link from "next/link";
import { phone, email, shoppingbag, lazada } from "@/public/assets/apexpoint";
export type FooterDataType = {
  title: string;
  list: { icon?: StaticImageData;  href?: string; information: string; }[];
 
};

export const footerData: FooterDataType[] = [
  {
    title: "Contact Us",
    list: [
      {
        icon: phone, // insert here the img/icon of fone
        information: "+63 995 577 6733",
      },
      {
        icon: email, // insert here the img/icon of email
        information: "apexpointph@gmail.com",
      },
    ],
  },
  {
    title: "Information",
    list: [
      { information: "About Us",
    href:"#about" },
      { information: "Our Products",href:"#product" },
      { information: "Customer Reviews",href:"#"},
      { information: "Brands", href:"#" },
    ],
  },
  {
    title: "Our Shops",
    list: [
      {
        icon: shoppingbag,
        information:  "Shopee",
        href: "https://shopee.ph/apexpoint",
      },
      {
        icon: lazada,
        information: "Lazada",
        href: "https://www.lazada.com.ph/shop/apexpoint1629967874/",
      },
    ],
  },
  {
    title: "Others",
    list: [
      { information: "Supports", href: "" },
      { information: "Services", href: "" },
      { information: "Terms and Conditions",  href: "" },
      { information: "Privacy Policy", href: ""},
    ],
  },
];
