import React from "react";
import Image from "next/image";

// component
import Card from "./Card";

// imported imgs
import aboutIcon from "../../../../../public/assets/apex-about-icons/about.png";
import missionIcon from "../../../../../public/assets/apex-about-icons/mission.png";
import visionIcon from "../../../../../public/assets/apex-about-icons/vision.png";

const About = () => {
  const AboutData = [
    {
      icon: aboutIcon,
      header: "About",
      info: "ApexPoint Pharmaceutical and Medical Supplies Manufacturing OPC FDA-Licensed.",
    },
    {
      icon: missionIcon,
      header: "Mission",
      info: "To enhance and nurture the wellness of every individual by providing innovative and cost-efficient products at a competetive price.",
    },
    {
      icon: visionIcon,
      header: "Vision",
      info: "To be the market leader in the health and wellness industry while making a positive social impact.",
    },
  ];

  const mappedData = AboutData.map((data) => (
    <Card key={data.header}>
      <Image
        className="xl:w-[50px] md:w-[40px] h-auto"
        src={data.icon}
        alt={data.header}
      />
      <h1 className="xl:text-xl lg:text-lg md:text-lg font-semibold">
        {data.header}
      </h1>
      <p className="lg:text-base md:text-sm">{data.info}</p>
    </Card>
  ));

  return (
    <main className="w-full relative lg:h-[275px] md:h-[225px]">
      <div className="h-full flex flex-col justify-center items-center relative my-20 md:top-[-21vh] top-0 md:gap-5 gap-10 z-20 px-5 md:flex-row ">
        {mappedData}
      </div>
    </main>
  );
};

export default About;
