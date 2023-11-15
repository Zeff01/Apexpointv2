import React from 'react'
import Button from '../components/button'
import Image from "next/image";
import Icons from '../components/icons';
import {Lubiehero,icon1,icon2, icon3, icon4, icon5, icon6} from '@/public/assets/lubie'
function Herosec() {
  return (
    <div className='h-[100vh] w-full flex flex-col text-lubie-dark-blue bg-lubie-light-blue space-y-12'>
        <div className="w-full h-1/2 flex flex-row border-3 justify-center space-x-32">
            <div className="flex flex-col w-1/2 items-end justify-center  ">
                <div className="flex flex-col items-center space-y-6">
                    <p>Nature & Health</p>
                    <p className='text-3xl text-center font-extrabold'>
                        The first multi-purpose <br/> FDA registered Lube in <br/> the Philippines</p>
                    <Button/>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-start w-1/2  ">

                    <Image
                        src={Lubiehero}
                        alt='herlubie'
                        className='mb-[25%] object-contain w-[60%]'
                    />


            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
            <div className="flex w-full md:w-auto justify-center ">
                <Icons
                    iconsw={icon1}
                    />
                <Icons
                    iconsw={icon2}
                />
            </div>
            <div className="flex w-full md:w-auto justify-center ">
                <Icons
                    iconsw={icon3}
                    />
                <Icons
                    iconsw={icon4}
                />
            </div>
            <div className="flex w-full md:w-auto justify-center ">
                <Icons
                    iconsw={icon5}
                    />
                <Icons
                    iconsw={icon6}
                />
            </div>



        </div>
        <div className="">

        </div>

    </div>
  )
}

export default Herosec
