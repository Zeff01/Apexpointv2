import React from 'react'
import Image from 'next/image'
import bannerImg from '@/public/assets/chlorelief-products/chlorelief-landscape.jpg'
const Banner = () => {
  return (
     <div className="w-full h-50 hidden sm:block">
      <Image
        src={bannerImg}
        alt="Banner"
        layout="responsive"
        width={1000}
        height={500}
      />
    </div>
  )
}

export default Banner