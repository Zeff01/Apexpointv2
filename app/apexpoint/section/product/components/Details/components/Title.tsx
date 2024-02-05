import React from "react";
import { ProductData } from "@/app/components/data/apexpoint/productData";

interface TitleProps extends Pick<ProductData, "title"> {}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h2 className="uppercase font-bold tracking-wider text-sm min-[425px]:text-base lg:text-lg">
      {title}
    </h2>
  );
};

export default Title;
