import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  apexLogo: StaticImageData;
}

const Logo: React.FC<LogoProps> = ({ apexLogo }) => {
  return (
    <Link href="/">
      <Image className="h-8 w-auto" src={apexLogo} alt="apexpoint" />
    </Link>
  );
};

export default Logo;
