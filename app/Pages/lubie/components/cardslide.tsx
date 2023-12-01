// Cardslide.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Cards from './cards'; // Import your Cards component
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Cardslide() {
  return (
    <Swiper
    spaceBetween={100} // Adjust space between slides
    slidesPerView={1} // Show one card at a time
    pagination={{ clickable: true }} // Enable clickable pagination
    scrollbar={{ draggable: true }} // Enable draggable scrollbar
    autoplay={{
      delay: 2000, // Delay in milliseconds between slides
      disableOnInteraction: true // Continue autoplay after interaction
    }}
  >
    <SwiperSlide ><Cards
    stars={5}
    description="The product was well-packaged. I bought this because forums said this was the best lube because it has no irritants at all."
    name="A***."/></SwiperSlide>

    <SwiperSlide><Cards 
    stars={5}
    description="Safe and effective. Im allergic to glycerin and this product helps a lot"
    name="R***."
    /></SwiperSlide>

    <SwiperSlide><Cards 
    stars={5}
    description="I have dry skin in my private area and when I tried this product, it's really effective. It's not itchy anymore. 
    Watsons really put effort in their packaging. It was packed securely and no damages on the product."
    name="K***"/></SwiperSlide>
    {/* Add more SwiperSlides if needed */}
  </Swiper>
  );
}
