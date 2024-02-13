import React from "react";
import Section from "@/app/components/ui/Section";
import Header from "./components/Header";
import Description from "./components/Description";
import Button from "@/app/components/ui/Button";
import HeroImage from "./components/HeroImage";

const Hero = () => {
  return (
    <Section
      id="home"
      className="flex flex-row bg-apexpoint-light-orange items-center justify-center gap-0 md:gap-10 "
    >
      <div className="hidden md:block w-1/2">
        <HeroImage />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 items-center md:items-start">
        <Header />
        <Description />
        <Button
          className="w-full md:w-fit min-[425px]:w-1/2"
          variant="apexpoint"
          url="#contact"
        >
          Contact Us
        </Button>
      </div>
    </Section>
  );
};

export default Hero;
