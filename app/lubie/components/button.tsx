import React from "react";
``;
interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <>
      <button className="border-2 p-2 w-[150px] rounded-lg border-lubie-white-color">
        {title}
      </button>
    </>
  );
}
