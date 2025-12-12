import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "font-pixel text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 transition-all duration-200 uppercase tracking-widest relative active:top-[2px] active:shadow-none";
  
  const variants = {
    primary: "bg-degotchi-green text-black border-2 border-degotchi-green hover:bg-transparent hover:text-degotchi-green shadow-[4px_4px_0px_0px_rgba(0,255,65,0.5)]",
    secondary: "bg-degotchi-purple text-white border-2 border-degotchi-purple hover:bg-transparent hover:text-degotchi-purple shadow-[4px_4px_0px_0px_rgba(153,69,255,0.5)]",
    outline: "bg-transparent text-degotchi-green border-2 border-degotchi-green hover:bg-degotchi-green hover:text-black shadow-[4px_4px_0px_0px_rgba(0,255,65,0.3)]",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};