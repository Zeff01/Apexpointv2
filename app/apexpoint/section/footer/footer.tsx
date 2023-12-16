import React from "react";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";
import BasicInfos from "./BasicInfos";

const Footer = () => {
  return (
    <div className="bg-apexpoint-light-orange shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.25)] flex flex-col gap-6 py-16 ">
      <div className="py-5 w-[90%] mx-auto justify-between items-center md:border-b md:border-black ">
        <div className="mx-auto w-[95%] flex items-center flex-col sm:flex-row gap-y-4 justify-between">
          <Logo />
          <SocialMediaLinks />
        </div>
      </div>
      <div className="py-5 font-normal hidden md:flex">
        <BasicInfos />
      </div>
    </div>
  );
};

export default Footer;
