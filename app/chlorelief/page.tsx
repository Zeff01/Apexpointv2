import React from 'react';
import Navbar from './section/NavBar/Navbar';
import Hero from './section/Hero/hero';
import Product from './section/Product/product';
import Testimonials from '@/components/sections/testimonials/page';
import About from './section/About/page';
import Footer from '@/components/sections/footer/Footer';
import Store from '@/components/sections/stores/Stores';
import Banner from './section/Banner/banner';
import ContactSection from '@/components/sections/contact/Contact';
import MobileNav from '@/components/sections/Mobilenav/mobilenav';
export default function page() {
  return (
    <>
      <Navbar />
      <MobileNav variant="chlorelief" />
      <Hero />
      <Product />
      <About />
      <Banner />
      <div className="flex flex-col sm:flex-col-reverse md:flex-col-reverse lg:flex-col">
        <ContactSection variant="chlorelief" />
        <Testimonials variant="chlorelief" />
      </div>
      <Store />
      <Footer variant="chlorelief" />
    </>
  );
}
