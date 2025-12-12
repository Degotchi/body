import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations['footer'];
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="w-full py-8 border-t border-degotchi-dim bg-degotchi-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-gray-500 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} {t.rights}
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-degotchi-green transition-colors text-xl">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-degotchi-purple transition-colors text-xl">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-xl">
             <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};