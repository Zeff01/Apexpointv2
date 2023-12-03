import Image from "next/image";
import ApexLogo from "@/public/assets/apexpoint-logo.png";
import ApexLogoName from "@/public/assets/apexpoint-name.png";

const Logo = () => {
  return (
    <div className="flex">
      <Image className="w-auto h-10" src={ApexLogo} alt="Apexpoint" />
      <Image className="w-auto h-10" src={ApexLogoName} alt="Apexpoint" />
    </div>
  );
};

export default Logo;
