import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

interface BurgerProps {
  nav: boolean;
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger: React.FC<BurgerProps> = ({ nav, setNav }) => {
  return (
    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer block md:hidden z-[9999999]"
    >
      {nav ? <IoCloseOutline size={30} /> : <RxHamburgerMenu size={30} />}
    </div>
  );
};

export default Burger;
