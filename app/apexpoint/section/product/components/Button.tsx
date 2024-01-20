import React from "react";
import PropTypes from "prop-types";

interface ButtonProps {
  title: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  borderSize?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  textColor = "text-black",
  bgColor = "transparent",
  borderColor = "border-lubie-dark-blue",
  borderSize = "border-4",
  padding = "p-2",
  fontSize = "text-lg",
  width = "w-[150px]",
}) => {
  return (
    <button
      className={`rounded-lg ${textColor} ${bgColor} ${borderColor} ${borderSize} ${padding} ${fontSize} ${width}`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderSize: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  width: PropTypes.string,
};

export default Button;
