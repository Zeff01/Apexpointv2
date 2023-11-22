

import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Quantity from "../components/quantity";

const Products = () => {
  const [rateOne, setRateOne] = useState(0);

  const [rateTwo, setRateTwo] = useState(0);

  const [rateThree, setRateThree] = useState(0);

  return (
    <section className="w-full flex flex-col justify-center items-center md:h-[60vh] h-[190vh] md:mt-[35vh] mt-[0vh] font-ubuntu ">
      <div className="  ">
        <div className="  w-full flex flex-col items-center">
          <h1 className=" md:text-5xl text-4xl  font-extrabold lg:text-4xl drop-shadow-md ">
            Our Products
          </h1>
          <p className="text-sm  text-lubie-dark-blue text-center py-8 w-[60%]">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
            dolor sitametamet
          </p>
        </div>

        {/* Items Sections */}
        <div className="md:flex-row flex-col flex justify-center">
          <div className=" mx-auto ">
            <div className=" container rounded-lg flex flex-row md:p-10  bg-lubie-gray-white md:basis-1/4 justify-center border-r-5 drop-shadow-lg">
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
{/* card2 */}
          <div className=" mx-auto">
            <div className=" container rounded-lg flex flex-row md:p-10  md:mr-5 bg-lubie-gray-white md:basis-1/4 justify-center border-r-5 drop-shadow-lg">
              <img
                className="drop-shadow-2xl md:h-[345px] md:w-[150px] w-[100px] h-[250px] "
                src="assets/lubie-100ml.png"
                alt="lubie-10ml sachet"
              />
            </div>

            <div className=" flex flex-row mt-5 container rounded-lg  bg-lubie-gray-white mb-10 text-center p-5">
              <div>
                <p className="text-lg font-bold">100ml </p>
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
            <div className=" container rounded-lg  p-10 flex bg-lubie-gray-white basis-1/4 justify-center  drop-shadow-lg">
              <img
                className="drop-shadow-2xl md:h-[345px] md:w-[150px] w-[100px] h-[250px]"
                src="assets/lubie-35ml.png"
                alt="lubie-10ml sachet"
              />
            </div>
            <div className=" flex flex-row mt-5 container  bg-lubie-gray-white mb-10 text-center p-5">
              <div className="    ">
                <p className="text-lg font-bold ">35ml </p>
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
