import { ReactNode } from "react";
import LocationIcon from "@/app/apexpoint/section/contact/components/icons/LocationIcon";
import MailIcon from "@/app/apexpoint/section/contact/components/icons/MailIcon";
import MobilePhoneIcon from "@/app/apexpoint/section/contact/components/icons/MobilePhoneIcon";
import LandlinePhoneIcon from "@/app/apexpoint/section/contact/components/icons/LandlinePhoneIcon";

export type LinksData = {
  Icon: ReactNode;
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
};

export const linksData: LinksData[] = [
  {
    Icon: <LocationIcon />,
    title: "Location",
    subtitle: "Quezon City",
    link: "https://www.waze.com/live-map/directions/apexpoint-pharmaceutical-and-medical-supplies-manufacturing-e.-rodriguez-sr.-ave-295-4th-floor-m-quezon-city?to=place.w.79298706.793118134.17565687",
    linkText: "Street view",
  },
  {
    Icon: <MailIcon />,
    title: "Email",
    subtitle: "apexpointph@gmail.com",
    link: "mailto:apexpointph@gmail.com",
    linkText: "Message Us",
  },
  {
    Icon: <MobilePhoneIcon />,
    title: "Phone",
    subtitle: "+63 995 577 6733",
    link: "tel:+639955776733",
    linkText: "Call Us",
  },
  {
    Icon: <LandlinePhoneIcon />,
    title: "Phone",
    subtitle: "7341-4276",
    link: "tel:7341-4276",
    linkText: "Call Us",
  },
];
