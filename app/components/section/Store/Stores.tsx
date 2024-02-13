"use client";
import React from "react";
import Section from "@/app/components/ui/Section";
import Header from "@/app/components/ui/Header";
import Carousel from "./components/Carousel";

const Stores = () => {
  return (
    <Section id="store" className="hidden lg:block ">
      <Header className="pb-4">Available to Stores</Header>
      <Carousel />
    </Section>
  );
};

export default Stores;
