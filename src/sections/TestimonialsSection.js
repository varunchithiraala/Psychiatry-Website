import React, { useState, useEffect, useRef } from 'react';
import { mockData } from '../data/mockData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Handle scroll position to update the dot indicator
  const handleScroll = () => {
    const scrollPosition = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.firstChild.offsetWidth;

    // Calculate the index based on how much of the card is in view
    for (let i = 0; i < mockData.testimonials.length; i++) {
      const cardLeftEdge = i * cardWidth;
      const cardRightEdge = (i + 1) * cardWidth;

      // If more than half of the card is visible, we set the current index
      if (scrollPosition >= cardLeftEdge - cardWidth / 2 && scrollPosition < cardRightEdge - cardWidth / 2) {
        setCurrentIndex(i);
        break;
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-2xl font-bold text-center xs:text-3xl font-playfair">
          What Our Patients Are Saying
        </h2>
        <div className="relative pl-4">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto transition-transform duration-500 ease-out scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {/* Testimonial Cards */}
            {mockData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start w-[96%] sm:w-[578px] mx-4"
              >
                <div className="w-full">
                  <div className="pt-4 pl-6 pr-6 rounded-t-xl bg-gold">
                    <span className="text-black text-9xl font-playfair">“</span>
                    <blockquote className="p-2 pb-6 -mt-12 text-lg md:p-4 md:pb-8 md:text-xl text-black-600 font-georgia">
                      “{testimonial.feedback}”
                    </blockquote>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-b-xl bg-thicker-gold">
                    <div className="flex">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full sm:w-16 sm:h-16"
                      />
                      <div className="ml-2 sm:ml-3">
                        <h1 className="text-base font-normal text-white sm:mt-1 sm:text-lg">
                          {testimonial.name}
                        </h1>
                        <p className="text-sm text-white sm:text-base font-playfair">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8">
            {mockData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  carouselRef.current.scrollTo({
                    left: index * carouselRef.current.firstChild.offsetWidth,
                    behavior: 'smooth',
                  })
                }
                className={`h-2 w-2 md:h-3 md:w-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-thick-gold' : 'bg-transparent border-2 border-thick-gold'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
