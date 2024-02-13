import React from 'react';
import Slider from 'react-slick';
import Cards from '@/components/cards/review'; // Import your Cards component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/public/assets/ap_testimonial_1_img.jpeg';

export default function Cardslide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true
  };

  return (
    <Slider {...settings}>
      <div>
        <Cards
          Comment={"Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use."}
          ImageUrl="/assets/ap_testimonial_1_img.jpeg"
          ImageAlt="Testimonial 1"
          CustomerName="Mark Ivor Glorioso"
        />
      </div>
      <div>
        <Cards
          Comment={"Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use."}
          ImageUrl="/assets/ap_testimonial_2_img.jpeg"
          ImageAlt="Testimonial 2"
          CustomerName="John D Smith"
        />
      </div>
      <div>
        <Cards
          Comment={"Delivery was fast, will definitely buy again. Thank you. Kahit water-based sya hndi sya mabilis magdry. good qualoty sya hndi naman sya malagkit gamitin ok sya for moisturizer dn sa mga rough/dry patches. Must have to kasi madami syang use."}
          ImageUrl="/assets/ap_testimonial_3_img.jpeg"
          ImageAlt="Testimonial 3"
          CustomerName="ivor"
        />
      </div>
    </Slider>
  );
}
