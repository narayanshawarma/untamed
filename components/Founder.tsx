
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Founder: React.FC = () => {
  return (
    <section className="relative py-20 bg-jungle-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image / Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            <RevealOnScroll>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
                <img 
                  src="https://i.pinimg.com/736x/00/52/6a/00526a7aa3b95661244f841554f1f8a5.jpg" 
                  alt="A majestic tiger in the Indian Wilderness" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-jungle-950/10"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-earth-500/50 hidden lg:block"></div>
            </RevealOnScroll>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 text-left">
             <RevealOnScroll delay={200}>
               <h4 className="font-sans text-xs tracking-[0.25em] text-jungle-400 uppercase mb-4">The Origin</h4>
               <h2 className="font-serif text-4xl md:text-6xl text-earth-100 mb-8">
                 From the Heart <br/> of a Jungle's Son
               </h2>
             </RevealOnScroll>
             
             <RevealOnScroll delay={400}>
               <div className="space-y-6 font-sans text-earth-300 font-light leading-7 text-lg">
                 <p>
                   My journey began in the mist-laden corridors of Kabini Nagarhole. 
                   It was a chance encounter with a Black Panther—a shadow moving within shadows—that ignited a lifelong reverence for the wild.
                 </p>
                 <p>
                   "Untamed" embodies a simple, fierce passion: to share the Indian wilderness as it truly is—raw, 
                   majestic, and fragile. We created this platform exclusively for the seekers who want to 
                   protect what they explore. This is my love letter to the wild.
                 </p>
               </div>
             </RevealOnScroll>
             
             <RevealOnScroll delay={600}>
               <div className="mt-10">
                 <p className="font-serif italic text-2xl text-earth-400 mb-8">- Founder</p>
                 <span className="inline-block px-4 py-1 border border-jungle-700 rounded-full text-xs tracking-[0.2em] text-jungle-400 uppercase">
                   The Vision
                 </span>
               </div>
             </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
