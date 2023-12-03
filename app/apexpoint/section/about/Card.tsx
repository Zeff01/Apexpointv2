import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="min-w-min bg-white shadow-lg rounded-xl flex flex-col items-center min-h-[280px] gap-6 p-5 overflow-hidden h-full w-[300px] md:w-[250px] md:h-[350px] lg:w-[350px]">
      {children}
    </div>
  );
};

export default Card;
