import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface SmallNavsProps {
  nav: boolean;
  apexLogo: StaticImageData;
  chloreliefLogo: StaticImageData;
  lubieLogo: StaticImageData;
}

const SmallNavs: React.FC<SmallNavsProps> = ({
  nav,
  apexLogo,
  chloreliefLogo,
  lubieLogo,
}) => {
  return (
    <div
      className={
        nav
          ? "fixed left-0 top-0 w-full shadow-2xl h-full border-r border-apexpoint-dark-orange bg-white ease-in-out duration-500"
          : "fixed left-[-100%] top-0 h-full ease-in-out duration-500"
      }
    >
      <div className="pt-7 px-5">
        <Image className="h-8 w-auto" src={apexLogo} alt="apexpoint" />
      </div>
      <div className="h-full pt-10">
        <Link
          href="/chlorelief"
          className="h-1/2 w-full flex items-center justify-center hover:bg-gray-200"
        >
          <Image
            className="h-14 w-auto"
            src={chloreliefLogo}
            alt="chlorelief"
          />
        </Link>
        <Link
          href="/lubie"
          className="h-1/2 w-full flex items-center justify-center hover:bg-gray-200"
        >
          <Image className="h-14 w-auto" src={lubieLogo} alt="lubie" />
        </Link>
      </div>
    </div>
  );
};

export default SmallNavs;
