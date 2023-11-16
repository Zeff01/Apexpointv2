import React from 'react'
import Button from '../components/button'
import Image from "next/image";
import Icons from '../components/icons';
import {Lubiehero,LubieHero2,icon1,icon2, icon3, icon4, icon5, icon6} from '@/public/assets/lubie'
function Herosec() {
  return (
    <div className='h-[110vh] w-full top-0 flex flex-col text-lubie-dark-blue bg-lubie-light-blue pt-28 md:space-y-12 space-y-0'>
        <div className="w-full h-1/2 flex flex-row justify-center ">
            <div className="flex flex-col w-1/2  items-center justify-center  ">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <p>Nature & Health</p>
                    <p className='md:text-4xl text-2xl font-extrabold'>
                        The first multi-purpose <br/> FDA registered Lube in <br/> the Philippines</p>
                    <Button/>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-start w-1/2  ">
                    <div className="h-3/4 w-3/4  sticky mb-[10%]">
                    <Image
                        src={Lubiehero}
                        alt='herlubie'
                        className=' object-contain z-0'
                        layout='fill'
                    />
                    </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full inherit">
            <div className="flex w-full md:w-auto justify-center bg-inherit   ">
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
        <div className="h-[45vh] w-full flex md:flex-row flex-col md:space-y-0 space-y-24 items-center  absolute md:top-[95vh] top-[105vh]">
            <div className="flex justify-center md:w-1/2 w-full h-full  ">
                <Image
                    src={LubieHero2}
                    alt='herlubie'
                    className=' object-contain md:w-[500px] w-[300px] md:mb-8 mb-0'
                />
            </div>
            <div className="w-1/2 h-full flex justify-center ">
                <div className="flex flex-col md:w-1/2 w-full items-center space-y-6 text-center ">
                    <p>Nature & Health</p>
                    <p className='md:text-2xl text-xl  font-extrabold'>The first multi-purpose <br/> FDA registered Lube in <br/> the Philippines</p>
                    <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor sitametamet</p>
                    <Button/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Herosec
