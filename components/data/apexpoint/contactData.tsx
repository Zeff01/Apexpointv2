import { MdLocationOn, MdOutlineShoppingBag, MdCall } from "react-icons/md";
import Link from "next/link"
export type contactDataType = {
  title: string;
  icon: React.ComponentType<any>;
  information: { details:React.ReactNode }[];
};

export const contactData: contactDataType[] = [
  {
    title: "Online Stores",
    icon: MdOutlineShoppingBag,
    information: [
      {
        details:(
        <> 
        <Link className="text-bold" href="https://shopee.ph/apexpoint" passHref> Shopee </Link>
        </>
        ),
      },
      {
        details:(
        <> 
        <Link href="https://www.lazada.com.ph/shop/apexpoint1629967874/" passHref> Lazada </Link>
        </>
        ),
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
