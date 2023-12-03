import React from "react";
import Heading from "./HeroInfo/Heading";
import Info from "./HeroInfo/Info";
import ContactBtn from "./HeroInfo/ContactBtn";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="gap-5 ml-10 p-6 h-[320px] w-[600px] flex flex-col justify-end md:h-[340px] lg:p-0 lg:ml-0">
      <Heading />
      <div className="w-full lg:w-[90%] flex flex-col gap-5">
        <Info />
        <Link href="#contact-us" scroll={true}>
          <ContactBtn />
        </Link>
      </div>
    </div>
  );
};

export default FirstSection;
