import React, { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ label, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <label
        className={`absolute left-5 top-[-.7rem] z-10 bg-white py-1 px-2 text-xs text-[#787878]`}
        htmlFor={props.id || props.name}
      >
        <span>{label}</span>
      </label>
      <input
        ref={ref as React.MutableRefObject<HTMLInputElement>}
        className="absolute left-0 top-0 z-[1] h-full w-full rounded-lg border-[1.5px] border-solid border-black bg-transparent p-6 text-xs focus:border-apexpoint-green focus:outline-none"
        autoComplete="off"
        required
        {...props}
      />
    </>
  );
};

export default forwardRef(TextInput);
