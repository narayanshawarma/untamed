
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop",
  "https://photos.smugmug.com/Main-Image-Gallery/i-xNgrcJq/6/NBRjDbst3KRZWjTcF7VftVpFP6bt6r3gCckKmdJtZ/X5/20250329-India-9966-Enhanced-NR-Edit-X5.jpg",
  "https://yellowzebrasafaris.com/media/dfsiftvp/exterior-sanctuary-gorilla-forest-bwindi-uganda.jpg?rxy=0.5050125313283208%2C0.9981203007518797&width=2048&height=1024&format=jpg&v=1dc05e5bf7d93c0",
  "https://photos.smugmug.com/Main-Image-Gallery/i-ScKTJnb/1/LkvtSGWf3c4Bz3x9MQJNMQXBxLcpm9tvrPmtzMSFC/X5/20220813-Brazil-1444-2-Enhanced-NR-X5.jpg",
  "https://photos.smugmug.com/Main-Image-Gallery/i-w4kFtq8/3/Lwtn4GNpwXnTm6CK8TMc33MsGz9VwmvVh9zmpHpB2/5K/20170927_Namibia_5453-Edit-5K.jpg"
];

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    // Image rotation interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-jungle-950">
      {/* Background Carousel with Parallax */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: `translateY(${offset * 0.5}px)`,
          willChange: 'transform',
        }}
      >
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-opacity duration-[2500ms] ease-in-out`}
            style={{ 
              backgroundImage: `url('${img}')`,
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0
            }}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/50 via-jungle-900/30 to-jungle-950/90 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div 
          className={`transition-all duration-1000 ease-out transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transform: `translateY(${-offset * 0.2}px)` }} // Slight reverse parallax for text
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-wide text-earth-100 mb-6 drop-shadow-lg">
            Untamed
          </h1>
          <div className="w-24 h-[1px] bg-earth-400 mx-auto mb-6 opacity-60"></div>
          <p className="font-sans text-lg md:text-xl lg:text-2xl font-light tracking-widest text-earth-200 uppercase drop-shadow-md">
            In Service of India’s Timeless Wilderness
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-500 cursor-pointer z-20 ${offset > 100 ? 'opacity-0' : 'opacity-50 hover:opacity-100'}`}
      >
        <a href="#philosophy" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8 text-earth-200" />
        </a>
      </div>
    </section>
  );
};
