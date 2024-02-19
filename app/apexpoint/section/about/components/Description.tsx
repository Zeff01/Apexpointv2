// components/ui/Description.tsx
import React from "react";

interface DescriptionProps {
  text: string;
}

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <p className="text-sm min-[320px]:text-sm text-center md:text-justify min-[320px]:text-center min-[375px]:text-base md:text-sm lg:text-base xl:text-lg">
      {text}
    </p>
  );
};

export default Description;
