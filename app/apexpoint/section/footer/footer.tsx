import React from "react";
import SocialMediaLinks from "./content/SocialMediaLinks";
import BasicInfos from "./content/BasicInfos";
import RightsReserved from "./content/RightsReserved";

const Footer = () => {
  return (
    <div className="bg-apexpoint-light-orange flex flex-col  justify-center items-center py-8 px-8 gap-6">
      <BasicInfos />
      <SocialMediaLinks />
      <RightsReserved />
    </div>
  );
};

export default Footer;
