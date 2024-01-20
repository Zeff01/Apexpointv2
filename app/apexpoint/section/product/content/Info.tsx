import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import { Data } from "../data";

const Info = ({ name, title, description, img, url, benefits }: Data) => {
  return (
    <div className="w-3/4 h-auto flex flex-col justify-center object-cover">
      {url && (
        <Link
          className="w-fit h-auto transition delay-150 ease-in-out hover:scale-110 hover:opacity-80 duration-150"
          href={url}
        >
          {img && (
            <Image
              src={img}
              alt={name}
              className={`w-28 mb-2 md:w-32 lg:w-36 ${
                name === "lubie" && "mb-2 md:w-[85px] lg:w-[100px]"
              }`}
            />
          )}
        </Link>
      )}
      <div>
        <p className="uppercase font-bold mb-2 tracking-wider text-lg">
          {title}
        </p>
        <p className="text-slate-500 mb-2 text-lg">{description}</p>
        <ul className="list-disc list-outside ml-6  text-slate-500 text-lg mb-3">
          {benefits?.map((benefit) => {
            return <li key={benefit}>{benefit}</li>;
          })}
        </ul>
        {url && (
          <Link href={url} className="flex w-full">
            <Button
              title="Learn more!"
              textColor="text-white"
              bgColor="bg-apexpoint-green"
              borderColor="none"
              borderSize="border"
              padding="px-10 py-2"
              fontSize="text-xl"
              width="w-full min-[425px]:w-fit"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Info;
