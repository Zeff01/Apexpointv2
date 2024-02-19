import React, { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "", ...rest }) => {
  const baseStyles = "bg-white border-1 border-solid border-black";

  // Combine baseStyles and additional className
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return (
    <div className={combinedClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
