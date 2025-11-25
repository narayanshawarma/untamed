
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Wilderness: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://thebisonresort.com/wp-content/uploads/2015/01/Screen-Shot-2017-04-17-at-4.24.09-PM.png" 
          alt="Safari Experience on the Backwaters" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-jungle-950/60 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-serif text-5xl md:text-7xl text-earth-100 mb-8 tracking-tight drop-shadow-lg">
            The Untamed Safari
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="font-sans text-xl text-earth-200 font-light leading-relaxed drop-shadow-md mb-12">
            Whether you're drifting on Kabini's silent backwaters in search of elusive panthers, tracking 
            tigers through Ranthambore's storied ruins, or witnessing the armored grace of one-horned rhinos 
            in Kaziranga's endless grasslands—each journey is led by master naturalists who interpret the 
            language of the wild. This is where you stop observing and start belonging.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={400}>
           <span className="inline-block px-4 py-1 border border-earth-400/50 rounded-full text-xs tracking-[0.2em] text-earth-300 uppercase bg-jungle-950/30 backdrop-blur-sm">
             True Immersion
           </span>
        </RevealOnScroll>
      </div>
    </section>
  );
};
