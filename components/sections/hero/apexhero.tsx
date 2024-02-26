"use client"
import React from 'react'
import ApexSwiper from "@/components/carousel/ApexHeroCarousel"
import Header from '@/app/apexpoint/section/hero/components/Header';
const apexhero = () => {
  return (
    <section className="min-h-screen bg-apexpoint-light-orange flex justify-center items-center flex-col gap-8 md:gap-4">
        <Header />
       <ApexSwiper />
      <p className="md:w-[600px] text-center text-xl">
      ApexPoint Pharmaceutical and Medical Supplies Manufacturing OPC. Providing superior products with the use of <span className="text-chlorelief-soft-green">sustainable</span> raw materials.
      </p>
      
      <a href="#contact">
 <button className="bg-chlorelief-chateaugreen text-white p-3 rounded-md">
 Contact Us
 </button>
      </a>
    </section>
  )
}

export default apexhero