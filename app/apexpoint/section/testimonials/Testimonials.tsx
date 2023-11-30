import React from "react";
import Header from "./Header";
import Card from "./Card";

const Testimonials = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center my-10 gap-10 md:my-24 md:gap-28">
      <Header />
      <div className="flex flex-col md:flex-row gap-10 md:gap-4  lg:gap-6 xl:gap-8">
        <Card
          name="Name"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
        />
        <Card
          name="Name"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore"
        />
        <Card
          name="Name"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore"
        />
      </div>
    </main>
  );
};
export default Testimonials;
