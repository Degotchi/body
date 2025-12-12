import React from 'react';
import { Translations } from '../types';
import { SectionHeading } from './SectionHeading';

interface MoatProps {
  t: Translations['moat'];
}

const toneStyles: Record<'green' | 'purple' | 'yellow', string> = {
  green: 'border-degotchi-green text-degotchi-green',
  purple: 'border-degotchi-purple text-degotchi-purple',
  yellow: 'border-degotchi-yellow text-degotchi-yellow',
};

export const Moat: React.FC<MoatProps> = ({ t }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} id="moat" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.cards.map((c, idx) => (
          <div
            key={idx}
            className={`group bg-degotchi-dim border-2 ${toneStyles[c.tone]} p-7 relative hover:-translate-y-1 transition-transform duration-300`}
          >
            <div className="absolute top-0 left-0 w-2 h-2 bg-current"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-current"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-current"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-current"></div>

            <h3 className="font-pixel text-white text-sm leading-relaxed">
              {c.title}
            </h3>
            <p className="font-mono text-gray-400 text-sm leading-relaxed mt-4">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


