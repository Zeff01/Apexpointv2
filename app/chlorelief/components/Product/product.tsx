"use client";
import React, { useState } from "react";
import ProductList from "./data";


   

export default function Product() {
 

  return (
    <>
      <div id="product" className="flex flex-col items-center min-h-screen h-screen sm:h-full font-intra">
        <h1 className="text-center font-bold text-red-500 extra-bold text-Header-Mobile sm:text-Header-Default my-10" > OUR PRODUCTS</h1>
        <div className="flex flex-col text-center text-Caption-Mobile max-w-screen-sm mx-20 sm:mx-0 sm:text-Caption-Desktop ">
          <p>Paraben-free paraben is not a natural product and is not something you'd
          find naturally in the body. Using skin products with paraben will make skin
          dry, brittle, cracked, and swollen. Also, paraben can cause many chemicals to 
          enter the body that should not be there.</p>
        </div>
        <ProductList/>
      </div> 
    </>
  );
}
