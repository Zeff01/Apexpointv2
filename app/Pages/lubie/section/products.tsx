"use client"; // This is a client component 👈🏽

import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Quantity from "../components/quantity";

const Products = () => {
  const [rateOne, setRateOne] = useState(0);

  const [rateTwo, setRateTwo] = useState(0);

  const [rateThree, setRateThree] = useState(0);

  return (
    <section className="  max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify between md:h-[120vh] h-[200vh] md:mt-[30vh] mt-[-30vh] ">
      <div className="container px-6 py-10 mx-auto  ">
        <div className="text-center">
          <h1 className=" md:text-5xl text-4xl font-lubie-header text-lubie-dark-blue font-semibold lg:text-4xl drop-shadow-md ">
            Our Products
          </h1>
          <p className="text-sm font-lubie-text text-lubie-dark-blue text-center py-8 ">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
            dolor sitametamet
          </p>
        </div>

        {/* Items Sections */}
        <div className="md:flex-row flex-col flex justify-center md:space-x-10 ">
          <div className=" mx-auto ">
            <div className=" container rounded-lg flex flex-row md:p-10 px-21  md:mr-5 bg-lubie-gray-white md:basis-1/4 justify-center border-r-5 drop-shadow-lg">
              <img
                className="drop-shadow-2xl  md:h-[345px] md:w-[150px] w-[110px] h-[200px]"
                src="assets/lubie-10ml.png"
                alt="lubie-10ml sachet"
              />
            </div>
            <div className=" flex flex-row mt-5 container rounded-lg   bg-lubie-gray-white mb-10 text-center p-5">
              <div>
                <p className="text-lg font-bold">10ml</p>
                <Quantity />

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

              <p className="text-2xl font-bold ml-16  ">₱32</p>
            </div>
          </div>

          <div className="md:mr-32 mx-auto">
            <div className=" container rounded-lg flex flex-row md:p-10  md:mr-5 bg-lubie-gray-white md:basis-1/4 justify-center border-r-5 drop-shadow-lg">
              <img
                className="drop-shadow-2xl md:h-[345px] md:w-[150px] w-[100px] h-[250px] "
                src="assets/lubie-100ml.png"
                alt="lubie-10ml sachet"
              />
            </div>

            <div className=" flex flex-row mt-5 container rounded-lg  bg-lubie-gray-white mb-10 text-center p-5">
              <div>
                <p className="text-md font-bold">100ml </p>
                <Quantity />
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
              <p className="text-2xl font-bold ml-20">₱420</p>
            </div>
          </div>

          <div className=" mx-auto ">
            <div className=" container rounded-lg  p-10 flex mr-5 bg-lubie-gray-white basis-1/4 justify-center  drop-shadow-lg">
              <img
                className="drop-shadow-2xl md:h-[345px] md:w-[150px] w-[100px] h-[250px]"
                src="assets/lubie-35ml.png"
                alt="lubie-10ml sachet"
              />
            </div>
            <div className=" flex flex-row mt-5 container rounded-lg  bg-lubie-gray-white mb-10 text-center p-5">
              <div className="    ">
                <p className="text-[18px] font-bold ">35ml </p>
                <Quantity />

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

              <p className="text-2xl font-bold ml-20   ">₱132</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
