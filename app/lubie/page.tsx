"use client"; // This is a client component 👈🏽
import React from "react";
import Herosec from "./section/Hero/Herosec";
import Navbar from "./section/Navbar/Navbar";
import Products from "./section/Product/Products";
import Testimonials from "./section/Testimonials/Testimonials";
import AboutSection from "./section/About/AboutUs";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/footer/Footer";
import Store from "@/components/sections/Stores";

// layout
export default function Page() {
  return (
    <div className="flex-col bg-white w-full">
      <Navbar />
      <Herosec />
      <Products />
      <AboutSection />
      <ContactSection variant="lubie" />
      <Testimonials />
      <Store />
      <Footer variant="lubie" />
    </div>
  );
}
