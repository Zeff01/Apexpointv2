import testimonialImg1 from "@/public/assets/chlorelief-assets/ap_testimonial_1_img.jpeg";
import testimonialImg2 from "@/public/assets/chlorelief-assets/ap_testimonial_2_img.jpeg";
import testimonialImg3 from "@/public/assets/chlorelief-assets/ap_testimonial_3_img.jpeg";
import { StaticImageData } from "next/image";

export type TestimonialType = {
  name: string;
  comment: string;
  img: StaticImageData;
};

export const testimonialData: TestimonialType[] = [
  {
    name: "Mark Ivor Glorioso",
    comment:
      "Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use.",
    img: testimonialImg1,
  },
  {
    name: "John D Smith",
    comment:
      "Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use.",
    img: testimonialImg2,
  },
  {
    name: "Lachica Madrid",
    comment:
      "Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use.",
    img: testimonialImg3,
  },
];
