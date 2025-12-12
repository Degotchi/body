import React from 'react';
import { Translations } from '../types';
import { SectionHeading } from './SectionHeading';

interface RoadmapProps {
  t: Translations['roadmap'];
}

export const Roadmap: React.FC<RoadmapProps> = ({ t }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} id="roadmap" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {t.phases.map((p, idx) => (
          <div key={idx} className="bg-degotchi-dim border border-degotchi-panel p-7 relative">
            <div className="absolute -top-3 left-4 px-2 py-1 bg-degotchi-panel border border-degotchi-dim font-mono text-xs text-gray-300">
              PHASE {idx + 1}
            </div>
            <h3 className="font-pixel text-white text-sm leading-relaxed mt-2">
              {p.title}
            </h3>
            <p className="font-mono text-gray-400 text-sm leading-relaxed mt-4">
              {p.desc}
            </p>

            <ul className="mt-5 space-y-2">
              {p.items.map((it, j) => (
                <li key={j} className="font-mono text-gray-300 text-sm flex gap-2">
                  <span className="text-degotchi-green">+</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};


