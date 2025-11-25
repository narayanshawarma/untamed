
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Experiences: React.FC = () => {
  return (
    <section className="relative py-48 md:py-64 min-h-[85vh] bg-stone-900 text-earth-100 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/02/18/15/elephants1.jpg?quality=75&width=1368&auto=webp" 
          alt="Authentic Jungle Experience" 
          className="w-full h-full object-cover opacity-70" 
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/95 via-stone-900/70 to-stone-900/95"></div>
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
