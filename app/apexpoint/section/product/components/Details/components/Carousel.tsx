"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { ProductData } from "@/app/components/data/apexpoint/productData";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ name, logo, url }: ProductData) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const content = logo?.map(
    (item, index) =>
      url && (
        <Link href={url} key={index}>
          <Image
            src={item.src}
            alt={item.name}
            className="rounded-2xl object-contain w-full h-auto shadow-md"
          />
        </Link>
      )
  );

  return (
    <div className="w-1/2">
      <Slider {...settings}>{content}</Slider>
    </div>
  );
};

export default Carousel;
