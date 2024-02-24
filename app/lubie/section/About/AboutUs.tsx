
import Image from "next/image";
import Banner from "@/public/assets/lubie-assets/banner.jpg";
import Shipping from "@/components/sections/about/about"
const AboutSection = () => {
  return (
    <div
      className="hidden md:flex  flex-col mt-20 bg-opacity-40 bg-lubie-light-blue"
      id="about"
    >
      {/* Shipping Block */}
       <Shipping variant="lubie"/>
      {/* About Hero */}
      <div className="items-center px-5 ">
        <div className="md:mt-35 overflow-hidden">
          <Image
            src={Banner}
            alt="herlubie"
            className="object-cover h-[18vh] w-full md:h-[70vh]"
          />
        </div>
      </div>
      <div className="pb-10"></div>
    </div>
  );
};

export default AboutSection;
