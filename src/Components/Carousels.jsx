import React, { useEffect, useState } from 'react';
import slide1 from '../assets/images/ad1.jpg';
import slide2 from '../assets/images/ad2.jpg';
import slide3 from '../assets/images/ad3.png';

const slides = [
  { 
    image: slide1, 
    text: 'Premium Quality Dress',
    description: 'Experience luxury in every thread'
  },
  { 
    image: slide2, 
    text: 'Custom Prints On Your Choice',
    description: 'Your design, your style, your way'
  },
  { 
    image: slide3, 
    text: 'All India Delivery',
    description: 'Fast and reliable shipping nationwide'
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative h-[400px] bg-white">
            <img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Text overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-end pb-12">
              <h3 className="text-white text-3xl font-bold text-center mb-3 px-4">
                {slide.text}
              </h3>
              <p className="text-white/90 text-lg text-center px-4 max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index 
                ? 'bg-pink-500 w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
