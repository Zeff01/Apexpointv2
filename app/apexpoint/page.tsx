import React, { FunctionComponent } from "react";
import { Poppins } from "next/font/google";
import Contact from "./section/contact/Contact";
import { Products } from "./section/product/Products";
import Navbar from "./section/navbar/Navbar";
import Hero from "./section/hero/Hero";
import About from "./section/about/About";
import Stores from "../components/section/Stores";
import Footer from "./section/footer/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <main className={poppins.className}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Stores />
      <Footer />
    </main>
  );
};

export default page;
