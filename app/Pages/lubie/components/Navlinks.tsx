import React from 'react'
import Link from 'next/link'

 function Navlinks  (){
  return (
    <div className="middle  grow-1 items-center justify-center pt-7 hidden md:flex">
    <div className="itemContainer flex items-center justify-center mr-12">
      <Link href="#home" className="text-sm hidden md:block hover:font-bold  transition-color duration-300">
          Home
        </Link>
      </div>
      <div className="itemContainer flex items-center justify-center mr-12">
      <Link href="#products" className="text-sm hidden md:block hover:font-bold  transition-color duration-300">
          Products
    </Link>
      </div>
      <div className="itemContainer flex items-center justify-center mr-12">
     <Link href="" className="text-sm hidden md:block hover:font-bold  transition-color duration-300">
          About Us
        </Link>
      </div>
      <div className="itemContainer flex items-center justify-center mr-12">
      <Link href="#contact" className="text-sm hidden md:block hover:font-bold  transition-color duration-300">
          Contact Us
        </Link>
      </div>
      <div className="itemContainer flex items-center justify-center mr-12">
      <Link href="/" className="text-sm hidden md:block hover:font-bold  transition-color duration-300">
          Apexpoint
        </Link>
      </div>
      </div>
  )
}

export default Navlinks;
