import React, { FunctionComponent } from "react";
import { Poppins } from "next/font/google";
import Contact from "./section/contact/Contact";
import { Products } from "./section/product/Products";
import Navbar from "./section/navbar/Navbar";
import Hero from "./section/hero/Hero";
import About from "./section/about/About";
// import AvailableAt from "./section/available/AvailableAt";
// import Testimonials from "./section/testimonials/Testimonials";
import Footer from "./section/footer/footer";
import Stores from "./section/stores/Stores";
import MainFooter from "./section/footer/MainFooter";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export interface pageProps {
  //no props
}

const page: FunctionComponent<pageProps> = ({}) => {
  return (
    <main className={poppins.className}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      {/* <Testimonials /> */}
      <Contact />
      {/* <AvailableAt /> */}
      <Stores />
      {/* <Footer /> */}
      <MainFooter />
    </main>
  );
};

export default page;
