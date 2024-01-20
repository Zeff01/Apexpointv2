import React from "react";
import FirstSection from "./heroSection/section1/FirstSection";
import SecondSection from "./heroSection/section2/SecondSection";
import Video from "./videoSection/Video";

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col bg-apexpoint-light-orange shadow-lg pt-[10vh]">
      <Video />
      <div className="w-full h-[70vh] relative flex items-center px-14 my-0 md:my-10">
        <SecondSection />
        <FirstSection />
      </div>
    </section>
  );
};

export default Hero;
