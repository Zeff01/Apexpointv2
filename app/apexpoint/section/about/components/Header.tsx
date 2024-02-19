// components/ui/Header.tsx
import React from "react";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <h1 className="text-lg min-[425px]:text-xl xl:text-xl lg:text-lg md:text-base font-semibold">
      {text}
    </h1>
  );
};

export default Header;
