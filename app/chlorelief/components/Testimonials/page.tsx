"use client";

import React from "react";
import TestimonialsComponent from "./cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "@/public/assets/ap_testimonial_1_img.jpeg"
import Image2 from "@/public/assets/ap_testimonial_2_img.jpeg"
import Image3 from "@/public/assets/ap_testimonial_3_img.jpeg"
import { StaticImageData } from "next/image";


interface TestimonialsProps {
  StarRating : string;
  Description: string;
  ImageUrl : StaticImageData;
  CustomerName: string;
  Customer: string;
}

const Testimonials: React.FC = () => {
  const TestimonialsData: TestimonialsProps[] = [
    {
      StarRating: '★★★★★',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: Image,
      CustomerName: 'John Doe',
      Customer: 'CEO, Company XYZ',
    },
    {
      StarRating: '★★★★☆',
      Description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ImageUrl:Image2,
      CustomerName: 'Jane Doe',
      Customer: 'CTO, Company ABC',
    },
    {
      StarRating: '★★★☆☆',
      Description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      ImageUrl:Image3,
      CustomerName: 'Alice Johnson',
      Customer: 'Designer, Company XYZ',
    },
    // Add more data as needed
  ];

  return (
    <div className="testimonials flex flex-col items-center bg-chlorelief-star-green h-[80vh] sm:h-[100vh]">
      <div className="container text-lubie-dark-blue">
        <div className="wrapper flex items-center text-black pt-10 justify-center text-center flex-col md:flex-row md:text-left md:pt-20">
          <div className="left flex flex-col">
            <p className="text-sm text pt-2 font-medium">CUSTOMERS REVIEWS</p>
            <h1 className="text-2xl font-extrabold gap-4 flex md:text-3xl md:w-[70%] sm:text-5xl">
              What Our Customers Say About Our Products.
            </h1>
          </div>
          <div className="right text-[10px] my-2 sm:text-sm">
           <p>Lorem ipsum dolor sit amet,</p>
           <p>consectetur adpiscing elit. Aenean nec mattis quam.</p>
           <p>Morbi non suscipit justo. Nam eu consectetur dolor. Quisque ut</p>
           <p>eleifend nibh. Donec ut massa elit. Sed quis</p>
          </div>
        </div>
      </div>
  
      <div className="container w-full flex justify-center items-center">
        <div className="card">
          <div className="wrapper flex">
            <div className="block sm:hidden h-screen">
            </div>
            
            <div className=" mb-10 sm:mt-20">
              <div className="sm:flex md:flex lg:hidden xl:hidden">
              <Swiper
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}  // Enable clickable pagination
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
              }}
            >
              {TestimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialsComponent {...testimonial} />
                </SwiperSlide>
              ))}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div> {/* Add pagination container */}
            </Swiper>
                
              </div>
              <div className="gap-6 hidden sm:hidden md:hidden lg:flex">
                {TestimonialsData.map((testimonial, index) => (
                  <TestimonialsComponent key={index} {...testimonial} />
                ))}
              </div>
              {/* Add more sections as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Testimonials;

