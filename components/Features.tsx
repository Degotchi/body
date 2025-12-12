import React from 'react';
import { Translations } from '../types';
import { SectionHeading } from './SectionHeading';

interface FeaturesProps {
  t: Translations['features'];
}

export const Features: React.FC<FeaturesProps> = ({ t }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20" id="features">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.architecture.map((f, i) => (
          <div 
            key={i} 
            className={`group bg-degotchi-dim border-2 ${f.color} p-8 relative hover:-translate-y-2 transition-transform duration-300`}
          >
            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 bg-current ${f.color}`}></div>
            <div className={`absolute top-0 right-0 w-2 h-2 bg-current ${f.color}`}></div>
            <div className={`absolute bottom-0 left-0 w-2 h-2 bg-current ${f.color}`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 bg-current ${f.color}`}></div>

            <div className={`text-4xl mb-6 ${f.color} group-hover:scale-110 transition-transform duration-300 inline-block`}>
              <i className={`fa-solid ${f.icon}`}></i>
            </div>
            
            <h3 className="font-pixel text-white text-lg mb-4 leading-normal">{f.title}</h3>
            <p className="font-mono text-gray-400 text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.bullets.map((b, i) => (
          <div key={i} className="bg-degotchi-dark border border-degotchi-dim p-5 flex gap-4">
            <div className="text-degotchi-green text-lg mt-0.5">
              <i className={`fa-solid ${b.icon}`}></i>
            </div>
            <div>
              <div className="font-pixel text-white text-xs leading-relaxed">{b.title}</div>
              <div className="font-mono text-gray-400 text-sm leading-relaxed mt-2">{b.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};