import React from "react";
import Navbar from "./section/NavBar/Navbar";
import Hero from "./section/Hero/hero";
import Product from "./section/Product/product";
import Testimonials from "./section/Testimonials/page";
import About from "./section/About/page";
import Footer from "@/components/footer/Footer";
import Store from "@/components/sections/Stores";
import Banner from "./section/Banner/banner";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Banner />
      <div className="flex flex-col sm:flex-col-reverse md:flex-col-reverse lg:flex-col">
        {/* <Contacts /> */}
        <Testimonials />
      </div>
      <Store />
      <Footer variant="chlorelief" />
    </>
  );
}
