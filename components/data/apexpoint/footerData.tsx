import { StaticImageData } from "next/image";
import { phone, email, shoppingbag, lazada } from "@/public/assets/apexpoint";
export type FooterDataType = {
  title: string;
  list: { icon?: StaticImageData; information: string }[];
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
      { information: "About Us" },
      { information: "Our Products" },
      { information: "Customer Reviews" },
      { information: "Brands" },
    ],
  },
  {
    title: "Our Shops",
    list: [
      {
        icon: shoppingbag,
        information: "Shopee",
      },
      {
        icon: lazada,
        information: "Lazada",
      },
    ],
  },
  {
    title: "Others",
    list: [
      { information: "Supports" },
      { information: "Services" },
      { information: "Terms and Conditions" },
      { information: "Privacy Policy" },
    ],
  },
];
