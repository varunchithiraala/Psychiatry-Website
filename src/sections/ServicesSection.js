import React from 'react';
import { assets } from '../assets/assets';
import { mockData } from '../data/mockData';

const ServicesSection = () => (
    <section className="p-8 md:pt-10 lg:pt-12">
      <h2 className="mb-4 text-3xl font-bold text-center md:mb-8 font-playfair">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-1 mx-auto md:gap-0 xl:gap-6 md:grid md:grid-cols-3 md:justify-items-center lg:flex lg:flex-row">
        {mockData.services.map((service, index) => (
          <div key={index} className="w-[150px] p-3 md:p-6 text-center">
            <img src={service.icon} alt={service.title} className="w-24 h-24 p-6 mx-auto rounded-full bg-gold" />
            <h4 className="mt-4 font-bold font-playfair">{service.title}</h4>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2 md:mt-4">
        <button className="flex items-center px-8 py-2 mt-3 text-xs font-medium text-black rounded-full lg:px-12 lg:py-3 lg:text-base bg-custom-gradient">
          View our services
          <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
        </button>
      </div>
    </section>
);

export default ServicesSection;
