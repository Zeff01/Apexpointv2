import { Data } from "../data";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, title, description, img, logo, url, benefits }: Data) => {
  return (
    <div
      key={name}
      className={`w-full grid gap-8 place-items-center justify-evenly text-left mb-8 md:justify-center md:grid-cols-2 md:gap-8`}
    >
      <div
        className={`flex flex-col w-[320px] justify-start items-left leading-relaxed order-2  ${
          name === "chlorelief" ?? "md:order-1"
        }`}
      >
        <Link
          className="transition delay-150 ease-in-out hover:scale-110 hover:opacity-80 duration-150"
          href={url}
        >
          <Image src={img} alt={name} className="w-28 mb-2 md:w-32 lg:w-36" />
        </Link>
        <div>
          <p className="uppercase font-bold mb-2 text-sm tracking-wider md:text-base lg:text-lg">
            {title}
          </p>
          <p className="text-slate-500 mb-2 text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <ul className="list-disc list-outside ml-6 text-sm text-slate-500 md:text-base lg:text-lg">
            {benefits.map((benefit) => {
              return <li key={benefit}>{benefit}</li>;
            })}
          </ul>
        </div>
      </div>
      <div
        className={` transition delay-200 hover:scale-105 hover:opacity-80 duration-150 ${
          name === "chlorelief" ? "md:order-2" : ""
        } `}
      >
        <Link href={url}>
          <Image src={logo} alt={name} className=" w-[320px]  md:w-[450px] " />
        </Link>
      </div>
    </div>
  );
};

export default Card;
