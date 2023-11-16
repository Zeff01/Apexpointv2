import { Data } from "../data";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, title, description, img, logo, url, benefits }: Data) => {
  return (
    <div
      key={name}
      className={`grid gap-8 items-center text-left mb-8 lg:grid-cols-2 lg:gap-20`}
    >
      <div
        className={`flex flex-col w-[320px] justify-start items-left leading-relaxed order-2 lg:justify-between ${
          name === "chlorelief" ?? "lg:order-1"
        }`}
      >
        <Link href={url}>
          <Image src={img} alt={name} className="w-36 mb-2" />
        </Link>
        <div>
          <p className="uppercase font-bold mb-2 text-sm tracking-wider lg:text-base">
            {title}
          </p>
          <p className="text-slate-500 mb-2 text-sm lg:text-base">
            {description}
          </p>
          <ul className="list-disc list-outside ml-6 text-sm text-slate-500 lg:text-base">
            {benefits.map((benefit) => {
              return <li key={benefit}>{benefit}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className={name === "chlorelief" ? "lg:order-2" : ""}>
        <Link href={url}>
          <Image src={logo} alt={name} className=" w-[320px]  lg:w-[400px] " />
        </Link>
      </div>
    </div>
  );
};

export default Card;
