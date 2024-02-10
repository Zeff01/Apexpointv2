// components/Section.tsx
import React, { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  ...rest
}) => {
  const baseStyles = "height-fit-content w-full";

  let additionalStyles = "px-[9%] pt-[5%]";

  if (id === "store") {
    additionalStyles = "px-0";
  } else if (id === "footer") {
    additionalStyles = "px-0";
  }

  const combinedClassName =
    `${baseStyles} ${additionalStyles} ${className}`.trim();

  return (
    <section id={id} className={combinedClassName} {...rest}>
      {children}
    </section>
  );
};

export default Section;
