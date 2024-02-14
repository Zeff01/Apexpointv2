// components/Description.tsx
import React from "react";
import { ProductData } from "@/components/data/apexpoint/productData";

interface DescriptionProps extends Pick<ProductData, "description"> {}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <p className="text-slate-500 text-sm min-[425px]:text-base lg:text-lg">
      {description}
    </p>
  );
};

export default Description;
