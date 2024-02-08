import Image from "next/image";

interface HeroSectionProps {
  SectionClass:string;
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
    SectionClass:"bg-chlorelief-springwood  min-h-screen h-full flex flex-row items-center justify-center font-inter",
    HeaderText: "Your first line of defense",
    Text1: "Lorem ipsum dolor sit eamet Lorem Ipsum",
    Text2: "ipsum dolor sit Lorem ipsum dolor sit",
    Text3: "Lorem ipsum dolor sit eamet Lorem",
    Text4: "ipsum dolor sit Lorem ipsum dolor",
    Text5: "sitametamet",
    TextStyle: "flex flex-col items-center text-lg text-white opacity-90",
    ButtonText: "Learn more",
    ButtonStyle: "border-2 border-red-500 hover:bg-red-500 duration-300 text-white font-bold w-1/2 py-2 rounded-lg my-4 text-lg",
  },
];

export default function Hero() {
  return (
 <>
      {Data.map((item, index) => (
        <div className={item.SectionClass}>
        <div key={index} className="flex justify-end flex-col-reverse sm:flex-row sm:items-center">
          <div className="flex flex-col justify-end items-center max-w-full-lg w-full gap-2">
            <h1 className="text-white text-4xl font-extrabold text-center pb-6">{item.HeaderText}</h1>
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
          <div className="min-w-screen w-full h-full">
            <Image
              src="/assets/Group 70.png"
              width={600}
              height={800}
              className="min-h-full w-full object-scale-down sm:object-none"
              alt="product picture"
            />
          </div>
        </div>
        </div>
      ))}
      </>
  );
}
