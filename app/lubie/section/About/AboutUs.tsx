import { shippingbag, truck, card, return1 } from "@/public/assets/apexpoint";
import Image from "next/image";
import Banner from "@/public/assets/lubie-assets/banner.jpg";

const AboutSection = () => {
  return (
    <div className="hidden md:flex  flex-col mt-20 bg-opacity-40 bg-lubie-light-blue">
      {/* Shipping Block */}
      <div className="pt-20 pb-28 mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-center gap-x-5 px-1 md:px-0 gap-y-10">
        {[
          {
            imgSrc: shippingbag,
            title: "Shop Online",
            description:
              "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
          },
          {
            imgSrc: truck,
            title: "Shipping",
            description:
              "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
          },
          {
            imgSrc: return1,
            title: "Return Policy",
            description:
              "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
          },
          {
            imgSrc: card,
            title: "Payment Methods",
            description:
              "Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center gap-y-2 justify-center items-center"
          >
            <Image
              src={item.imgSrc}
              alt="herlubie"
              className="object-contain"
            />
            <p className="text-xl font-bold text-lubie-navy-blue">
              {item.title}
            </p>
            <p className="text-sm text-lubie-navy-blue text-balance">
              {item.description}
            </p>
          </div>
        ))}
      </div>
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
