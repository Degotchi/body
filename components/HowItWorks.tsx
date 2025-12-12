import React from 'react';
import { Translations } from '../types';
import { SectionHeading } from './SectionHeading';

interface HowItWorksProps {
  t: Translations['howItWorks'];
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ t }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} id="how" />

      <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.steps.map((s, idx) => (
          <li key={idx} className="bg-degotchi-dim border border-degotchi-panel p-6 relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-degotchi-panel border border-degotchi-dim font-mono text-xs text-gray-300">
              STEP {idx + 1}
            </div>
            <h3 className="font-pixel text-white text-sm leading-relaxed mt-2">
              {s.title}
            </h3>
            <p className="font-mono text-gray-400 text-sm leading-relaxed mt-4">
              {s.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};


