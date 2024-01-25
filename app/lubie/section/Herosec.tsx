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
import Header from "../components/animation/hero/header"
import Intro from "../components/animation/hero/introduction"

function Herosec() {
  return (
    <>
      <div className="h-[120vh] md:h-screen w-full  flex flex-col items-center  bg-lubie-navy-blue md:space-y-18 space-y-12 font-ubuntu text-lubie-white-color">
        <div className="w-full md:h-1/2 h-screen flex  flex-row justify-center  md:[mt-10px] mt-[15vh] mb-[2vh] md:mb-[2vh]">
          <div className="flex flex-col md:w-1/8 items-center md:ml-32 mt-2 space-y-8">
            <p className="text-center   md:text-right mb-2">Nature & Health</p>
            <Intro />
            <Button title="Read More" />
          </div>
          <div className="hidden md:flex justify-start   lg:ml-10 w-1/2  ">
            <div className="h-[125%] w-[125%]  sticky ml-20 ">
              <Header />
            </div>
          </div>
        </div>
        <div className=" flex items-start  w-full ">
          <div className="flex flex-col md:flex-row justify-center items-center  mb-32  w-full">
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
        <div className=" w-auto flex md:flex-row flex-col md:space-y-0 space-y-4 items-center  absolute md:top-[100vh] top-[1000px] z-10">
          <div className="flex justify-center iw-1/2 md:w-full h-full  ">
            <Image
              src={Lubie}
              alt="herlubie"
              className=" object-contain md:w-[500px] w-[300px] md:mb-12 mb-8"
            />
          </div>
          <div className="md:w-full w-1/2 h-full flex justify-center ">
            <div className="flex flex-col md:w-1/2 w-full items-center space-y-6 text-lubie-dark-blue ">
              <p>Nature & Health</p>
              <h2 className="md:text-2xl text-xl font-extrabold md:w-[auto] text-center">
                <span className=" text-lubie-navy-blue"> Water-based</span> moisturizer
              </h2>
              <p className="md:text-left text-center">
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
