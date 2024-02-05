import React from "react";
import Button from "../components/button";
import Image from "next/image";
import Icons from "../components/icons";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
} from "@/public/assets/lubie";
import Lubie from "@/public/assets/sample.png";
import Header from "../components/animation/hero/header";
import Intro from "../components/animation/hero/introduction";

function Herosec() {
  return (
    <>
      <div className="h-[120vh] md:h-screen w-full flex flex-col items-center bg-lubie-navy-blue md:space-y-18 space-y-12 font-ubuntu text-lubie-white-color">
        <div className="w-full md:h-1/2 h-screen flex flex-row gap-[10vh] justify-center  md:mt-10px mt-[15vh] mb-[2vh] md:mb-[10vh] ">
          <div className="flex flex-col items-center mt-2 space-y-8 ">
            <p className="text-center md:text-right mb-2">Nature & Health</p>
            <Intro />
            <Button title="Read More" />
          </div>
          <div className="hidden md:flex justify-start ">
            <div className="h-[125%] w-[125%] sticky ">
              <Header />
            </div>
          </div>
        </div>
        <div className="flex items-start w-full">
          <div className="flex flex-col md:flex-row justify-center items-center  mb-32 w-full">
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
        <div className="flex md:mx-[50vh] md:flex-row flex-col md:space-y-0 space-y-4 justify-center items-center absolute md:top-[115vh] top-[125vh] z-10">
          <div className="flex justify-center w-full h-[90%]">
            <Image src={Lubie} alt="herlubie" className="object-contain md:w-[500px] w-[300px] md:mb-12 mb-8" />
          </div>
            <div className="w-full flex flex-col mx-auto items-center justify-center space-y-6 text-lubie-dark-blue">
              <p>Nature & Health</p>
              <h2 className="md:text-3xl text-xl font-extrabold md:w-[auto] text-center">
                <span className="text-lubie-navy-blue">Water-based</span> moisturizer
              </h2>
              <div className="md:mx-auto ">
              <p className="md:text-left md:text-xl text-center px-5">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
                dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem
                ipsum dolor sitametamet
              </p>
              </div>
              <Button title="Read More" />
            </div>
        
        </div>
      </div>
      <div className="w-full md:h-[0vh] h-[60vh]"></div>
    </>
  );
}

export default Herosec;
