import React from "react";
import Section from "@/app/components/ui/Section";
import Cards from "./components/Cards";

const About = () => {
  return (
    <Section
      id="about"
      className="bg-apexpoint-light-orange w-full flex flex-col md:flex-row gap-8 items-center md:items-stretch justify-center pb-[5%]"
    >
      <Cards />
    </Section>
  );
};

export default About;
