import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl flex flex-col items-center min-h-[250px] gap-3 xl:gap-4 lg:gap-3 md:gap-3 p-5 overflow-hidden h-full w-[300px] xl:w-[300px] md:w-[250px]">
      {children}
    </div>
  );
};

export default Card;
