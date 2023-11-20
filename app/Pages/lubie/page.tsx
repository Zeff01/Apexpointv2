import React from 'react'
import Herosec from './section/Herosec'
import Navbar from './section/Navbar'
import StoreSection from './section/Store'
import Products from './section/products'
import FooterSection from './section/Footersec'
import Testimonials from './section/Testimonials'
import AboutSection from './section/AboutUs'

// layout
export default function Page() {
  return (
    <div className="flex-col bg-white w-full h-screen">

          <Navbar/>
          <Herosec/>
          <Products />
          <StoreSection/>
          <Testimonials/>
          <FooterSection/>

        </div>

  )
}