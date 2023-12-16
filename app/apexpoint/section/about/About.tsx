import React from "react";
import Image from "next/image";
import { AboutData } from "./data";

// component
import Card from "./Card";

const About: React.FC = () => {
  const mappedData = AboutData.map((data) => (
    <Card key={data.header}>
      <Image
        className="h-auto mt-6 xl:w-[50px] md:w-[40px]"
        src={data.icon}
        alt={data.header}
      />
      <h1 className="xl:text-xl lg:text-lg md:text-lg font-semibold">
        {data.header}
      </h1>
      <p className="text-base mb-6 text-lg ">{data.info}</p>
    </Card>
  ));

  return (
    <main className="w-full relative lg:h-[275px] md:h-[225px] ">
      <div className="h-full flex flex-col justify-center items-center relative mt-[5rem] top-[-21vh]  md:gap-10 gap-10 z-20 px-5 md:flex-row ">
        {mappedData}
      </div>
    </main>
  );
};

export default About;
