import chlorelief_img from "@/public/assets/chlorelief-logo.png";
import chlorelief_logo from "@/public/assets/apex-chlorelief-ourProducts.jpg";
import lubie_img from "@/public/assets/lubie-name.png";
import lubie_logo from "@/public/assets/apex-lubie-ourProducts.jpg";
import { StaticImageData } from "next/image";

// img products

// chloreleif
import ch_antiseptic_wash from "@/public/assets/chlorelief-products/antiseptic-wash.jpg";
import ch_calamine_60ml from "@/public/assets/chlorelief-products/calamine-60ml.jpg";
import ch_calamine_120ml from "@/public/assets/chlorelief-products/calamine-120ml.jpg";
import ch_isopropyl_alcohol from "@/public/assets/chlorelief-products/isopropyl-alcohol.jpg";

// lubie
import lb_10ml from "@/public/assets/lubie-products/10ml.jpg";
import lb_35ml from "@/public/assets/lubie-products/35ml.jpg";

export type ProductData = {
  name: string;
  title?: string;
  description?: string;
  benefits?: string[];
  img?: StaticImageData;
  logo?: { name: string; src: StaticImageData }[];
  url?: string;
};

export const productData: ProductData[] = [
  {
    name: "chlorelief",
    title: "YOUR FIRST LINE OF DEFENSE",
    description: `Meet ChloRelief: an OTC, steroid-free anti-itch and anti-rash
              lotion. Say goodbye to skin issues without worrying about thinning
              or harmful parabens.`,
    benefits: ["Antibacterial", "Sanitizer", "Paraben-Free"],
    img: chlorelief_img,
    logo: [
      { name: "Chlorelief Logo", src: chlorelief_logo },
      { name: "Chlorelief Antiseptic Wash", src: ch_antiseptic_wash },
      { name: "Chlorelief Calamine 60ml", src: ch_calamine_60ml },
      { name: "Chlorelief Calamine 120ml", src: ch_calamine_120ml },
      { name: "Chlorelief Isopropyl Alcohol", src: ch_isopropyl_alcohol },
    ],
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
    img: lubie_img,
    logo: [
      { name: "Lubie Logo", src: lubie_logo },
      { name: "Lubie 10ml", src: lb_10ml },
      { name: "Lubie 35ml", src: lb_35ml },
    ],
    url: "/lubie",
  },
];
