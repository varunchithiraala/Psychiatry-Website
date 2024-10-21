import React from 'react';
import { assets } from '../assets/assets';

const steps = [
  {
    icon: assets.appointment_icon,
    number: '01',
    text: 'Schedule an appointment'
  },
  {
    icon: assets.hanshake_icon,
    number: '02',
    text: 'Connect with your provider'
  },
  {
    icon: assets.negotiation_icon,
    number: '03',
    text: 'Discuss your comprehensive assessment'
  },
  {
    icon: assets.clipboard_icon,
    number: '04',
    text: 'Receive your individualized treatment plan'
  }
];

const GetStartedSection = () => (
    <section className="relative">
        <div className="p-8 text-center bg-black border-y-4 border-thicker-gold lg:pt-10 lg:pb-10">
        <h2 className="mb-3 text-2xl font-semibold text-thick-gold md:text-4xl font-playfair">
            Four Simple Steps To
        </h2>
        <h2 className="mb-6 text-2xl font-semibold md:mb-12 text-thick-gold md:text-4xl font-playfair">
            Get Started
        </h2>
        <ul className="flex flex-col xs:flex-row xs:flex-wrap xs:justify-center md:flex-nowrap md:gap-2 lg:gap-8 lg:flex-row">
            {steps.map((step, index) => (
            <li key={index} className="mt-6 xs:mt-8 md:mt-0 sm:w-1/2 md:w-auto">
                <div className="flex flex-col items-center">
                    <img src={step.icon} alt={step.text} className="w-12 h-12" />
                    <h3 className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl text-thicker-gold font-playfair">{step.number}</h3>
                    <p className="mt-2 text-sm text-white w-[200px] md:w-[180px] lg:w-[200px]">{step.text}</p>
                </div>
            </li>
            ))}
        </ul>
        <div className="flex justify-center mt-2 md:mt-4">
            <button className="flex items-center px-8 py-2 mt-3 text-sm font-medium text-black rounded-full lg:px-12 lg:py-3 lg:text-base bg-custom-gradient">
            Schedule a Call
            <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
            </button>
        </div>
      </div>
    </section>
);

export default GetStartedSection;
