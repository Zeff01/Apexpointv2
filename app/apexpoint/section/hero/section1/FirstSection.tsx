import React from "react";
import Heading from "./HeroInfo/Heading";
import Info from "./HeroInfo/Info";
import ContactBtn from "./HeroInfo/ContactBtn";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="gap-5 w-[600px] h-full flex flex-col justify-center md:h-fit sm:m-0 md:mt-14 z-20">
      <Heading />
      <div className="w-full lg:w-[90%] flex flex-col gap-5">
        <Info />
        <Link href="#contact-us" scroll={true   }>
          <ContactBtn />
        </Link>
      </div>
    </div>
  );
};

export default FirstSection;
