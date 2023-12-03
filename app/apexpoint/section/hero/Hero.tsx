import React from "react";
import FirstSection from "./section1/FirstSection";
import SecondSection from "./section2/SecondSection";

const Hero = () => {
  return (
    <main className="w-full h-[85vh] bg-apexpoint-light-orange shadow-lg flex px-10">
      <div className="flex items-center gap-10 my-10 justify-center h-full min-w-[300px] w-auto m-auto max-w-[1240px]  md:items-start md:pt-10">
        <FirstSection />
        <SecondSection />
      </div>
    </main>
  );
};

export default Hero;
