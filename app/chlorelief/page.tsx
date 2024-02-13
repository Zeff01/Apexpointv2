import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import Product from "./components/Product/product";
import Testimonials from "./components/Testimonials/page";
import About from "./components/About/page";
import Footer from "@/app/components/section/Footer/Footer";
import Store from "@/app/components/section/Store/Stores";
import Banner from "./components/Banner/banner";

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
