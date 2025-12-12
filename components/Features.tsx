import React from 'react';
import { Translations } from '../types';

interface FeaturesProps {
  t: Translations['features'];
}

export const Features: React.FC<FeaturesProps> = ({ t }) => {
  const features = [
    {
      icon: "fa-brain",
      title: t.brainTitle,
      desc: t.brainDesc,
      color: "border-degotchi-purple text-degotchi-purple"
    },
    {
      icon: "fa-bolt",
      title: t.bodyTitle,
      desc: t.bodyDesc,
      color: "border-degotchi-green text-degotchi-green"
    },
    {
      icon: "fa-lock",
      title: t.leashTitle,
      desc: t.leashDesc,
      color: "border-degotchi-yellow text-degotchi-yellow"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
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
    </div>
  );
};