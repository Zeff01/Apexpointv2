import React from "react";
``;
interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <>
      <button className="border-4 p-2 w-[150px] rounded-lg border-lubie-dark-blue">
        {title}
      </button>
    </>
  );
}
