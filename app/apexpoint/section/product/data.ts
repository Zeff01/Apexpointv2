import chlorelief from "@/public/assets/chlorelief-logo.png";
import chlorelief_img from "@/public/assets/chlorelief_img.svg";
import lubie from "@/public/assets/lubie-name.png";
import lubie_img from "@/public/assets/lubie_img.svg";
import { StaticImageData } from "next/image";

export type Data = {
  name: string;
  title: string;
  description: string;
  benefits: string[];
  img: StaticImageData;
  logo: string;
  url: string;
};

export const data: Data[] = [
  {
    name: "chlorelief",
    title: "YOUR FIRST LINE OF DEFENSE",
    description: `Meet ChloRelief: an OTC, steroid-free anti-itch and anti-rash
              lotion. Say goodbye to skin issues without worrying about thinning
              or harmful parabens.`,
    benefits: ["Antibacterial", "Sanitizer", "Paraben-Free"],
    img: chlorelief,
    logo: chlorelief_img,
    url: "/chlorelief",
  },
  {
    name: "lubie",
    title: "THE FIRST MULTI-PURPOSE FDA REGISTERED LUBE IN THE PH",
    description: `glycerin-free, paraben free, odor-free, water-based lubricant that
              reduces discomfort from dryness and friction.`,
    benefits: [
      "Shaving Gel for Facial and",
      "Body Hair",
      "Anti-Chafe Solution(Skin Irritation from Rubbing)",
      "Anti-Frizz for Hair",
    ],
    img: lubie,
    logo: lubie_img,
    url: "/lubie",
  },
];
