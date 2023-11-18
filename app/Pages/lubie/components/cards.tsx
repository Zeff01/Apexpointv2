import React from 'react'
import Stars from './stars'
import Image from 'next/image'
import { icon1 } from '@/public/assets/lubie'
function Cards() {
  return (
    <div className='flex flex-col justify-center w-[360px] h-[390px] border-[1px] p-4 rounded-md shadow-lg'>

        <div className="w-full flex justify-between">
            <div className="">
              <Stars totalStars={3}/>
            </div>
            <div className="self-end text-[50px] font-abhaya-libre font-extrabold text-lubie-sky-blue">
              <p className='h-[46px] text-gray-200'>“</p>
            </div>
        </div>
        <div className="p-4 "><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mattis quam. Morbi non suscipit justo. Nam eu consectetur dolor. Quisque ut eleifend nibh. Donec ut massa elit. Sed quis.</p></div>
        <div className="  w-full h-[7vh] flex justify-center">
            <div className="border-gray-200 w-[90%] border-b h-full"></div>
        </div>
        <div className="w-full flex  justify-start space-x-6 p-2">
            <div className="rounded-full p-2 w-[70px] h-[70px] bg-lubie-gray-white">
            
            </div>
          <div className="flex flex-col justify-center">
              <p className='font-bold'>Customer Name</p>
              <p className='text-xs'>CUSTOMER</p>
          </div>

        </div>

    </div>
  )
}

export default Cards
