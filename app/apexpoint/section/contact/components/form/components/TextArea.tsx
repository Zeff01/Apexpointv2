import React, {
  ForwardedRef,
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { label, ...props },
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <>
      <label
        className="absolute left-5 top-[-.7rem] z-10 bg-white py-1 px-2 text-xs text-[#787878]"
        htmlFor={props.id || props.name}
      >
        <span>{label}</span>
      </label>
      <textarea
        ref={ref}
        className="absolute left-0 top-0 z-[1] h-full w-full rounded-lg border-[1.5px] border-solid border-black bg-transparent p-6 text-xs focus:border-apexpoint-green focus:outline-none"
        required
        {...props}
      />
    </>
  );
};

export default forwardRef(TextArea);
