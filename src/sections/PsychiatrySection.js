import React, { useState } from 'react';
import { assets } from '../assets/assets';

const reasons = [
  {
    title: 'Convenient access',
    description:
      'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
  },
  {
    title: 'Concierge approach',
    description: 'Our Services Are Tailored To Meet Your Unique Needs With A Personal Touch.',
  },
  {
    title: 'High quality service',
    description: 'We Provide High-Quality Psychiatric Care From Experienced Professionals.',
  },
  {
    title: 'Trusted and empathic providers',
    description: 'Our Providers Are Trusted, Empathetic, And Dedicated To Your Well-Being.',
  },
];

const PsychiatrySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleReason = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-gold">
        <div className="flex flex-col items-center p-8 mt-4 md:mt-12 md:p-12 lg:pt-16 lg:pb-16 md:flex-row md:justify-center w-[100%] md:w-[90%] max-w-[1200px] mx-auto">
            <div className="relative border-2 md:w-1/2 md:pb-4 border-li-gold md:ml-0 md:mt-0">
                <img src={assets.psychotherapist_image} alt="Psychiatric Services" className="object-cover w-full h-[240px] md:h-[320px] md:-mt-[10px] md:-ml-[12px]" />
            </div>
            <div className="mt-8 w-[100%] sm:w-[90%] md:w-1/2 md:mt-0 md:ml-8">
                <h2 className="mb-4 text-2xl font-bold text-center md:text-left md:text-3xl lg:text-4xl font-playfair">Why Should You Choose Psychiatry?</h2>
                {reasons.map((reason, index) => (
                <div key={index} className="mb-4">
                    <button
                    className="flex items-center w-full text-left focus:outline-none"
                    onClick={() => toggleReason(index)}
                    >
                    <span className="text-xl font-bold">
                        {openIndex === index ? (
                            <img src={assets.minus_icon} className="w-4" alt="minus_icon" />
                        ) : (
                            <img src={assets.plus_icon} className="w-4" alt="plus_icon" />
                        )}
                    </span>
                    <span className="ml-3 text-lg font-semibold sm:text-xl font-playfair">{reason.title}</span>
                    </button>
                    {openIndex === index && (
                    <p className="mt-2 text-sm ml-7 sm:text-base text-black-800 md:text-lg">{reason.description}</p>
                    )}
                    {/* Apply border between questions except for the last one */}
                    {index !== reasons.length - 1 && (
                    <hr className="my-4 border-[1.5px] border-li-gold" />
                    )}
                </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default PsychiatrySection;
