import {phone, email, shoppingbag, lazada,facebook,tiktok, instagram, linkedin, twitter, apexsmall, mercury, rose,lazada_store, shopee_store, snr, watsons} from '@/public/assets/lubie'
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
export default function FooterSection() {
  return (
    <div className='bg-chlorelief-springwood mx-auto pb-5 pt-20 '>
            {/* Text Columns*/}
            <div className=' h-full w-full max-w-screen-xl text-white md:grid hidden gap-y-10 grid-cols-2 p-5 md:p-0 md:grid-cols-4  md:mx-auto md:px-36   '>
                {/* 1st Column */}
                    <div className='h-full flex flex-col gap-y-3 justify-start  '>
                        <p className='text-base'>Contact Us</p>
                        <div className='flex gap-x-2'>
                        <Image
                            src={phone}
                            alt='herlubie'
                            className=' object-contain '

                        />
                            <p className='text-sm  flex items-center'>+639-xxxxxxxxx</p>
                        </div>
                        <div className='flex gap-x-2'>
                        <Image
                            src={email}
                            alt='herlubie'
                            className=' object-contain '

                        />
                            <p className='text-sm flex items-center'>+639-xxxxxxxxx</p>
                        </div>

                    </div>
                {/* 2nd Column */}
                    <div className=" flex flex-col gap-y-3 justify-start">
                        <p className='text-base'>Information</p>

                        <div className='flex flex-col  gap-y-3 '>
                        <a href='#' className='text-sm '>
                        About Us
                        </a>
                        <a href='#' className='text-sm '>
                        Our Products
                        </a>
                        <a href='#' className='text-sm '>
                        Customer Reviews
                        </a>
                        <a href='#' className='text-sm '>
                        Brands
                        </a>
                        </div>

                    </div>
                {/* 3rd Column */}
                  <div className='h-full flex flex-col gap-y-3 justify-start  '>
                    <p className='text-base'>Our Shops</p>
                    <div className='flex gap-x-2'>

                    <Image
                        src={shoppingbag}
                        alt='herlubie'
                        className=' object-contain '

                    />
                    <a href='#' className='text-sm '>
                    <p className='text-sm -blue flex items-center'>Shopee</p>
                    </a>

                    </div>
                    <div className='flex gap-x-2'>

                    <Image
                        src={lazada}
                        alt='herlubie'
                        className=' object-contain '

                    />
                    <a href='#' className='text-sm '>
                    <p className='text-sm  flex items-center'>Lazada</p>
                    </a>

                    </div>

                </div>
                {/* 4th Column */}
                <div className=" flex flex-col gap-y-3 justify-start">
                        <p className='text-base'>Others</p>

                        <div className='flex flex-col  gap-y-3 '>
                        <a href='#' className='text-sm '>
                        Supports
                        </a>
                        <a href='#' className='text-sm '>
                        Services
                        </a>
                        <a href='#' className='text-sm '>
                        Terms and Conditions
                        </a>
                        <a href='#' className='text-sm '>
                        Privacy Policy
                        </a>
                        </div>

                    </div>


            </div>
            {/* Socials */}
            <div className='mt-12 w-full text-white flex justify-center items-center gap-x-7'>
                <a href='#' className='text-2xl'>
                     <FaFacebook />
                </a>
                <a href='#' className='text-2xl'>
                     <FaTiktok />
                </a>
                <a href='#' className='text-2xl'>
                     <CiLinkedin />
                </a>
                <a href='#' className='text-2xl'>
                    <PiInstagramLogoFill />
                </a>
                <a href='#' className='text-2xl'>
                    <FaTwitter />
                </a>


            </div>
            {/* Apex */}
            <div className='mt-1 flex justify-center items-center '>
                <a href='#'>
                    <Image
                                src={apexsmall}
                                alt='herlubie'
                                className=' object-contain '

                    />
                </a>
                <p className='text-white text-10'>2021 © COPYRIGHT. All rights reserved.</p>


            </div>

    </div>



  )
}
