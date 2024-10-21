import React from 'react';
import { assets } from '../assets/assets';

const services = [
  { title: 'Psychiatric Evaluation', icon: assets.human_brain_icon },
  { title: 'Medication Management', icon: assets.hospital_icon },
  { title: 'Supportive Psychotherapy', icon: assets.intelligence_icon },
  { title: 'ADHD Screening', icon: assets.adhd_icon },
  { title: 'MAT Treatment', icon: assets.human_brain_icon },
  { title: 'Gene Sight Testing', icon: assets.hospital_icon }
];

const ServicesSection = () => (
    <section className="p-8 md:pt-10 lg:pt-12">
      <h2 className="mb-8 text-3xl font-bold text-center font-playfair">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-1 mx-auto md:gap-0 xl:gap-6 md:grid md:grid-cols-3 md:justify-items-center lg:flex lg:flex-row">
        {services.map((service, index) => (
          <div key={index} className="w-[150px] p-3 md:p-6 text-center">
            <img src={service.icon} alt={service.title} className="w-24 h-24 p-6 mx-auto rounded-full bg-gold" />
            <h4 className="mt-4 font-bold font-playfair">{service.title}</h4>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <button className="flex items-center px-8 py-2 mt-3 text-xs font-medium text-black rounded-full lg:px-12 lg:py-3 lg:text-base bg-custom-gradient">
          View our services
          <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
        </button>
      </div>
    </section>
);

export default ServicesSection;
