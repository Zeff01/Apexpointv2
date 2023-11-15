import React from 'react'
import Herosec from './section/Herosec'
import Products from './section/Products'
export default function page() {
  return (
    <div className="border-2 border-black flex-col text-black bg-white w-full h-screen">
        <div className=""><Herosec/></div>
        <div className=""><Products /></div>

        </div>

      
  )
}
