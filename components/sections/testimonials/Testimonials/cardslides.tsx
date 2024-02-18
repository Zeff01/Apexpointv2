import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/public/assets/chlorelief-assets/ap_testimonial_1_img.jpeg";

interface CardSlideProps {
  cards: React.ReactNode[]; // You can adjust this type based on the actual type of your cards
}

const CardSlide: React.FC<CardSlideProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    arrow: false,
  };

  return <Slider {...settings}>{cards}</Slider>;
};

export default CardSlide;
