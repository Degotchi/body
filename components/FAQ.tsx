import React, { useState } from 'react';
import { Translations } from '../types';
import { SectionHeading } from './SectionHeading';

interface FAQProps {
  t: Translations['faq'];
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-20">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} id="faq" />

      <div className="mt-10 space-y-4">
        {t.items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="bg-degotchi-dim border border-degotchi-panel">
              <button
                type="button"
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
                onClick={() => setOpenIndex(prev => (prev === idx ? null : idx))}
                aria-expanded={isOpen}
              >
                <div className="font-pixel text-white text-xs md:text-sm leading-relaxed">
                  {item.q}
                </div>
                <div className={`font-mono text-xs ${isOpen ? 'text-degotchi-green' : 'text-gray-400'}`}>
                  {isOpen ? '−' : '+'}
                </div>
              </button>

              {isOpen ? (
                <div className="px-5 pb-5 font-mono text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
};


