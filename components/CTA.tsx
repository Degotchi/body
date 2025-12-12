import React from 'react';
import { Translations } from '../types';
import { Button } from './Button';

interface CTAProps {
  t: Translations['cta'];
}

export const CTA: React.FC<CTAProps> = ({ t }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-24">
      <div className="bg-degotchi-dim border-2 border-degotchi-green/50 p-8 md:p-10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-degotchi-green/20 via-transparent to-transparent" />

        <div className="relative">
          <h2 className="font-pixel text-white text-lg md:text-2xl leading-relaxed">
            {t.title}
          </h2>
          <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
            {t.subtitle}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-4">
            <Button>{t.primaryCta}</Button>
            <Button variant="outline">{t.secondaryCta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};


