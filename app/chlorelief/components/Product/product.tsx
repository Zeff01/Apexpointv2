"use client";
import React, { useState } from "react";

const ResponsiveStarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 md:w-6 md:h-6 fill-current ${
            star <= rating ? "text-[#5DC787]" : "text-[#5DC787]"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
};

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
      <div className="flex flex-col max-w-full">
        <h1
          className="text-center font-extrabold font-saira text-2xl condensed mt-1"
          style={{ color: "#419F59" }}
        >
          OUR PRODUCTS
        </h1>

        <div className="text-center max-w-full mx-auto">
          <p
            className="font-semibold text-gray-700"
            style={{ color: "#787878", maxWidth: "30em", margin: "0 auto" }}
          >
            Paraben-free: Paraben is not a natural product and is not something
            you’d find naturally in the body. Using skin products with paraben
            will make skin dry, brittle, cracked, and swollen. Also, paraben can
            cause many chemicals to enter the body that should not be there.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#">
              <img
                src="/assets/first.png"
                alt="Product Image"
                className="object-cover w-full h-full"
              />
            </a>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p
                className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate"
                style={{ maxHeight: "3em", overflow: "hidden" }}
              >
                ChloRelief Anti Itch And Anti Rash Lotion 60ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱210.00
              </p>
            </div>
            <ResponsiveStarRating rating={4} />
          </div>
          <div className="flex p-5 pt-0 justify-between">
            <button
              className=" flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-saira text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ backgroundColor: "#0F5B33" }}
            >
              Quick Buy
            </button>
            <div className=" flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <button className="px-3" onClick={decrementQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="px-3" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#">
              <img
                src="/assets/second.png"
                alt="Product Image"
                className="object-cover w-full h-full"
              />
            </a>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p
                className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate"
                style={{ maxHeight: "3em", overflow: "hidden" }}
              >
                ChloRelief Baby Anti-Itch And Anti-Rash Lotion 120ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱420.00
              </p>
            </div>
            <ResponsiveStarRating rating={4} />
          </div>
          <div className="flex p-5 pt-0 justify-between">
            <button
              className="flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-saira text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ backgroundColor: "#0F5B33" }}
            >
              Quick Buy
            </button>
            <div className="flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <button className="px-3" onClick={decrementQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="px-3" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>
        </div>
        {/*third item*/}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full sm:w-96 rounded-xl bg-clip-border m-4">
          <div className="relative overflow-hidden h-96 rounded-xl bg-clip-border">
            <a href="#">
              <img
                src="/assets/third.png"
                alt="Product Image"
                className="object-cover w-full h-full"
              />
            </a>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p
                className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 truncate"
                style={{ maxHeight: "3em", overflow: "hidden" }}
              >
                ChloRelief All Natural 2 In 1 Antiseptic Wash With Virgin
                Coconut Oil 150ml
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                ₱99.00
              </p>
            </div>
            <ResponsiveStarRating rating={4} />
          </div>
          <div className="flex p-5 pt-0 justify-between">
            <button
              className="flex-grow block w-1/3 select-none rounded-lg py-3 px-3 text-center align-middle font-SairaCondensed text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              style={{ backgroundColor: "#0F5B33" }}
            >
              Quick Buy
            </button>
            <div className="flex select-none rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <button className="px-3" onClick={decrementQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="px-3" onClick={incrementQuantity}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
