import React from 'react'
import Image from 'next/image'
import bannerImg from '@/public/assets/chlorelief-products/chlorelief-landscape.jpg'
const Banner = () => {
  return (
     <div className="w-full h-50 hidden sm:hidden md:hidden lg:block">
      <Image
        src={bannerImg}
        alt="Banner"
        width={1000}
        height={500}
      />
    </div>
  )
}

export default Banner