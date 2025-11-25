
import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Sanctuaries: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center bg-jungle-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://yellowzebrasafaris.com/media/wsdldt5r/exterior-room-erebero-hills-bwindi-impenetrable-forest-uganda.jpg?width=2048&height=1024&format=jpg&v=1db472d9f32d250" 
          alt="Exclusive Wilderness Sanctuary" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/80 via-transparent to-jungle-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <h2 className="font-serif text-5xl md:text-7xl text-earth-100 mb-8 tracking-tight drop-shadow-xl">
              Sanctuaries of the Rare
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <p className="font-sans text-lg md:text-2xl text-earth-200 font-light leading-relaxed drop-shadow-lg mb-10">
              We don't offer just hotels; we open gates to hidden realms. 
              We curate the rarest of the rare—sanctuaries crafted for the curious, 
              where you live in the quiet, mystical company of endangered magical creatures. 
              Under canopies untouched by time, luxury is not built; it is felt.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <span className="inline-block px-4 py-1 border border-earth-200/40 rounded-full text-xs tracking-[0.2em] text-earth-200 uppercase bg-black/20 backdrop-blur-md">
              Rare & Remote
            </span>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
