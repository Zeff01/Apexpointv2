import React from "react";
import Button from "../../_modules/button";
import Image from "next/image";
import Icons from "../../_modules/icons";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
} from "@/public/assets/lubie";
import { motion } from "framer-motion";
import {
  textAnimation,
  headerAnimation,
  containerAnimation,
  itemAnimation,
} from "../../_modules/animation/hero/animation";
import { Lubiehero } from "@/public/assets/lubie";
import Lubie from "@/public/assets/sample.png";

function Herosec() {
  return (
    <div className="  min-h-screen h-full relative">
      <div className="  w-full flex flex-col items-center bg-lubie-navy-blue font-ubuntu text-lubie-white-color  justify-between">
        {/* HERO TEXT AND ICON */}
        <div className="w-full  flex flex-row  justify-center gap-20  pt-12 ">
          <div className="flex flex-col items-center mt-2 space-y-8 ">
            <motion.div
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <p className="text-center md:text-right mb-2">Nature & Health</p>
            </motion.div>
            <motion.div
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <p className="sm:text-2xl md:text-2xl mb-5 text-xl font-bold md:text-right text-center">
                The first <br></br>
                <span className="text-lubie-light-blue text-extra-bold">
                  multi-purpose
                </span>
                FDA registered <br></br>Lube in the Philippines
              </p>
            </motion.div>
            <motion.div
              variants={textAnimation}
              initial="hidden"
              animate="visible"
            >
              <Button title="Read More" />
            </motion.div>
          </div>
          <div className="hidden md:flex justify-start ">
            <div className=" sticky  ">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={headerAnimation}
              >
                <Image
                  src={Lubiehero}
                  alt="Lubiehero"
                  className=" object-contain z-0"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* HERO ICONS */}
        <div className="flex items-start w-full mt-8 pb-8">
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center w-full"
            variants={containerAnimation}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex w-full md:w-auto justify-center"
              variants={itemAnimation}
            >
              <Icons imageUrl={icon1} />
              <Icons imageUrl={icon2} />
            </motion.div>
            <motion.div
              className="flex w-full md:w-auto justify-center"
              variants={itemAnimation}
            >
              <Icons imageUrl={icon3} />
              <Icons imageUrl={icon4} />
            </motion.div>
            <motion.div
              className="flex w-full md:w-auto justify-center"
              variants={itemAnimation}
            >
              <Icons imageUrl={icon5} />
              <Icons imageUrl={icon6} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col  justify-center items-center   mt-8 relative  ">
        <div className="flex justify-center w-full ">
          <Image
            src={Lubie}
            alt="herlubie"
            className="object-contain md:w-[500px] w-[300px] md:mb-12 mb-8"
          />
        </div>
        <div className="w-full flex flex-col mx-auto items-center justify-center  text-lubie-dark-blue ">
          <p>Nature & Health</p>
          <h2 className="md:text-3xl text-xl font-extrabold md:w-[auto] text-center">
            <span className="text-lubie-navy-blue">Water-based</span>{" "}
            moisturizer
          </h2>
          <div className="md:mx-auto ">
            <p className="md:text-left md:text-xl text-center px-5">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
              sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
              dolor sitametamet
            </p>
          </div>
          <Button title="Read More" />
        </div>
      </div>
    </div>
  );
}

export default Herosec;
