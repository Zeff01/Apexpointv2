import React, { HTMLAttributes, ReactNode } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <h1 className="text-Header-Mobile min-[425px]:text-Header-Default md:text-Header-Desktop w-64 min-w-full font-semibold text-center">
      {children}
    </h1>
  );
};

export default Header;
