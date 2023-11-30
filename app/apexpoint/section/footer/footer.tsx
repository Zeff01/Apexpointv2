import React from "react";
import Logo from "./Logo";
import Platform from "./Platform";
import BasicInfos from "./BasicInfos";

const Footer = () => {
  return (
    <div className="bg-apexpoint-light-orange">
      <div className="py-5 w-[90%] mx-auto justify-between items-center md:border-b md:border-black ">
        <div className="mx-auto w-[95%] flex items-center">
          <Logo />
          <Platform />
        </div>
      </div>
      <div className="py-5 font-normal hidden md:flex">
        <BasicInfos />
      </div>
    </div>
  );
};

export default Footer;
