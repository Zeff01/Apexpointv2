import React from "react";
import Stars from "@/app/lubie/components/stars";
import Image from "next/image";

interface CardsProps {
  Comment:string;
  ImageUrl:string;
  ImageAlt:string;
  CustomerName:string;
}
function Cards({Comment,ImageUrl,ImageAlt,CustomerName}:CardsProps) {
  return (
<div className="flex flex-col justify-center bg-white min-h-full max-w-fit p-10 lg:w-1/4 lg:h-full shadow-xl px-4 lg:min-w-screen w-full lg:px-10">
      <div className="w-full flex justify-between items-center">
          <Stars totalStars={5} />
        <div className="my-6">
          <Image src="/assets/user-quote.png" alt='' width={50} height={0} layout="responsive" />
        </div>
      </div>
      <div className="mb-10 ">
        <p className="text-Caption-Mobile sm:text-Caption-Desktop">{Comment}</p>
      </div>
        <div className="flex border-t-2 justify-start gap-10 mt-10">
        <Image className="rounded-full mt-4 object-scale-auto sm:object-none" src={ImageUrl} alt={ImageAlt} width={60} height={0} />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-Body-Mobile sm:text-Body-Desktop  ">{CustomerName}</p>
          <p>CUSTOMER</p>
        </div>
        </div>
      </div>
  );
}

export default Cards;
