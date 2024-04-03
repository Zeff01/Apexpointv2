import { MdLocationOn, MdOutlineShoppingBag, MdCall } from 'react-icons/md';
import Link from 'next/link';
export type contactDataType = {
  title: string;
  icon: React.ComponentType<any>;
  information: { details?: string; href?: string; info?: string }[];
};

export const contactData: contactDataType[] = [
  {
    title: 'Online Stores',
    icon: MdOutlineShoppingBag,
    information: [
      {
        details: 'Shopee',
        href: 'https://shopee.ph/apexpoint',
      },
      {
        details: 'Lazada',
        href: 'https://www.lazada.com.ph/shop/apexpoint1629967874/',
      },
    ],
  },
  {
    title: 'Address',
    icon: MdLocationOn,
    information: [
      {
        info: 'Quezon City',
      },
    ],
  },
  {
    title: 'Mobile',
    icon: MdCall,
    information: [
      {
        info: '+63 995 577 6733',
      },
    ],
  },
  {
    title: 'Landline',
    icon: MdCall,
    information: [
      {
        info: '+632 7341 4276',
      },
    ],
  },
];
