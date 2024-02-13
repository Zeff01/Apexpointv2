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
    <div className="m-auto py-5">
      <div className="flex w-auto rounded-lg flex-row bg-lubie-gray-white justify-center drop-shadow-lg  ">
        <img
          className="drop-shadow-2xl md:h-[345px] md:w-[150px] h-[200px]"
          src={imageUrl}
          alt="lubie-10ml sachet"
        />
      </div>
      <div className=" mx-auto flex flex-row mt-5 container rounded-lg bg-lubie-gray-white py-0 border-s-2">
        <div className="flex flex-col gap-5">
          <p className="text-xl text-lubie-navy-blue font-ubuntu">{title}</p>
          <QuantityDropdown />
          <div className="flex flex-row">
            {Array(5).fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {rateOne > index ? (
                  <AiFillStar
                    style={{ color: "#7FF0C3" }}
                    onClick={() => setRateOne(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    style={{ color: "#1C3079" }}
                    onClick={() => setRateOne(index + 1)}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <p className="text-3xl text-lubie-navy-blue px-3 ">{price}</p>
        
      </div>
    </div>
  );
};

export default LubieCard;
