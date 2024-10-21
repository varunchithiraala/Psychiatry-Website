import React from 'react';
import { assets } from '../assets/assets';
import { mockData } from '../data/mockData';

const TreatmentSection = () => (
    <section className="py-8 md:py-16">
      <div className="container mx-auto w-[85%] md:w-[80%] lg:w-[75%] max-w-[800px]">
        <h2 className="mb-8 text-2xl font-bold text-center md:mb-16 xs:text-3xl font-playfair">Our Treatment Focus</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {mockData.treatmentFocusData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row gap-6 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}
            >
              <div className="md:w-[35%]">
                <div className="border-thick-gold rounded-full border-[3px] md:w-[250px] md:h-[250px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`object-cover w-48 h-48 rounded-full md:h-[100%] items-center md:w-[100%] md:-mt-[8px] ${index % 2 !== 0 ? 'md:-mr-[8px]' : 'md:-ml-[8px]'}`}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start md:w-[60%]">
                <h3 className="mb-4 text-xl font-bold xs:text-2xl font-playfair">{item.title}</h3>
                <p className="text-sm xs:text-base md:text-lg">{item.description}</p>
                <div className="flex items-center mt-2 md:mt-0">
                  <button className="flex items-center px-4 py-2 mt-3 text-xs font-medium text-black rounded-full md:mt-4 lg:px-6 lg:py-3 lg:mt-6 sm:text-sm lg:text-base bg-custom-gradient">
                    {item.buttonText}
                    <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 pb-12 mt-10 text-center bg-black md:mt-20">
        <span className="text-6xl leading-none text-thicker-gold md:text-8xl font-playfair">
          “
        </span>
      </div>
      <h1 className="-mt-16 text-sm text-center text-white xs:text-[16px] sm:text-lg md:-mt-20 sm:text-xl text-blue md:text-2xl font-playfair">
        “We help people living with and experiencing difficult times”
      </h1>
    </section>
);

export default TreatmentSection;
