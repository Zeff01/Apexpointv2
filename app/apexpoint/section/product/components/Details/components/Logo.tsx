// components/Logo.tsx
import Image, { StaticImageData } from "next/image";
import React from "react";
import { ProductData } from "@/components/data/apexpoint/productData";

interface LogoProps extends Pick<ProductData, "img" | "name"> {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ img, name, className = "", ...rest }) => {
  const baseStyle = "h-7 md:h-8 lg:h-10";

  const containerClassName = `flex items-center ${baseStyle} ${className}`;

  return (
    <div className={containerClassName} {...rest}>
      {img && (
        <Image src={img} alt={name} className="w-auto h-full object-contain" />
      )}
    </div>
  );
};

export default Logo;
