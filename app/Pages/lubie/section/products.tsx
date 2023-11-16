"use client"; // This is a client component 👈🏽

import "../styles/products.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Products = () => {
  const [rateOne, setRateOne] = useState(0);

  const [rateTwo, setRateTwo] = useState(0);

  const [rateThree, setRateThree] = useState(0);

  return (
    <section className=" bg-lubie-white-color h-[120vh] mt-[50vh]">
      <div className="container px-6 py-10 mx-auto  ">
        <div className="text-center">
          <h1 className=" text-3xl font-lubie-header text-lubie-dark-blue font-semibold lg:text-4xl ">
            Hello products
          </h1>
          <p className="font-lubie-text text-lubie-dark-blue text-center py-3  ">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
            dolor sitametamet
          </p>
        </div>

        {/* Items Sections */}
        <div className="flex text-lubie-dark-blue justify-center mt-16">
          <div className="mr-32">
            <div className=" container p-10 flex flex-row mr-5 bg-lubie-gray-white basis-1/4 justify-center border-r-5 drop-shadow-lg">
              <img
                className="drop-shadow-2xl"
                src="assets/lubie-10ml.png"
                alt="lubie-10ml sachet"
              />
            </div>
            <div className=" flex flex-row  mt-5 container p-5 bg-lubie-gray-white">
              <div>
                <p className="text-md font-bold">10ml Lubie</p>
                <p className="text-sm">Qty: 10ml</p>

                <div className="flex flex-row">
                  {Array(5)
                    .fill()
                    .map((_, index) =>
                      rateOne >= index + 1 ? (
                        <AiFillStar
                          style={{ color: "#7FF0C3" }}
                          onClick={() => setRateOne(index + 1)}
                        /> // When click to a star it color fills
                      ) : (
                        <AiOutlineStar
                          style={{ color: '"#1C3079' }}
                          onClick={() => setRateOne(index + 1)}
                        />
                      )
                    )}
                </div>
              </div>
             
                <p className="text-2xl font-bold ml-20">₱ 32</p>
              
            </div>
          </div>

          <div className="mr-32">
            <div className=" container p-10 flex mr-5 bg-lubie-gray-white basis-1/4 justify-center  drop-shadow-lg">
              <img
                className="drop-shadow-2xl "
                src="assets/lubie-100ml.png"
                alt="lubie-10ml sachet"
              />
            </div>

            <div className=" flex flex-row mt-5 container p-5 bg-lubie-gray-white">
              <div>
              <p className="text-md font-bold">100ml Lubie</p>
              <p className="text-sm">Qty: 100ml </p>
              <div className="flex flex-row">
                {Array(5)
                  .fill()
                  .map((_, index) =>
                    rateTwo >= index + 1 ? (
                      <AiFillStar
                        style={{ color: "#7FF0C3" }}
                        onClick={() => setRateTwo(index + 1)}
                      /> // When click to a star it color fills
                    ) : (
                      <AiOutlineStar
                        style={{ color: '"#1C3079' }}
                        onClick={() => setRateTwo(index + 1)}
                      />
                    )
                  )}
              </div>
              </div>
              <p className="text-2xl font-bold ml-20">₱ 420</p>
            </div>
          </div>

          <div className="">
            <div className=" container p-10 flex mr-5 bg-lubie-gray-white basis-1/4 justify-center drop-shadow-lg">
              <img
                className="drop-shadow-2xl"
                src="assets/lubie-35ml.png"
                alt="lubie-10ml sachet"
              />
            </div>
            <div className=" flex flex-row mt-5 container p-5 bg-lubie-gray-white">
              <div>
              <p className="text-md font-bold">35ml Lubie</p>
              <p className="text-sm">Qty: 35ml</p>

              <div className="flex flex-row">
                {Array(5)
                  .fill()
                  .map((_, index) =>
                    rateThree >= index + 1 ? (
                      <AiFillStar
                        style={{ color: "#7FF0C3" }}
                        onClick={() => setRateThree(index + 1)}
                      /> // When click to a star it color fills
                    ) : (
                      <AiOutlineStar
                        style={{ color: '"#1C3079' }}
                        onClick={() => setRateThree(index + 1)}
                      />
                    )
                  )}
              </div>
              </div>

              <p className="text-2xl font-bold ml-20">₱ 132</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
