import ap_testimonial_1_img from "@/public/assets/ap_testimonial_1_img.jpeg";
import ap_testimonial_2_img from "@/public/assets/ap_testimonial_2_img.jpeg";
import ap_testimonial_3_img from "@/public/assets/ap_testimonial_3_img.jpeg";
import { StaticImageData } from "next/image";

export type TestimonialType = {
  id: number;
  customer_name: string;
  review: string;
  img: StaticImageData;
  rate: number;
  review_link: string;
};

export const data: TestimonialType[] = [
  {
    id: 1,
    customer_name: "nicomiguelcatacutan",
    review: `" Ang ganda sa akin ni baby nawala yung pangangangati, dami kona nagamit sa skin nya, buti nlang nkita ko tomg brand nato, nwala n yung mga katikati ni baby "`,
    img: ap_testimonial_1_img,
    rate: 5,
    review_link:
      "https://shopee.ph/ChloRelief-Baby-Anti-Itch-And-Anti-Rash-Lotion-120ml-i.391981791.9017357979?sp_atk=2ef9c7f1-abd8-471c-9e8f-3a7c32282b32&xptdk=2ef9c7f1-abd8-471c-9e8f-3a7c32282b32",
  },
  {
    id: 2,
    customer_name: "mhayerabusa",
    review: `" This is my second time to order from this shop, super bilis ng shipping and i can say that its very effective sa mga insect bites. Thank you seller, rider at more power shopee. ❤️ "`,
    img: ap_testimonial_2_img,
    rate: 5,
    review_link:
      "https://shopee.ph/ChloRelief-Anti-Itch-And-Anti-Rash-Lotion-60ml-i.391981791.3005988216?sp_atk=d44f5fc8-51b6-41d0-a0b3-f66ff1e4b9e8&xptdk=d44f5fc8-51b6-41d0-a0b3-f66ff1e4b9e8",
  },
  {
    id: 3,
    customer_name: "gesaretardo",
    review: `" Order received in just 4 days, complete and correct items. Secured and well packed! Thank you! "`,
    img: ap_testimonial_3_img,
    rate: 5,
    review_link:
      "https://shopee.ph/LUBIE-LUBIE-The-First-Multi-Purpose-FDA-Registered-LUBE-in-the-Philippines-10ML-i.92328166.11892269947?sp_atk=21a52990-9b20-421b-a964-a6baed6d74ee&xptdk=21a52990-9b20-421b-a964-a6baed6d74ee",
  },
];
