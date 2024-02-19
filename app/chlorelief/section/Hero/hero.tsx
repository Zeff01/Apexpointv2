import Image from "next/image";

interface HeroSectionProps {
  SectionClass: string;

  description: string;

  TextStyle: string;
  ButtonText: string;
  ButtonStyle: string;
}

const Data: HeroSectionProps[] = [
  {
    SectionClass:
      "bg-chlorelief-springwood chloreliefwave min-h-screen-xl h-full flex flex-row items-center justify-center font-inter pb-10 sm:pb-0 sm:h-screen",

    description:
      "Lorem ipsum dolor sit eamet Lorem Ipsum ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit eamet Lorem ipsum dolor sit Lorem ipsum dolor sitametamet",

    TextStyle:
      "flex flex-col gap-1 sm:items-start item-center text-gray-200 opacity-90 text-Body-Default sm:text-Body-Desktop lg:w-[450px]",

    ButtonText: "Learn more",
    ButtonStyle:
      "border-2 border-red-300 hover:bg-red-300 duration-300 text-white font-bold w-[200px] py-2 rounded-lg my-4 Text-Caption-Desktop bg-chlorelief-springwood",
  },
];

export default function Hero() {
  return (
    <>
      {Data.map((item, index) => (
        <div key={index} className={item.SectionClass}>
          <div className="flex justify-center flex-col-reverse sm:flex-row sm:items-center sm:px-11 px-7  xl:px-[200px] relative  ">
            <div className="flex flex-col sm:justify-end sm:items-start justify-center items-center max-w-screen-xl w-full gap-2">
              <h1 className="text-white  font-bold text-center  sm:w-auto sm:text-start pb-6 text-3xl   md:text-4xl lg:text-5xl lg:leading-[65px]">
                The first line of{" "}
                <span className="text-red-300  text-extra-bold">defense</span>{" "}
                against bacteria and viruses
              </h1>

              <a href="#about">
                {" "}
                <button className={item.ButtonStyle}>{item.ButtonText}</button>
              </a>
            </div>
            <div className="min-w-screen w-full h-full flex justify-center items-center ">
              <Image
                src="/assets/chlorelief-products/chloreliefhero5.png"
                width={400} // Increased width for a bigger image
                height={400} // Adjust height accordingly to maintain aspect ratio
                className="min-h-full w-full object-contain " // Adjusted class for bigger image
                alt="product picture"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
