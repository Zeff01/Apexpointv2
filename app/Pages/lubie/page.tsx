import React from 'react'
import Herosec from './section/Herosec'
import Navbar from './section/Navbar'
import StoreSection from './section/Store'
import Products from './section/Products'
import FooterSection from './section/Footersec'

// layout
export default function Page() {
  return (
    <div className="flex-col bg-white w-full h-screen">

          <Navbar/>
          <Herosec/>
          <Products />
          <StoreSection/>
          <FooterSection/>

        </div>

  )
}