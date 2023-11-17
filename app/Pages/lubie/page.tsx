import React from 'react'
import Herosec from './section/Herosec'
import Navbar from './section/Navbar'
import StoreSection from './section/Store'
import Products from './section/products'
import FooterSection from './section/Footersec'

// layout
export default function Page() {
  return (
    <div className="border-2 border-black flex-col text-black bg-white w-full h-screen">
        <div className="">
          <Navbar/>
          <Herosec/>
          <StoreSection/>
          <FooterSection/>
          </div>
        </div>

  )
}