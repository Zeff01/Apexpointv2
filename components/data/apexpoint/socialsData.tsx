import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const IconClassName = 'hover:scale-110 hover:text-black';

export type SocialsData = {
  icon: JSX.Element;
  link: string;
};

export const socialsData: SocialsData[] = [
  {
    icon: <FaFacebook size={23} className={IconClassName} />,
    link: 'https://www.facebook.com/chlorelief',
  },
  {
    icon: <FaInstagram size={23} className={IconClassName} />,
    link: 'https://www.instagram.com/chlorelief/?img_index=1',
  },
  {
    icon: <FaXTwitter size={23} className={IconClassName} />,
    link: 'https://twitter.com/chlorelief',
  },
  {
    icon: <FaTiktok size={23} className={IconClassName} />,
    link: 'https://www.tiktok.com/@lubie.chlorelief?_r=1&_t=ZS-95gc1Xsd6uW',
  },
];
