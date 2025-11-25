
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Experiences: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-jungle-950 text-earth-100 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://worldbank.scene7.com/is/image/worldbankprod/CBST-group-by-Caio-Palazzo_resized-1-?wid=780&hei=439&qlt=85,0&resMode=sharp" 
          alt="Authentic Jungle Experience" 
          className="w-full h-full object-cover opacity-50" 
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-950 via-jungle-950/60 to-jungle-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center max-w-4xl">
        <RevealOnScroll>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 drop-shadow-2xl text-earth-100 tracking-tight">
            Authentic Encounters
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          <p className="font-sans text-lg md:text-2xl text-earth-200 font-light leading-relaxed drop-shadow-lg mb-12">
            True luxury is participation. Walk alongside tribal guardians, forage for ancient ingredients, 
            and contribute to the conservation of the land you tread. 
            It is a return to nature. It is a deep sense of belonging.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
           <span className="inline-block px-4 py-1 border border-earth-200/40 rounded-full text-xs tracking-[0.2em] text-earth-200 uppercase bg-black/20 backdrop-blur-md shadow-lg">
             Conservation & Culture
           </span>
        </RevealOnScroll>
      </div>
    </section>
  );
};
