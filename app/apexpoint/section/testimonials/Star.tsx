import React from "react";
import { MdStarRate } from "react-icons/md";

type StarProps = {
  rate: number;
};

const Star: React.FC<StarProps> = ({ rate }) => {
  let cards = [];
  if (rate > 0) {
    for (var counter = 0; counter < rate; counter++) {
      cards[counter] = <MdStarRate key={counter} fill="#FF9529" />;
    }
  }
  return <div className="flex">{cards}</div>;
};

export default Star;
