"use client";
import React, { useState } from "react";
import ProductList from "./data";


   

export default function Product() {
 

  return (
    <>
      <div id="product" className="flex flex-col items-center min-h-screen h-full font-intra my-10">
        <h1 className="text-red-500 font-bold text-center text-Header-Mobile lg:text-header-Default xl:text-Header-Desktop my-10" >OUR PRODUCTS</h1>
        <div className="flex flex-col text-center text-gray-400 text-Body-Default max-w-screen-lg mb-4 mx-20 lg:mx-0 sm:text-Body-Desktop ">
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
