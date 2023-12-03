// imported imgs
import aboutIcon from "@/public/assets/apex-about-icons/about.png";
import missionIcon from "@/public/assets/apex-about-icons/mission.png";
import visionIcon from "@/public/assets/apex-about-icons/vision.png";
import { StaticImageData } from "next/image";

type AboutType = {
  icon: StaticImageData;
  header: string;
  info: string;
};

export const AboutData: AboutType[] = [
  {
    icon: aboutIcon,
    header: "About",
    info: "ApexPoint Pharmaceutical and Medical Supplies Manufacturing OPC FDA-Licensed.",
  },
  {
    icon: missionIcon,
    header: "Mission",
    info: "To enhance and nurture the wellness of every individual by providing innovative and cost-efficient products at a competetive price.",
  },
  {
    icon: visionIcon,
    header: "Vision",
    info: "To be the market leader in the health and wellness industry while making a positive social impact.",
  },
];
