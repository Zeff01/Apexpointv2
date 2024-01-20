import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="h-3/4 w-3/4 max-w-[320px] max-h-[375px] min-[320px]:min-h-fit min-[375px]:min-h-[260px] md:min-h-[290px] xl:w-[25%] md:w-[30%] md:h-[55%] bg-white shadow-lg rounded-xl flex flex-col items-center gap-6 lg:gap-4 md:gap-3 min-[320px]:gap-2 xl:p-5 lg:p-4 md:p-3 px-6 overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
