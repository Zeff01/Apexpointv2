import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface NavsProps {
  chloreliefLogo: StaticImageData;
  lubieLogo: StaticImageData;
}

const Navs: React.FC<NavsProps> = ({ chloreliefLogo, lubieLogo }) => {
  return (
    <div className="hidden md:flex gap-6">
      <Link href="/Pages/chlorelief">
        <Image className="h-8 w-auto" src={chloreliefLogo} alt="chlorelief" />
      </Link>
      <Link href="/Pages/lubie">
        <Image className="h-8 w-auto" src={lubieLogo} alt="lubie" />
      </Link>
    </div>
  );
};

export default Navs;
