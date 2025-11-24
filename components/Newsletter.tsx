
import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => setSubmitted(true), 800);
    }
  };

  return (
    <section className="py-32 bg-jungle-900 text-center px-6 border-t border-jungle-800">
      <div className="max-w-xl mx-auto">
        <RevealOnScroll>
          <h2 className="font-serif text-5xl text-earth-100 mb-4">
            Our Journey Begins Soon.
          </h2>
          <p className="font-sans text-earth-300 font-light mb-12 leading-relaxed">
            Untamed is preparing to launch. Be the first to know when we open our trails. 
            Leave your email to join our community of conscious explorers.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={200}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full md:w-2/3 bg-transparent border-b border-earth-700 py-3 text-earth-100 placeholder-earth-600 focus:outline-none focus:border-earth-300 transition-colors font-sans font-light"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="w-full md:w-1/3 py-3 bg-earth-800 text-earth-100 hover:bg-earth-700 transition-colors font-sans text-sm tracking-widest uppercase"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="p-6 border border-earth-800/50 bg-jungle-950/50 animate-fade-in-up">
              <p className="font-serif text-xl text-earth-200 italic">
                "Welcome to the tribe. The wild awaits."
              </p>
            </div>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};
