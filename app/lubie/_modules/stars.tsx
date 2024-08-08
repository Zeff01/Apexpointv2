import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  userRating: number;
  totalStars?: number;
  starsResult?: React.ReactNode[];
}

function Stars({ userRating, starsResult }: RatingProps) {
  starsResult = getStars({ userRating });

  return (
    <div className="flex">
      {starsResult.map((star): React.ReactNode => (
        <>{star}</>
      ))}
    </div>
  );
}

export default Stars;

function getStars({ userRating, totalStars = 5 }: RatingProps) {
  const starsResult: React.ReactNode[] = [];
  const isHalfRating: boolean = userRating % 1 !== 0;

  for (let i = 0; i < totalStars; i++) {
    if (i < Math.floor(userRating)) {
      starsResult.push(<FaStar key={i} size={20} className="text-[#419F59]" />);
    } else if (isHalfRating && i < Math.round(userRating)) {
      starsResult.push(<FaStarHalfAlt key={i} size={20} className="text-[#419F59]" />);
    } else {
      starsResult.push(<FaRegStar key={i} size={20} className="text-[#419F59]" />);
    }
  }

  return starsResult;
}