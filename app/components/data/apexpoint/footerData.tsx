export type FooterDataType = {
  title: string;
  list: { icon?: string; information: string }[];
};

export const footerData: FooterDataType[] = [
  {
    title: "Contact Us",
    list: [
      {
        icon: "fone", // insert here the img/icon of fone
        information: "+639-xxxxxxxxx",
      },
      {
        icon: "fone", // insert here the img/icon of email
        information: "info@gmail.com",
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
        icon: "shopee",
        information: "Shopee",
      },
      {
        icon: "lazada",
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
