import React from "react";
import FirstSection from "./section1/FirstSection";
import SecondSection from "./section2/SecondSection";

const Hero = () => {
  return (
    <main className="w-full h-[60vh] md:h-[70vh] bg-apexpoint-light-orange shadow-lg flex px-10">
      <div className="flex items-start justify-center h-full w-full mx-auto max-w-[1240px] md:pt-10">
        <FirstSection />
        <SecondSection />
      </div>
    </main>
  );
};

export default Hero;
