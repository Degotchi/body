import React from 'react';
import { Button } from './Button';
import { Translations } from '../types';

interface NavbarProps {
  t: Translations['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({ t }) => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-6 md:px-12 border-b border-degotchi-dim bg-degotchi-panel/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex items-center gap-2 group cursor-pointer">
        <i className="fa-solid fa-ghost text-degotchi-green text-2xl group-hover:animate-bounce"></i>
        <span className="font-pixel text-white text-lg md:text-xl tracking-tighter">
          Degotchi<span className="text-degotchi-green animate-pulse">_</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="secondary" className="hidden md:block">
          <i className="fa-solid fa-wallet mr-2"></i>
          {t.connect}
        </Button>
      </div>
    </nav>
  );
};