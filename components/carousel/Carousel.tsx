import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  StoresData,
  storesData,
} from "@/components/data/apexpoint/storesData";
import Image from "next/image";

const Carousel = () => {
  const storesSlider = storesData.map((store: StoresData, index) => (
    <div
      key={index}
      className="h-[35px] w-full items-center justify-center my-0 mx-auto container"
    >
      <Image
        className="h-full w-auto object-contain"
        src={store.store}
        alt={store.name}
      />
    </div>
  ));

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 3,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          speed: 5000,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 3000,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden py-[20px] px-0">
      <Slider {...settings}>{storesSlider}</Slider>
    </div>
  );
};

export default Carousel;
