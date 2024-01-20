import React from "react";

const Heading = () => {
  return (
    <div className="w-full flex justify-start min-[375px]:justify-center sm:justify-start items-center sm:items-start ">
      <h1 className="text-3xl min-[320px]:text-4xl min-[425px]:text-4xl md:text-5xl lg:text-6xl px-0 font-black uppercase whitespace-nowrap drop-shadow-md text-shadow ">
        less is{" "}
        <span className="text-apexpoint-dark-orange drop-shadow-2xl text-outline">
          more
        </span>
      </h1>
    </div>
  );
};

export default Heading;
