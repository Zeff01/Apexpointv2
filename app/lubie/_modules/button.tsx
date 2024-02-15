import React from "react";
``;
interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <>
      <button className=" p-2  font-bold w-[300px] rounded-lg border-box border-2 m-auto border-green-500 text-black-200 hover:bg-green-500 hover:text-white">
        {title}
      </button>
    </>
  );
}
