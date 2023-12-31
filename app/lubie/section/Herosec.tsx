import React from "react";
import Button from "../components/button";
import Image from "next/image";
import Icons from "../components/icons";
import {
  Lubiehero,
  LubieHero2,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
} from "@/public/assets/lubie";
function Herosec() {
  return (
    <>
      <div className="h-screen w-full  flex flex-col items-center  bg-lubie-light-blue md:space-y-12 space-y-6 font-ubuntu text-lubie-navy-blue">
        <div className="w-full md:h-1/2 h-1/4 flex  flex-row justify-center  md:[mt-18px] mt-[15vh] md:[mb-0] mb-[5vh]">
          <div className="flex flex-col w-1/2 text-center items-center justify-center  space-y-8">
            <p>Nature & Health</p>
            <p className="md:text-4xl text-2xl font-extrabold">
              The first <br ></br> multi-purpose  FDA registered Lube in  the
              Philippines
            </p>
            <Button title="Read More" />
          </div>
          <div className="hidden md:flex items-center justify-start w-1/2  ">
            <div className="h-3/4 w-3/4  sticky mb-[10%]">
              <Image
                src={Lubiehero}
                alt="herlubie"
                className=" object-contain z-0"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className=" flex items-start h-[100%] w-full ">
          <div className="flex flex-col md:flex-row justify-center items-center mt-12 w-full">
              <div className="flex w-full md:w-auto justify-center">
                <Icons imageUrl={icon1} />
                <Icons imageUrl={icon2} />
              </div>
              <div className="flex w-full md:w-auto justify-center ">
                <Icons imageUrl={icon3} />
                <Icons imageUrl={icon4} />
              </div>
              <div className="flex w-full md:w-auto justify-center ">
                <Icons imageUrl={icon5} />
                <Icons imageUrl={icon6} />
              </div>
            </div>
        </div>
        <div className=" w-full flex md:flex-row flex-col md:space-y-0 space-y-4 items-center  absolute md:top-[650px] top-[1000px] z-10">
          <div className="flex justify-center md:w-1/2 w-full h-full  ">
            <Image
              src={LubieHero2}
              alt="herlubie"
              className=" object-contain md:w-[500px] w-[300px] md:mb-8 mb-0"
            />
          </div>
          <div className="w-1/2 h-full flex justify-center ">
            <div className="flex flex-col md:w-1/2 w-full items-center space-y-6 text-center ">
              <p>Nature & Health</p>
              <p className="md:text-3xl text-xl font-extrabold w-[80%]">
                Water-based moisturizer
              </p>
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
                dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem
                ipsum dolor sitametamet
              </p>
              <Button
              title="Read More" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:h-[0vh] h-[50vh]"></div>
    </>
  );
}

export default Herosec;
