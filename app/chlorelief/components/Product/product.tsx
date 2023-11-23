"use client";
import React, { useState } from 'react';
export default function Product() {

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  


  return (
      <>
      <div className="flex flex-col text-center items-center font-bold justify-center">
        <h1 className="font-semi-bold font-saira condensed"style={{ color:"#419F59"}}>OUR PRODUCTS</h1>
          <p className=" text-align-center font-semi-bold "style={{ color:"#787878"}}>Paraben-free-paraben is not a natural product and is not something you’d find naturally in the body. Using skin products with paraben will make skin dry, brittle, cracked, and swollen. Also, paraben can cause many chemicals to enter the body that should not be there.</p>

  </div>
      <div className="flex flex-wrap justify-center">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#"><img
              src="/assets/first.png"
              alt="Product Image"
              className="object-cover w-full h-full" /></a>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate" style={{ maxHeight: '3em', overflow: 'hidden' }}>
                ChloRelief Anti Itch And Anti Rash Lotion 60ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱210.00
              </p>
            </div>

          </div>
          <div className="flex p-5 pt-0 justify-between">
          <button
              className=" flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button" style={{ backgroundColor:"#FF514E"}}
            >
              Quick Buy

              </button>
              <div className=" flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
              <button className="px-3" onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button className="px-3"onClick={incrementQuantity}>+</button>
              </div>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#"><img
              src="/assets/second.png"
              alt="Product Image"
              className="object-cover w-full h-full" /></a>

          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate" style={{ maxHeight: '3em', overflow: 'hidden' }}>
                ChloRelief Baby Anti-Itch And Anti-Rash Lotion 120ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱420.00
              </p>
            </div>

          </div>
          <div className="flex p-5 pt-0 justify-between">
            <button
              className="flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"style={{ backgroundColor:"#FF514E"}}
            >
              Quick Buy
            </button>
            <div className="flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <button className="px-3" onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button className="px-3" onClick={incrementQuantity}>+</button>
            </div>
          </div>
        </div>


        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#"><img
              src="/assets/third.png"
              alt="Product Image"
              className="object-cover w-full h-full" /></a>

          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate" style={{ maxHeight: '3em', overflow: 'hidden' }}>
                ChloRelief All Natural 2 In 1 Antiseptic Wash With Virgin Coconut Oil 150ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱99.00
              </p>
            </div>

          </div>
          <div className="flex p-5 pt-0 justify-between">
            <button
              className="flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"style={{ backgroundColor:"#FF514E"}}
            >
              Quick Buy
            </button>
            <div className="flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <button className="px-3" onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button className="px-3" onClick={incrementQuantity}>+</button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#"><img
              src="/assets/forth.png"
              alt="Product Image"
              className="object-cover w-full h-full" /></a>

          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate" style={{ maxHeight: '3em', overflow: 'hidden' }}>
                ChloRelief 70% Isopropyl Alcohol With Virgin Coconut Oil 150ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱59.00
              </p>
            </div>

          </div>
          <div className="flex p-5 pt-0 justify-between">
            <button
              className=" flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"style={{ backgroundColor:"#FF514E"}}
            >
              Quick Buy
              </button>
              <div className=" flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" >
              <button className="px-3" onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button className="px-3"onClick={incrementQuantity}>+</button>
              </div>
          </div>
        </div>
      </div>
      </>
  


  );
}
