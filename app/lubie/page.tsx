"use client"; // This is a client component 👈🏽
import React from "react";
import Herosec from "./section/Herosec";
import Navbar from "./section/Navbar";
import StoreSection from "./section/Store";
import Products from "./section/Products";
import FooterSection from "./section/Footersec";
import Testimonials from "./section/Testimonials";
import AboutSection from "./section/AboutUs";
import ContactSection from "./section/Contact";
import Footer from "@/app/components/section/Footer/Footer";
import Store from "@/app/components/section/Store/Stores";
// layout
export default function Page() {
  return (
    <div className="flex-col bg-white w-full h-screen ">
      <Navbar />
      <Herosec />
      <Products />
      <AboutSection />
      <ContactSection />
      <Testimonials />
      <Store />
      <Footer variant="lubie" />
    </div>
  );
}
