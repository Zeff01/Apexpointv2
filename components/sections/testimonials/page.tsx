'use client';
import React from 'react';
import Cards from '@/components/cards/review';
import Cardslide from './cardslides';
import { TestimonialType, testimonialData } from '@/components/data/chlorelief/testimonialData';

type VariantType = 'chlorelief' | 'lubie';

interface TestimonialsProps {
  variant: VariantType;
}

function Testimonials({ variant }: TestimonialsProps) {
  const testimonialCards = testimonialData.map((item: TestimonialType, index) => {
    return (
      <div key={index} className="w-full md:w-auto items-center justify-center container">
        <Cards name={item.name} comment={item.comment} img={item.img} />
      </div>
    );
  });

  const containerClassName = `container flex flex-col justify-evenly items-center text-center lg:flex-row lg:text-start gap-4 ${
    variant === 'chlorelief' ? 'bg-chlorelief-star-green' : 'bg-lubie-navy-blue'
  }`;

  return (
    <div
      className={`testimonials min-h-screen flex flex-col justify-center items-center h-full w-full ${variant === 'chlorelief' ? 'bg-chlorelief-star-green' : 'bg-lubie-navy-blue'} pt-4 pb-8`}
    >
      <div className={containerClassName}>
        <div>
          <p
            className={`text-Body-Desktop text pt-2 font-medium ${variant === 'chlorelief' ? 'text-black' : 'text-white'}`}
          >
            CUSTOMERS REVIEW
          </p>
          <h1
            className={`text-Header-Mobile p-4 font-extrabold gap-2 flex md:text-Header-Default max-w-screen-sm ${variant === 'chlorelief' ? 'text-black' : 'text-white'}`}
          >
            What Our Customers Say About Our Products
          </h1>
        </div>
        <div className="right text-Body-Default w-4/5 lg:w-1/3 my-2 pb-4">
          <p className={`${variant === 'chlorelief' ? 'text-black' : 'text-white'}`}>
          We take pride in delivering high-quality skincare products that nourish and enhance the natural beauty of your skin. But don't just take our word for it hear what our happy customers have to say!
          </p>
        </div>
      </div>

      <div className="w-full flex justify-between px-4">
        <div className="w-full block md:hidden">
          <Cardslide cards={testimonialCards} />
        </div>
        <div className="hidden md:flex w-full items-center justify-center gap-4 pt-16 min-[768px]:flex-col lg:flex-row">
          {testimonialCards}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
