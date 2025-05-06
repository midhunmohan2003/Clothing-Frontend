import React, { useEffect, useState } from 'react';
import slide1 from '../assets/images/ad1.jpg';
import slide2 from '../assets/images/ad2.jpg';
import slide3 from '../assets/images/ad3.png';

const slides = [
  { image: slide1, text: 'Premium Quality Dress' },
  { image: slide2, text: 'Custom Prints On Your Choice' },
  { image: slide3, text: 'All India Delivery' },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative h-[300px] bg-white flex items-center justify-center">
            <img
              src={slide.image}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-contain"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-xl font-semibold text-center px-4">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
