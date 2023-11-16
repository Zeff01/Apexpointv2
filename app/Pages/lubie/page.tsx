import React from 'react'
import Herosec from './section/Herosec'
import Navbar from './section/Navbar'
import Products from './section/Products'



export default function Page() {
  return (
    <div className="border-2 border-black flex-col text-black bg-white w-full h-screen">
        <div className="">
          <Navbar/>
          <Herosec/>
          <Products />
      
          </div>
        </div>

  )
}