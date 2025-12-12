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

      <div className="flex items-center gap-3 md:gap-5">
        <div className="hidden md:flex items-center gap-5 font-mono text-xs text-gray-400">
          <a className="hover:text-white transition-colors" href="#story">{t.links.story}</a>
          <a className="hover:text-white transition-colors" href="#features">{t.links.features}</a>
          <a className="hover:text-white transition-colors" href="#moat">{t.links.moat}</a>
          <a className="hover:text-white transition-colors" href="#roadmap">{t.links.roadmap}</a>
          <a className="hover:text-white transition-colors" href="#faq">{t.links.faq}</a>
        </div>

        <Button variant="outline" className="hidden md:block" onClick={() => window.open('#story', '_self')}>
          {t.secondaryCta}
        </Button>
        <Button variant="secondary" onClick={() => window.open('#early-access', '_self')}>
          {t.primaryCta}
        </Button>
      </div>
    </nav>
  );
};