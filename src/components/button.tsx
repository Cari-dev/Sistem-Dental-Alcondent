import React from "react";
import "../app/animacion.css"

interface ButtonProps {
  label: string;
  variant?: "color-primary" | "color-secondary" | "outline-primary" | "outline-secondary";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, variant = "color-primary", onClick }) => {
  const base =
    "py-3 font-medium transition relative shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 ";

  const variants: Record<string, string> = {
    "color-primary": "bg-primary text-white  focus:ring-gray-400 hover:bg-primary/90",
    "color-secondary": "bg-secondary text-white  focus:ring-gray-400 hover:bg-secondary/80",
    "outline-primary": "bg-transparent border border-white text-white  hover:text-white focus:ring-blue-500 hover:border-primary animation-ltr",
    "outline-secondary": "bg-transparent border border-secondary text-secondary hover:text-white focus:ring-blue-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} cursor-pointer `}
    >
      {label}
    </button>
  );
};
