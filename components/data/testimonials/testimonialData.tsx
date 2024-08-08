import crTestimonialImg1 from "@/public/assets/chlorelief-assets/cr_testimonial_1_img.webp";
import crTestimonialImg2 from "@/public/assets/chlorelief-assets/cr_testimonial_2_img.webp";
import crTestimonialImg3 from "@/public/assets/chlorelief-assets/cr_testimonial_3_img.webp";
import lbTestimonialImg1 from "@/public/assets/lubie-assets/lubie_testimonial_1_img.webp";
import lbTestimonialImg2 from "@/public/assets/lubie-assets/lubie_testimonial_2_img.webp";
import lbTestimonialImg3 from "@/public/assets/lubie-assets/lubie_testimonial_3_img.webp";
import { VariantType } from "@/components/sections/testimonials/page";
import { StaticImageData } from "next/image";

export type TestimonialType = {
  name: string;
  comment: string;
  img: StaticImageData;
  rating: number;
  variant?: VariantType;
};

export const testimonialData: TestimonialType[] = [
  {
    name: "genievesantos",
    comment: `It's good for healing and protection for prickly heat and allergies. This is what healed mine and even after my heapt bumps improved, I'm still applying it every after bath for protection.`,
    img: crTestimonialImg1,
    rating: 5,
    variant: "chlorelief"
  },
  {
    name: "bellepontejos",
    comment:
      `Recommend sa akin ng friend ko, item is well packed , fast delivered.`,
    img: crTestimonialImg2,
    rating: 5,
    variant: "chlorelief"
  },
  {
    name: "princess_33",
    comment:
      `Complete package and approachable si seller😊`,
    img: crTestimonialImg3,
    rating: 5,
    variant: "chlorelief"
  },
  {
    name: "precious018",
    comment: `ok sya matagal mawala ang pagka sticky nya ok syang gamitin sa face when shaving or even underarm`,
    img: lbTestimonialImg1,
    rating: 5,
    variant: "lubie"
  },
  {
    name: "mayetnubla",
    comment: `This is my order, and it's so legit and effective. Naka bubble wrap din Sha at may freebie pang large eco bag. Thanks seller`,
    img: lbTestimonialImg2,
    rating: 5,
    variant: "lubie"
  },
  {
    name: "znarf513",
    comment: `Thank you to the seller, a very nice product! Super balot ng bubble wrap para talaga ng sealed and mabilis dumating. May freebie pa. Thanks to the seller :)`,
    img: lbTestimonialImg3,
    rating: 5,
    variant: "lubie"
  },
];
