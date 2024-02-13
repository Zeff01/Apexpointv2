"use client";
import React from "react";
import Cards from "../../../components/cards/review";

import Cardslide from "./cardslides";

function Testimonials() {
  return (
    <div className="testimonials min-h-screen flex flex-col justify-center items-center h-full w-full bg-green-200 border-2 pt-4 pb-8">
      <div className="container flex flex-col justify-center items-center text-center lg:flex-row lg:text-start gap-4 ">
        <div className="">
          <p className="text-Body-Desktop text pt-2 font-medium">
            CUSTOMERS REVIEW
          </p>
          <h1 className="text-Header-Mobile font-extrabold gap-4 flex md:text-Header-Default max-w-screen-sm">
            What Our Customers Say About Our Products
          </h1>
        </div>
        <div className="right text-Body-Default w-4/5 lg:w-1/3 my-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            magni aliquam hic, temporibus nemo omnis, consequatur voluptate
            tempore exercitationem nesciunt natus ipsa aut perspiciatis
            reiciendis fugit earum. Repellat, nam? Nisi.
          </p>
        </div>
      </div>

      <div className="card flex justify-center">
        <div className="block max-w-screen-md w-3/6 my-4 md:w-5/6 md:max-w-screen-sm lg:hidden">
          <Cardslide />
        </div>
        <div className="hidden lg:flex justify-center gap-10 p-10">
          <Cards
            Comment="Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use."
            ImageUrl="/assets/ap_testimonial_1_img.jpeg"
            ImageAlt="Nine"
            CustomerName="Mark Ivor Glorioso"
          />
          <Cards
            Comment="Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use."
            ImageUrl="/assets/ap_testimonial_2_img.jpeg"
            ImageAlt="Nine"
            CustomerName="John D smith"
          />
          <Cards
            Comment="Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use."
            ImageUrl="/assets/ap_testimonial_3_img.jpeg"
            ImageAlt="Nine"
            CustomerName="Lachica Madrid"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
