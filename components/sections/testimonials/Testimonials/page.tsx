"use client";
import React from "react";
import Cards from "@/components/cards/review";
import Cardslide from "./cardslides";
import {
  TestimonialType,
  testimonialData,
} from "@/components/data/chlorelief/testimonialData";

// Define the type for the 'variant' prop
type VariantType = "chlorelief" | "lubie";

interface TestimonialsProps {
  variant: VariantType;
}

function Testimonials({ variant }: TestimonialsProps) {
  const testimonialCards = testimonialData.map(
    (item: TestimonialType, index) => {
      return (
        <div
          key={index}
          className="w-full items-center justify-center my-0 mx-auto container"
        >
          <Cards name={item.name} comment={item.comment} img={item.img} />
        </div>
      );
    }
  );

  const containerClassName = `container flex flex-col justify-evenly items-center text-center lg:flex-row lg:text-start gap-4 ${
    variant === "chlorelief" ? "bg-chlorelief-star-green" : "bg-lubie-navy-blue"
  }`;

  return (
    <div
      className={`testimonials min-h-screen flex flex-col justify-center items-center h-full w-full ${variant === "chlorelief" ? "bg-chlorelief-star-green" : "bg-lubie-navy-blue"} pt-4 pb-8`}
    >
      <div className={containerClassName}>
        <div>
          <p
            className={`text-Body-Desktop text pt-2 font-medium ${variant === "chlorelief" ? "text-black" : "text-white"}`}
          >
            CUSTOMERS REVIEW
          </p>
          <h1
            className={`text-Header-Mobile font-extrabold gap-4 flex md:text-Header-Default max-w-screen-sm ${variant === "chlorelief" ? "text-black" : "text-white"}`}
          >
            What Our Customers Say About Our Products
          </h1>
        </div>
        <div className="right text-Body-Default w-4/5 lg:w-1/3 my-4">
          <p
            className={`${variant === "chlorelief" ? "text-black" : "text-white"}`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni aliquam hic, temporibus nemo omnis, consequatur voluptate
            tempore exercitationem nesciunt natus ipsa aut perspiciatis
            reiciendis fugit earum. Repellat, nam? Nisi.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between px-4 md:px-32">
        <div className="w-full block md:hidden">
          <Cardslide cards={testimonialCards} />
        </div>
        <div className="hidden md:flex w-full items-center justify-evenly gap-4 p-20 min-[768px]:flex-col lg:flex-row">
          {testimonialCards}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
