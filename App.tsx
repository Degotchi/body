import React from 'react';
import { Navbar } from './components/Navbar';
import { Terminal } from './components/Terminal';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { CONTENT } from './constants';
import degotchi from './assets/degotchi.webp';
import { SectionHeading } from './components/SectionHeading';
import { HowItWorks } from './components/HowItWorks';
import { Moat } from './components/Moat';
import { Roadmap } from './components/Roadmap';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';

const App: React.FC = () => {
  const t = CONTENT;

  return (
    <div className="min-h-screen bg-degotchi-dark text-white relative selection:bg-degotchi-green selection:text-black">
      {/* Scanline Overlay */}
      <div className="fixed inset-0 z-40 pointer-events-none opacity-10 animate-scanline scanline-overlay"></div>
      
      {/* Radial Gradient Background */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-degotchi-purple/10 via-transparent to-transparent pointer-events-none"></div>

      <Navbar t={t.nav} />

      <main className="relative z-10 pt-32 pb-12 flex flex-col items-center">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center max-w-5xl">
          
          {/* Pet Visual - Using degotchi.png */}
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 relative group">
             {/* Glitch Effect Layers */}
             <div className="absolute inset-0 bg-degotchi-purple/20 rounded-xl blur-xl animate-pulse"></div>
             
             {/* The Pet Image */}
             <img 
                src={degotchi} 
                alt="Degotchi" 
                className="w-full h-full object-contain animate-bounce-pixel drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]"
                style={{ imageRendering: 'pixelated' }}
             />

             {/* Shadow */}
             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/50 blur-sm rounded-[100%]"></div>
          </div>

          <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-degotchi-green via-white to-degotchi-purple drop-shadow-[2px_2px_0px_rgba(153,69,255,0.5)]">
            {t.hero.title}
          </h1>
          
          <p className="font-mono text-gray-400 text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed border-l-2 border-degotchi-yellow pl-4">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {t.hero.badges.map((b, i) => (
              <span
                key={i}
                className="font-mono text-xs text-gray-300 border border-degotchi-dim bg-degotchi-panel/60 px-3 py-1"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button onClick={() => window.open('#early-access', '_self')}>{t.hero.primaryCta}</Button>
             <Button variant="outline" onClick={() => window.open('#how', '_self')}>{t.hero.secondaryCta}</Button>
          </div>
        </section>

        {/* Terminal Section */}
        <div className="w-full px-6">
          <Terminal t={t.terminal} />
        </div>

        {/* Story Section */}
        <section className="w-full max-w-6xl mx-auto px-6 py-20" id="story">
          <SectionHeading eyebrow={t.story.eyebrow} title={t.story.title} />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              {t.story.paragraphs.map((p, i) => (
                <p key={i} className="font-mono text-gray-400 text-sm md:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {t.story.highlights.map((h, i) => (
                <div key={i} className="bg-degotchi-dim border border-degotchi-panel p-6">
                  <div className="font-pixel text-white text-xs md:text-sm leading-relaxed">
                    {h.title}
                  </div>
                  <div className="font-mono text-gray-400 text-sm leading-relaxed mt-3">
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <HowItWorks t={t.howItWorks} />

        {/* Features Section */}
        <Features t={t.features} />

        {/* Moat */}
        <Moat t={t.moat} />

        {/* Roadmap */}
        <Roadmap t={t.roadmap} />

        {/* FAQ */}
        <FAQ t={t.faq} />

        {/* CTA */}
        <div id="early-access" className="w-full">
          <CTA t={t.cta} />
        </div>

      </main>

      <Footer t={t.footer} />
    </div>
  );
};

export default App;