import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
interface LubieCardProps {
  title: string;
  imageUrl: string;
  price: string;
  quantity: string;
}

const LubieCard = ({ title, imageUrl, price, quantity }: LubieCardProps) => {
  const [rateOne, setRateOne] = useState(5);

  return (
    <div className="lg:min-w-[30.9%] md:min-w-[45.1%] max-w-[70%] ">
      <div className="flex w-auto rounded-lg flex-row  justify-center drop-shadow-lg bg-lubie-white-blue  relative shadow-sm ">
        <FaHeart
          className="absolute top-3 right-3 fill-lubie-green-light "
          size={30}
        />
        <img
          className="drop-shadow-2xl md:h-[345px] md:w-[150px] h-[200px] py-3"
          src={imageUrl}
          alt="lubie-10ml sachet"
        />
      </div>
      <div className=" mx-auto flex flex-row mt-5 justify-between  container rounded-lg py-0 ">
        <div className="flex flex-col gap-1">
          <p className="text-xl text-lubie-dark-blue ">{title}</p>
          <p className="font-light text-lubie-dark-blue">
            Quantity : {quantity} ML
          </p>
          <div className="flex flex-row ">
            {Array(5)
              .fill(0)
              .map((_, index) => (
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
            <p className="font-light text-lubie-dark-blue text-xs">(4.9)</p>
          </div>
        </div>

        <p className="text-4xl  px-3 text-lubie-dark-blue font-bold">{price}</p>
      </div>
    </div>
  );
};

export default LubieCard;
