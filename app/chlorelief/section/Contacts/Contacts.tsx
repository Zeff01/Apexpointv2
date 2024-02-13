// 'use client'
// import Link from 'next/link';
// import React from 'react';
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import { FaTiktok } from "react-icons/fa";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaPhoneAlt } from "react-icons/fa";
// import { CgMail } from "react-icons/cg";

// const Contacts = () => {
//   return (
//     <div id='contact' className='min-h-screen h-full w-screen flex gap-4 flex-col justify-center items-center my-20 sm:gap-10 sm:flex-col md:flex-col lg:flex-row ]'>
//       <div className="left flex flex-col items-center border-4 border-green-500 shadow-lg px-24 py-10 rounded-xl sm:px-10 sm:w-[56%] md:w-[50%] md:h-[15%] lg:h-[96%] ">
//         <h1 className='sm:text-2xl lg:text-3xl '>Connect with us</h1>
//         <div className='hidden justify-center items-center text-md h-full sm:hidden sm:h-full text-xl md:hidden lg:flex flex-col'>
//           <p className='flex items-center text-xl underline'><IoLocationSharp />123, Hero St</p>
//           <p className='flex items-center text-xl underline'><FaPhoneAlt />12312312341</p>
//           <p className='flex items-center text-xl underline'><CgMail />info@gmail.com</p>
//         </div>

//         <div className='flex gap-3 text-xl'>
//           <Link href='/'><FaFacebook /></Link>
//           <Link href='/'><FaTwitter /></Link>
//           <Link href='/'><PiInstagramLogoFill /></Link>
//           <Link href='/'><FaTiktok /></Link>
//         </div>
//       </div>
//       <div className="right border-2  border-green-500 bg-gray-100 h-auto w-auto px-20 py-10 rounded-xl sm:w-auto lg:h-6/6 sm:h-auto text-gray-400 xl:h-[96%]">
//         <h1 className=' mb-10 text-center sm:text-2xl lg:text-4xl pb-20'>For Bulk Orders</h1>
//         <form action="" className='flex flex-col gap-2'>
//           <label htmlFor="name">Name</label>
//           <input className='border-2 rounded-md w-full border-black mb-4' type="text" name="name" id="name" />
//           <label htmlFor="email">Email</label>
//           <input className='border-2 rounded-md w-full border-black mb-4' type="text" name="email" id="email" />
//           <label htmlFor="contact">Contact</label>
//           <input className='border-2 rounded-md w-full border-black mb-4' type="text" name="contact" id="contact" />
//           <label htmlFor="message">Message</label>
//           <textarea className='border-2 p-2 rounded-md w-full border-black mb-4' name="message" id="message" rows={3} />
//           <button className='mx-auto py-1 px-5 rounded-xl hover:px-6 duration-100 bg-chlorelief-button text-white' type='submit'>Submit Order</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contacts;
