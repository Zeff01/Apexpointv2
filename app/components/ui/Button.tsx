// components/Button.tsx
import Link from "next/link";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { UrlObject } from "url";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "apexpoint" | "chlorelief" | "lubie";
  className?: string;
  url?: string | UrlObject;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "apexpoint",
  className = "",
  url,
  ...rest
}) => {
  const baseStyles = "w-fit text-center px-4 py-2 rounded";
  const variantStyles =
    variant === "apexpoint"
      ? "bg-apexpoint-green text-white"
      : variant === "chlorelief"
      ? "bg-chlorelief-pink text-white"
      : "border-lubie-dark-blue";

  const combinedClassName =
    `${baseStyles} ${variantStyles} ${className}`.trim();

  return url ? (
    <Link className={combinedClassName} href={url}>
      <button {...rest}>{children}</button>
    </Link>
  ) : (
    <button className={combinedClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;
