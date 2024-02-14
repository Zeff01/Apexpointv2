import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";

interface IconProps extends Omit<ImageProps, "src"> {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, className = "" }) => {
  const baseStyles = "relative";
  const baseImageStyle = "object-contain";
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return (
    <div className={combinedClassName}>
      <Image className={baseImageStyle} src={src} alt={alt} fill={true} />
    </div>
  );
};

export default Icon;
