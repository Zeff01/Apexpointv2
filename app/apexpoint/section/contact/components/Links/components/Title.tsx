import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-base font-medium">{title}</h3>
      <span className="text-xs font-light">{subtitle}</span>
    </div>
  );
};

export default Title;
