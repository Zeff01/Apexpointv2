import React from 'react'
import Herosec from './section/Herosec'
import Navbar from './section/Navbar'
import StoreSection from './section/Store'
import Products from './section/products'
import FooterSection from './section/Footersec'
<<<<<<< Updated upstream
import Testimonials from './section/Testimonials'
=======
import AboutSection from './section/AboutUs'
>>>>>>> Stashed changes

// layout
export default function Page() {
  return (
<<<<<<< Updated upstream
    <div className="flex-col bg-white w-full h-screen">

=======
    <div className=" bg-white w-full h-screen">
        <div className="">
>>>>>>> Stashed changes
          <Navbar/>
          {/* <Herosec/> */}
          <AboutSection/>
          <StoreSection/>
          <Testimonials/>
          <FooterSection/>

        </div>

  )
}