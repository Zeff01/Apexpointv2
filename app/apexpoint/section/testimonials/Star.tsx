import React from "react";
import { MdStarRate } from "react-icons/md";
import { number } from "yup";

type StarProps = {
  rate: number;
};

const Star: React.FC<StarProps> = ({ rate }) => {
  let cards = [];
  if (rate > 0) {
    for (var counter = 0; counter < 5; counter++) {
      cards[counter] = <MdStarRate key={counter} fill="#FF9529" />;
    }
  }
  return <div className="flex">{cards}</div>;
};

export default Star;
