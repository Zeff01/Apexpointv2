"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Header from "@/components/ui/Header";
import Carousel from "@/components/carousel/Carousel";

const Stores = () => {
  return (
    <Section id="store" className="hidden lg:block ">
      <Header className="pb-4">Available to Stores</Header>
      <Carousel />
    </Section>
  );
};

export default Stores;
