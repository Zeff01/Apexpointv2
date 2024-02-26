import React, { FunctionComponent } from 'react';
import { Poppins } from 'next/font/google';
import Contact from './section/contact/Contact';
import { Products } from './section/product/Products';
import Navbar from './section/navbar/Navbar';

import About from './section/about/About';
import Stores from '../../components/sections/stores/Stores';
import Footer from './section/footer/Footer';
import MobileNav from '@/components/sections/Mobilenav/mobilenav';
import Hero from "@/components/sections/hero/apexhero"
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const page = () => {
  return (
    <main className={poppins.className}>
      <Navbar />
      <MobileNav variant="apex" />
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
