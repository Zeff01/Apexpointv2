import React from "react";
import FirstSection from "./section1/FirstSection";
import SecondSection from "./section2/SecondSection";

const Hero = () => {
  return (
    <main className="w-full h-[70vh] md:h-[85vh] bg-apexpoint-light-orange shadow-lg flex px-10">
      <div className="flex items-start justify-start h-full w-full mx-auto max-w-[1240px] md:mt-12 md:pt-10">
        <FirstSection />
        <SecondSection />
      </div>
    </main>
  );
};

export default Hero;
