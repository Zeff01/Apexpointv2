import React, { useState } from "react";
import QuantityDropdown from "./quantity";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface LubieCardProps {
  title: string;
  imageUrl: string;
  price: string;
}
const LubieCard = ({ title, imageUrl, price }: LubieCardProps) => {
  const [rateOne, setRateOne] = useState(5);

  return (
    <div className=" ">
      <div className="  container flex  md:w-[400px] rounded-lg flex-row   bg-lubie-gray-white justify-center border-r-5 drop-shadow-lg">
        <img
          className="  drop-shadow-2xl  md:h-[345px] md:w-[150px] w-[100px] h-[200px]"
          src={imageUrl}
          alt="lubie-10ml sachet"
        />
      </div>
      <div className=" border-2 flex flex-row mt-5 container rounded-lg   bg-lubie-gray-white p-5">
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-lubie-navy-blue font-ubuntu">{title}</p>
          <QuantityDropdown />

          <div className="flex flex-row">
            {Array(5)
              .fill()
              .map((_, index) =>
                rateOne ? (
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

        <p className="text-6xl text-lubie-navy-blue  ml-16  ">{price}</p>
      </div>
    </div>
  );
};

export default LubieCard;
