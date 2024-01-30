"use client";
import React, { useState } from "react";
import ProductList from "./data";


   

export default function Product() {
 

  return (
    <>
      <div className="flex flex-col  lg:h-[140vh] md:h-[140vh] sm:h-[120vh] xl:h-[100vh]">
        <h1 className="text-center font-bold font-saira-Condensed -tracking-tighter  text-red-500 text-4xl my-10 sm:text-5xl sm:my-16" > OUR PRODUCTS</h1>
        <div className="flex flex-col items-center justify-center text-gray-500 w-full sm:text-[11px] lg:text-2xl py-0 sm:text-sm sm:py-6 md:py-0 lg:pb-8">
          <p>Paraben-free paraben is not a natural product and is not something you'd</p>
          <p>find naturally in the body. Using skin products with paraben will make skin</p>
          <p>dry, brittle, cracked, and swollen. Also, paraben can cause many chemicals to </p>
          <p>enter the body that should not be there.</p>
        </div>
        <ProductList/>
      </div> 
    </>
  );
}
