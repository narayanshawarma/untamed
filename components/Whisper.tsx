
import React, { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { generateJungleWhisper } from '../services/geminiService';
import { RevealOnScroll } from './RevealOnScroll';

export const Whisper: React.FC = () => {
  const [whisper, setWhisper] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleListen = async () => {
    setLoading(true);
    const text = await generateJungleWhisper();
    setWhisper(text);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-jungle-900 border-t border-jungle-800">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <RevealOnScroll>
          <Sparkles className="w-6 h-6 text-earth-400 mx-auto mb-6" />
          <h3 className="font-serif text-3xl text-earth-200 mb-6">
            Listen to the Wild
          </h3>
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          {!whisper && !loading && (
            <button 
              onClick={handleListen}
              className="px-8 py-3 border border-earth-500 text-earth-300 hover:bg-earth-500 hover:text-jungle-950 transition-all duration-500 font-sans tracking-widest text-sm uppercase rounded-sm"
            >
              Reveal a Jungle Whisper
            </button>
          )}

          {loading && (
             <div className="flex justify-center items-center space-x-3 text-earth-400 font-serif italic">
               <Loader2 className="animate-spin w-5 h-5" />
               <span>Listening to the wind...</span>
             </div>
          )}
        </RevealOnScroll>

        {whisper && (
          <div className="animate-fade-in-up">
            <p className="font-serif text-2xl md:text-3xl text-earth-100 italic leading-relaxed">
              "{whisper}"
            </p>
            <button 
              onClick={handleListen}
              className="mt-8 text-xs text-earth-500 hover:text-earth-300 tracking-widest uppercase border-b border-transparent hover:border-earth-300 transition-all pb-1"
            >
              Listen Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
