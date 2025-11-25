
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-jungle-950 text-center">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl text-earth-300 mb-12 leading-tight">
            An intimate alliance with nature—<br />
            <span className="italic text-jungle-300">a commitment to the wild.</span>
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-left font-sans text-earth-200 font-light leading-relaxed">
          <RevealOnScroll delay={200}>
            <div className="space-y-6">
              <p>
                We champion low-impact, high-immersion travel. 
                True luxury defines itself through the pristine silence of a forest at dawn, 
                the raw scent of wet earth, and the privilege of witnessing nature entirely undisturbed.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <div className="space-y-6">
              <p>
                Untamed is designed for those who listen to the whispers of the jungle.
                Our journeys are crafted to leave the lightest footprint while imparting the 
                deepest impression on your soul. We don't just visit the wilderness; we honor it.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={600}>
          <div className="mt-16">
             <span className="inline-block px-4 py-1 border border-jungle-700 rounded-full text-xs tracking-[0.2em] text-jungle-400 uppercase">
               Sustainability First
             </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
