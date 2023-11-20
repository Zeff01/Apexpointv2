import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/hero";
import Product from "../components/Product/product";
import About from "../components/About/page";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      {/* <Testimonial />
    <About /> */}
      <About />
      <Contacts />
      <Footer />
    </>
  );
}
