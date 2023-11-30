import React from "react";
import { MdStarRate } from "react-icons/md";
import Star from "./Star";

type CardProps = {
  name: string;
  message: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="shadow-lg border h-[250px] w-[300px] md:w-[225px] lg:w-[300px] rounded-xl p-4 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="h-14 w-14 bg-gray-300 rounded-full" />
        <Star />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{props.name}</h3>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Card;
