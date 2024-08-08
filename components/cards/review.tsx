import React from "react";
import Stars from "@/app/lubie/_modules/stars";
import Image, { StaticImageData } from "next/image";
import { TestimonialType } from "../data/testimonials/testimonialData";

const Cards = ({ name, comment, img, rating }: TestimonialType) => {
  return (
    <div className="rounded-md h-full p-4 flex flex-col gap-4 bg-white max-w-[350px] sm:shadow-md">
      <div className="w-full flex justify-between items-center">
        <Stars userRating={rating} />
        {/* <div className="my-6">
          <Image
            src="/assets/user-quote.png"
            alt=""
            width={50}
            height={0}
            layout="responsive"
          />
        </div> */}
      </div>
      <div className="flex flex-col justify-between h-full gap-2">
        <div>
          <p className="text-sm sm:text-base">{comment}</p>
        </div>
        <div className="flex border-t-2 w-full items-center justify-center gap-4">
          <Image
            className="w-1/4 rounded-full mt-2 object-scale-auto sm:object-none"
            src={img}
            alt={name}
            width={60}
            height={0}
          />
          <div className="w-3/4 flex flex-col justify-center py-2">
            <p className="text-sm sm:text-base md:text-Body-Default lg:text-xl xl:text-2xl font-bold">
              {name}
            </p>
            <p className="text-sm sm:text-base md:text-Body-Default">CUSTOMER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
