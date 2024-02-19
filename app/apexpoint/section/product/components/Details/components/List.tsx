// components/List.tsx
import React from "react";
import { ProductData } from "@/components/data/apexpoint/productData";

interface ListProps extends Pick<ProductData, "benefits"> {}

const List: React.FC<ListProps> = ({ benefits = [] }) => {
  return (
    <ul className="list-disc list-inside text-slate-500 text-lg">
      {benefits.map((benefit, index) => (
        <li className="text-sm min-[425px]:text-base lg:text-lg" key={index}>
          {benefit}
        </li>
      ))}
    </ul>
  );
};

export default List;
