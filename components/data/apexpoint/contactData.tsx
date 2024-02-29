import { MdLocationOn, MdOutlineShoppingBag, MdCall } from "react-icons/md";
export type contactDataType = {
  title: string;
  icon: React.ComponentType<any>;
  information: { details: string }[];
};

export const contactData: contactDataType[] = [
  {
    title: "Online Stores",
    icon: MdOutlineShoppingBag,
    information: [
      {
        details: "• Shopee Link",
      },
      {
        details: "• Lazada Link",
      },
    ],
  },
  {
    title: "Address",
    icon: MdLocationOn,
    information: [
      {
        details: "Quezon City",
      },
    ],
  },
  {
    title: "Phone",
    icon: MdCall,
    information: [
      {
        details: "+63 995 577 6733",
      },
    ],
  },
];
