import Image from "next/image";

interface HeroSectionProps {
  SectionClass: string;
  HeaderText: string;
  Text1: string;
  Text2: string;
  Text3: string;
  Text4: string;
  Text5: string;
  TextStyle: string;
  ButtonText: string;
  ButtonStyle: string;
}

const Data: HeroSectionProps[] = [
  {
    SectionClass: "bg-chlorelief-springwood min-h-screen-xl h-full flex flex-row items-center justify-center font-inter pb-10 sm:pb-0 sm:h-screen",
    HeaderText: "Your first line of defense",
    Text1: "Lorem ipsum dolor sit eamet Lorem Ipsum",
    Text2: "ipsum dolor sit Lorem ipsum dolor sit",
    Text3: "Lorem ipsum dolor sit eamet Lorem",
    Text4: "ipsum dolor sit Lorem ipsum dolor",
    Text5: "sitametamet",
    TextStyle: "flex flex-col gap-1 items-center text-gray-200 opacity-90 text-Body-Default sm:text-Body-Desktop",
    ButtonText: "Learn more",
    ButtonStyle: "border-2 border-red-500 hover:bg-red-500 duration-300 text-white font-bold w-1/2 py-2 rounded-lg my-4 Text-Caption-Desktop",
  },
];

export default function Hero() {
  return (
    <>
      {Data.map((item, index) => (
        <div key={index} className={item.SectionClass}>
          <div className="flex justify-end flex-col-reverse sm:flex-row sm:items-center">
            <div className="flex flex-col justify-end items-center max-w-screen-xl w-full gap-2">
              <h1 className="text-white text-Header-Mobile font-bold text-center pb-6 sm:text-Header-Desktop">
                {item.HeaderText}
              </h1>
              <div className={item.TextStyle}>
                <span>{item.Text1}</span>
                <span>{item.Text2}</span>
                <span>{item.Text3}</span>
                <span>{item.Text4}</span>
                <span>{item.Text5}</span>
              </div>
              <button className={item.ButtonStyle}>
                {item.ButtonText}
              </button>
            </div>
            <div className="min-w-screen w-full h-full flex justify-center items-center">
              <Image
                src="/assets/chlorelief-assets/Group 70.png"
                width={800} // Increased width for a bigger image
                height={800} // Adjust height accordingly to maintain aspect ratio
                className="min-h-full w-full object-contain sm:object-none" // Adjusted class for bigger image
                alt="product picture"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
