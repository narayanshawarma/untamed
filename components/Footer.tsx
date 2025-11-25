import React from 'react';
import { Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-jungle-950 py-12 border-t border-jungle-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h5 className="font-serif text-2xl text-earth-400 tracking-wider">Untamed</h5>
          <p className="text-xs text-earth-700 mt-2 font-sans uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Untamed Ventures. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-earth-600 hover:text-earth-300 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-earth-600 hover:text-earth-300 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};