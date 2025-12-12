import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, subtitle, id }) => {
  return (
    <div className="max-w-3xl mx-auto text-center" id={id}>
      <div className="font-mono text-degotchi-green/80 text-xs tracking-[0.35em] uppercase mb-3">
        {eyebrow}
      </div>
      <h2 className="font-pixel text-white text-lg md:text-2xl leading-relaxed">
        {title}
      </h2>
      {subtitle ? (
        <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed mt-4">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};


