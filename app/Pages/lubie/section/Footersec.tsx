import {phone, email, shoppingbag, lazada,facebook,tiktok, instagram, linkedin, twitter, apexsmall, mercury, rose,lazada_store, shopee_store, snr, watsons} from '@/public/assets/lubie'

import Image from "next/image";
export default function FooterSection() {
  return (
    <div className='bg-lubie-navy-blue mx-auto pb-5 pt-20 '>
            {/* Text Columns*/}
            <div className=' h-full w-full max-w-screen-xl text-white grid  gap-y-10 grid-cols-2 p-5 md:p-0 md:grid-cols-4 items-center  md:mx-auto md:px-36   '>
                {/* 1st Column */}
                    <div className='h-full flex flex-col gap-y-3 justify-start  '>
                        <p className='text-base'>Contact Us</p>
                        <div className='flex gap-x-2'>
                        <Image
                            src={phone}
                            alt='herlubie'
                            className=' object-contain '
                            
                        />
                            <p className='text-sm text-lubie-light-blue flex items-center'>+639-xxxxxxxxx</p>
                        </div>
                        <div className='flex gap-x-2'>
                        <Image
                            src={email}
                            alt='herlubie'
                            className=' object-contain '
                            
                        />
                            <p className='text-sm text-lubie-light-blue flex items-center'>+639-xxxxxxxxx</p>
                        </div>
                        
                    </div>
                {/* 2nd Column */}
                    <div className=" flex flex-col gap-y-3 justify-start">
                        <p className='text-base'>Information</p>
                        
                        <div className='flex flex-col  gap-y-3 '>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        About Us
                        </a>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        Our Products
                        </a>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        Customer Reviews
                        </a>
                        <a href='#' className='text-sm text-lubie-light-blue'>
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
                    <a href='#' className='text-sm text-lubie-light-blue'>
                    <p className='text-sm text-lubie-light-blue flex items-center'>Shopee</p>
                    </a>
                      
                    </div>
                    <div className='flex gap-x-2'>
                        
                    <Image
                        src={lazada}
                        alt='herlubie'
                        className=' object-contain '
                        
                    />
                    <a href='#' className='text-sm text-lubie-light-blue'>
                    <p className='text-sm text-lubie-light-blue flex items-center'>Lazada</p>
                    </a>
                      
                    </div>
                    
                </div>
                {/* 4th Column */}
                <div className=" flex flex-col gap-y-3 justify-start">
                        <p className='text-base'>Others</p>
                        
                        <div className='flex flex-col  gap-y-3 '>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        Supports
                        </a>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        Services
                        </a>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        Terms and Conditions
                        </a>
                        <a href='#' className='text-sm text-lubie-light-blue'>
                        Privacy Policy
                        </a>
                        </div>
                        
                    </div>

            
            </div>
            {/* Socials */}
            <div className='mt-12 flex justify-center items-center gap-x-7'>
                <a href='#'>
                    <Image
                                src={tiktok}
                                alt='herlubie'
                                className=' object-contain '
                                
                    />
                </a>
                <a href='#'>
                    <Image
                                src={instagram}
                                alt='herlubie'
                                className=' object-contain '
                                
                    />
                </a>
                <a href='#'>
                    <Image
                                src={facebook}
                                alt='herlubie'
                                className=' object-contain '
                                
                    />
                </a>
                <a href='#'>
                    <Image
                                src={linkedin}
                                alt='herlubie'
                                className=' object-contain '
                                
                    />
                </a>
                <a href='#'>
                    <Image
                                src={twitter}
                                alt='herlubie'
                                className=' object-contain '
                                
                    />
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
                <p className='text-lubie-light-blue text-10'>2021 © COPYRIGHT. All rights reserved.</p>
                        

            </div>
        
    </div>
        

    
  )
}
