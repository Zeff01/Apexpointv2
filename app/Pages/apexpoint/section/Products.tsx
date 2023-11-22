import Image from "next/image";
import React from "react";
import chlorelief from "@/public/assets/chlorelief-logo.png";
import chlorelief_img from "@/public/assets/chlorelief_img.svg";
import lubie from "@/public/assets/lubie-name.png";
import lubie_img from "@/public/assets/lubie_img.svg";
import Link from "next/link";

export const Products = () => {
  return (
    <section className="min-w-full grid gap-8 py-8 place-items-center">
      <h1 className="w-64 min-w-full font-semibold text-4xl text-center tracking-wide text-slate-600 mb-12 md:text-4xl">
        Our Products
      </h1>
      <div className="grid gap-8 place-items-center text-left mb-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col order-2 w-[320px] justify-between items-left leading-relaxed lg:order-1 lg:justify-between">
          <Image src={chlorelief} alt="chlorelief" className="w-32 mb-2" />
          <div className="">
            <p className="uppercase font-bold mb-2 text-sm tracking-wider">
              YOUR FIRST LINE OF DEFENSE
            </p>
            <p className="text-slate-500 mb-2 text-sm">
              Meet ChloRelief: an OTC, steroid-free anti-itch and anti-rash
              lotion. Say goodbye to skin issues without worrying about thinning
              or harmful parabens.
            </p>
            <ul className="list-disc list-inside ml-3 text-sm text-slate-500">
              <li>Antibacterial</li>
              <li>Sanitizer</li>
              <li>Paraben-Free</li>
            </ul>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Link href={`/chlorelief`}>
            <Image
              src={chlorelief_img}
              alt="chlorelief_img"
              className="w-[320px] h-auto"
            />
          </Link>
        </div>
      </div>

      <div className="grid gap-8 place-items-center text-left lg:grid-cols-2 lg:gap-20">
        <div className="">
          <Link href={`/lubie`}>
            <Image
              src={lubie_img}
              alt="lubie_img"
              className="w-[330px] h-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col w-[320px] items-left leading-relaxed">
          <Image src={lubie} alt="lubie" className="w-24 mb-2 object-cover" />
          <div className="">
            <p className="uppercase text-sm font-bold mb-2 tracking-wider">
              THE FIRST MULTI-PURPOSE FDA REGISTERED LUBE IN THE PH
            </p>
            <p className="text-sm text-slate-500 mb-2">
              glycerin-free, paraben free, odor-free, water-based lubricant that
              reduces discomfort from dryness and friction.
            </p>
            <ul className="list-disc list-outside ml-6 text-sm text-slate-500">
              <li>Shaving Gel for Facial and</li>
              <li>Body Hair</li>
              <li>Anti-Chafe Solution(Skin Irritation from Rubbing)</li>
              <li>Anti-Frizz for Hair</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
