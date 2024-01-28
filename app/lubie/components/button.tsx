import React from "react";
``;
interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <>
      <button className=" p-1 font-bold border-1 border-black w-[150px] rounded-lg bg-green-400 text-lubie-dark-blue">
        {title}
      </button>
    </>
  );
}
