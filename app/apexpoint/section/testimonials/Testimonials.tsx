import React from "react";
import Header from "./Header";
import Card from "./Card";
import { data } from "./data";
import Link from "next/link";

const Testimonials = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center my-10 gap-10 md:my-24 md:gap-28">
      <Header />
      <div className="flex flex-col md:flex-row gap-10 md:gap-4  lg:gap-6 xl:gap-8">
        {data.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.review_link}
              target="_blank"
              className="hover:bg-slate-100 transition delay-150 duration-150 ease-in-out"
            >
              <Card {...item} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default Testimonials;
