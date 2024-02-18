// Cardslide.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from '@/components/cards/review'; // Import your Cards component
import Testimonials from '@/app/apexpoint/section/testimonials/Testimonials';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Cardslide() {
  return (
    <Swiper
    spaceBetween={50} // Adjust space between slides
    slidesPerView={1} // Show one card at a time
    pagination={{ clickable: true }} // Enable clickable pagination
    scrollbar={{ draggable: true }} // Enable draggable scrollbar
    autoplay={{
      delay: 2500, // Delay in milliseconds between slides
      disableOnInteraction: false // Continue autoplay after interaction
    }}
  >
    <SwiperSlide>
      {/* <Cards comment='sample' name='john doe' img="/#"/> */}
    </SwiperSlide>
    
    {/* Add more SwiperSlides if needed */}
  </Swiper>
  );
}
