import React from "react";
import Policies from "./component/Policies";
import Section from "@/app/components/ui/Section";
import Socials from "./component/Socials";
import Credits from "./component/Credits";

const Footer = () => {
  return (
    <Section
      id="footer"
      className="bg-apexpoint-light-orange flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-6 pt-4 sm:pt-5 md:pt-6 pb-2"
    >
      <Policies />
      <Socials />
      <Credits />
      <p>test</p>
    </Section>
  );
};

export default Footer;
