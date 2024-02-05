import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const IconClassName = "hover:scale-110 hover:text-black";

export type SocialsData = {
  icon: JSX.Element;
  link: string;
};

export const socialsData: SocialsData[] = [
  {
    icon: <FaFacebook size={23} className={IconClassName} />,
    link: "https://www.facebook.com/chlorelief",
  },
  {
    icon: <FaInstagram size={23} className={IconClassName} />,
    link: "https://www.instagram.com/chlorelief/?img_index=1",
  },
  {
    icon: <FaXTwitter size={23} className={IconClassName} />,
    link: "https://twitter.com/chlorelief",
  },
  {
    icon: <FaLinkedin size={23} className={IconClassName} />,
    link: "https://www.linkedin.com/in/apexpoint-pharmaceutical-and-medical-supplies-manufacturing-a66524202/",
  },
  {
    icon: <FaYoutube size={23} className={IconClassName} />,
    link: "https://www.youtube.com/",
  },
];
