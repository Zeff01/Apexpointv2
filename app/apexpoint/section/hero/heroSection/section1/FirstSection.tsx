import React from "react";
import Heading from "./HeroInfo/Heading";
import Info from "./HeroInfo/Info";
import ContactBtn from "./HeroInfo/ContactBtn";
import Link from "next/link";

const FirstSection = () => {
  return (
    // <div className="gap-8 px-6 md:px-8 h-[320px] w-auto sm:w-[600px] flex flex- col justify-center items-start md:h-[340px] lg:p-0 lg:ml-0 ">
    <div className="static md:absolute left-1/2 flex flex-col gap-5 w-full md:w-1/2">
      <Heading />
      <div className="flex flex-col gap-10">
        <Info />
        <Link
          className="w-full block min-[375px]:flex justify-center sm:block"
          href="#contact-us"
          scroll={true}
        >
          <ContactBtn />
        </Link>
      </div>
    </div>
  );
};

export default FirstSection;
