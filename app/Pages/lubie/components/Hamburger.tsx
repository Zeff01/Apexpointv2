import React,{useState} from 'react'
import Link from 'next/link';

function Hamburger () {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="right">
    {/* Hamburger menu icon */}
    {/* Mobile menu appears on click */}
    <div
      className="hamburger cursor-pointer mb-12 md:cursor-none "
      onClick={() => {setMenuOpen(!menuOpen);}}>
      {/* Mobile menu content */}
      <div className={`fixed top-0 w-[50%] h-screen bg-lubie-gray-white text-lubie-dark-blue flex items-center justify-center ease-in duration-500 z-50  ${menuOpen ?  "left-0" : "left-[-100%]"}`}>
        <div className="flex flex-col items-center">
          {/* Mobile menu links */}
          <Link
            href="#home"
            className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
            onClick={() => {
              setMenuOpen(!menuOpen);}}>
            Home
          </Link>

          <Link
            href="#products"
            className=" text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
            onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link
            href="#home"
            className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
            onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          <Link
            href="#contact"
            className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
            onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

          <Link
            href="/"
            className="text-2xl mb-10 font-medium hover:font-bold transition-color duration-300"
            onClick={() => setMenuOpen(false)}>
            Apexpoint
          </Link>
        </div>
      </div>
      
      {/* Hamburger icon toggle */}
      {menuOpen ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-11 h-12 md:hidden hover:font-bold transition-color duration-1000 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 28 24"
            strokeWidth={2}
            stroke="currentColor"
            className=" w-11 h-12 md:hidden hover:font-bold transition-color duration-1000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </>
      )}
    </div>
  </div>
  )
}

export default Hamburger