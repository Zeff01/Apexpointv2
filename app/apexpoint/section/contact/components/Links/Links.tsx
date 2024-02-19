import React from "react";
import { LinksData, linksData } from "@/components/data/apexpoint/linksData";
import Card from "@/components/ui/Card";
import Title from "./components/Title";
import ButtonLink from "./components/ButtonLink";

const Links = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-center pb-16">
      {linksData.map((item: LinksData, index) => (
        <Card
          key={index}
          className="flex min-w-[220px] flex-col justify-center items-center gap-4 p-3 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg bg-white group"
        >
          {item.Icon}
          <Title title={item.title} subtitle={item.subtitle} />
          <ButtonLink link={item.link} linkText={item.linkText} />
        </Card>
      ))}
    </div>
  );
};

export default Links;
