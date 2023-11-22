import { shippingbag, truck, card, return1, AboutHero1,AboutHero2,AboutHero3 } from "@/public/assets/lubie";
import "../styles/about.css";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="md:flex hidden  flex-col mt-36 bg-opacity-40 bg-lubie-light-blue">
    {/* Shipping Block */}
      <div className="pt-20 pb-28 mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-center gap-x-5 px-1 md:px-0 gap-y-10 ">
        {/* ShoppingBag */}
        <div className="flex flex-col text-center gap-y-2 justify-center items-center ">
          <Image
            src={shippingbag}
            alt="herlubie"
            className=" object-contain "
          />
          <p className="text-xl font-bold text-lubie-navy-blue">
            {" "}
            Shop Online{" "}
          </p>
          <p className=" text-lubie-navy-blue text-sm text-balance ">
            {" "}
            Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.{" "}
          </p>
        </div>
        {/* Shipping */}
        <div className="flex flex-col text-center gap-y-2 justify-center items-center">
          <Image src={truck} alt="herlubie" className=" object-contain " />
          <p className="text-xl font-bold text-lubie-navy-blue"> Shipping </p>
          <p className="  text-sm text-lubie-navy-blue text-balance">
            {" "}
            Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.{" "}
          </p>
        </div>
        {/* Return */}
        <div className="flex flex-col text-center gap-y-2 justify-center items-center ">
          <Image
            src={return1}
            alt="herlubie"
            className=" object-contain justify-start "
          />
          <p className="text-xl font-bold text-lubie-navy-blue">
            {" "}
            Return Policy{" "}
          </p>
          <p className="  text-sm text-lubie-navy-blue text-balance">
            {" "}
            Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.{" "}
          </p>
        </div>
        {/* Card */}
        <div className="flex flex-col text-center gap-y-2 justify-center items-center ">
          <Image
            src={card}
            alt="herlubie"
            className=" object-contain justify-start "
          />
          <p className="text-xl font-bold text-lubie-navy-blue">
            {" "}
            Payment Methods{" "}
          </p>
          <p className="  text-sm text-lubie-navy-blue text-balance">
            {" "}
            Lorem ipsum dolor sit consectetur adipiscing Aenean nec mattis quam.{" "}
          </p>
        </div>
      </div>
      {/* About Hero */}
    <div className='relative flex flex-row justify-center items-center px-5 '>
        <div className='absolute mt-52 md:mt-96 overflow-hidden'>
          <Image
              src={AboutHero2}
              alt="herlubie"
              className="object-cover h-[18vh] w-auto md:h-[60vh] "
            />
        </div>
        <div className="">
          <Image
              src={AboutHero1}
              alt="herlubie"
              className="object-cover h-[18vh] w-auto md:h-[60vh]"
            />
            </div>
            <div className="">
           <Image
            src={AboutHero3}
            alt="herlubie"
            className="object-cover h-[18vh]  w-auto md:h-[60vh] "
          />
          </div>
    </div>
    <div className='pb-20 '></div>
    </div>
  );
}
