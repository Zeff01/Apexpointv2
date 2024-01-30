//@react-client
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/hero";
import Product from "../components/Product/product";
import Testimonials from "../components/Testimonials/page";
import About from "../components/About/page";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/banner";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <About />
      <Banner/>
      <div className="flex flex-col sm:flex-col-reverse md:flex-col-reverse lg:flex-col">
      <Contacts />
      <Testimonials />
      </div>
      <Footer />
    </>
  );
}
