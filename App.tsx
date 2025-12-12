import React from 'react';
import { Navbar } from './components/Navbar';
import { Terminal } from './components/Terminal';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { CONTENT } from './constants';
import degotchi from './assets/degotchi.png';

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
        <div className="container mx-auto px-6 text-center max-w-4xl">
          
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

          <div className="flex justify-center">
             <Button>{t.hero.cta}</Button>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="w-full px-6">
          <Terminal t={t.terminal} />
        </div>

        {/* Features Section */}
        <Features t={t.features} />

      </main>

      <Footer t={t.footer} />
    </div>
  );
};

export default App;