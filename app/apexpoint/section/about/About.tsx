import React from "react";
import Image from "next/image";
import { AboutData } from "./data";

// component
import Card from "./Card";

const About: React.FC = () => {
  const mappedData = AboutData.map((data) => (
    <Card key={data.header}>
      <Image
        className="h-auto w-auto mt-6 md:mt-4 xl:h-12 lg:h-11 md:h-10 min-[320px]:h-10"
        src={data.icon}
        alt={data.header}
      />
      <h1 className="text-xl xl:text-xl lg:text-lg md:text-base font-semibold">
        {data.header}
      </h1>
      <p className="mb-6 text-lg md:text-base min-[320px]:text-sm md:text-justify min-[320px]:text-center min-[375px]:text-base">
        {data.info}
      </p>
    </Card>
  ));

  return (
    <section id="about" className="py-6 bg-apexpoint-light-orange h-auto md:h-[50vh] w-full">
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-5 md:gap-3">
        {mappedData}
      </div>
    </section>
  );
};

export default About;
