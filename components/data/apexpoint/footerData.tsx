import { StaticImageData } from "next/image";
import Link from "next/link";
import { phone, email, shoppingbag, lazada } from "@/public/assets/apexpoint";
export type FooterDataType = {
  title: string;
  list: { icon?: StaticImageData; information: React.ReactNode }[];
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
      { information: (<> 
        <Link className="text-bold" href="#About" passHref> About Us </Link>
        </>), },
      { information: (<> 
        <Link className="text-bold" href="#Products" passHref> Our Products </Link>
        </>), },
      { information: "Customer Reviews" },
      { information: "Brands" },
    ],
  },
  {
    title: "Our Shops",
    list: [
      {
        icon: shoppingbag,
        information:  (<> 
        <Link className="text-bold" href="https://shopee.ph/apexpoint" passHref> Shopee </Link>
        </>),
      },
      {
        icon: lazada,
        information: (
          <> 
          <Link href="https://www.lazada.com.ph/shop/apexpoint1629967874/" passHref> Lazada </Link>
          </>
          ),
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
