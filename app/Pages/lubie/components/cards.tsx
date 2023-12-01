import React from 'react'
import Stars from './stars'
import Image from 'next/image';

interface cardProps {
  stars: number;
  description: string;
  name: string;
}
function Cards({stars, description, name}:cardProps) {
  return (
    <div className='flex flex-col justify-center w-auto  h-[390px] border-[1px] p-4 shadow-xl bg-white md:w-[360px] sm:w-auto sm:z-50 sm:pl-[10%]'>
        <div className="w-full flex justify-between">
            <div className="">
              <Stars totalStars={stars}/>
            </div>
            <div className="self-ce text-[50px] font-abhaya-libre font-extrabold text-lubie-sky-blue">
              <p className='h-[46px] text-gray-200'>“</p>
            </div>
        </div>
        <div className="p-4 "><p>{description}</p></div>
        <div className="  w-full h-[7vh] flex justify-center">
            <div className="border-gray-200 w-[90%] border-b h-full"></div>
        </div>
        <div className="w-full flex  justify-start space-x-6 p-2">
            <div className="rounded-full p-2 w-[70px] h-[70px] bg-lubie-gray-white">

            </div>
          <div className="flex flex-col justify-center">
              <p className='font-bold'>{name}</p>
              <p className='text-xs'>CUSTOMER</p>
          </div>

        </div>

    </div>
  )
}

export default Cards
