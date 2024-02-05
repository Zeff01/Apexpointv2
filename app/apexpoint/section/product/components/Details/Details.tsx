import { ProductData } from "@/app/components/data/apexpoint/productData";
import React from "react";
import Logo from "./components/Logo";
import Title from "./components/Title";
import Description from "./components/Description";
import List from "./components/List";
import Button from "@/app/components/ui/Button";
import Slider from "./components/Slider";

const Details = ({
  name,
  title,
  description,
  img,
  logo,
  url,
  benefits,
}: ProductData) => {
  return (
    <>
      <Slider name={name} logo={logo} />
      <div className="px-0 md:px-[4%] flex flex-col gap-1 min-[425px]:gap-2 lg:gap-3">
        <Logo className="object-fit" img={img} name={name} />
        <Title title={title} />
        <Description description={description} />
        <List benefits={benefits} />
        <Button url={url} variant="apexpoint">
          Learn More!
        </Button>
      </div>
    </>
  );
};

export default Details;
