import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styleClass }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-medium ${styleClass} hover:bg-blue-600 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
