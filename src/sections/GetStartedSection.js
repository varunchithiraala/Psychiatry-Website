import React from 'react';
import { assets } from '../assets/assets';
import { mockData } from '../data/mockData';

const GetStartedSection = () => (
    <section className="relative">
        <div className="p-8 pb-10 text-center bg-black border-y-4 border-thicker-gold lg:pt-10 lg:pb-12">
        <h2 className="mb-0 text-2xl font-semibold sm:mb-3 text-thick-gold xs:text-3xl md:text-4xl font-playfair">
            Four Simple Steps To
        </h2>
        <h2 className="mb-6 text-2xl font-semibold md:mb-12 text-thick-gold xs:text-3xl md:text-4xl font-playfair">
            Get Started
        </h2>
        <ul className="flex flex-col xs:flex-row xs:flex-wrap xs:justify-center md:flex-nowrap md:gap-2 lg:gap-8 lg:flex-row">
            {mockData.steps.map((step, index) => (
            <li key={index} className="mt-6 xs:mt-8 md:mt-0 sm:w-1/2 md:w-auto">
                <div className="flex flex-col items-center">
                    <img src={step.icon} alt={step.text} className="w-12 h-12" />
                    <h3 className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl text-thicker-gold font-playfair">{step.number}</h3>
                    <p className="mt-2 text-sm text-white w-[200px] md:w-[180px] lg:w-[200px]">{step.text}</p>
                </div>
            </li>
            ))}
        </ul>
        <div className="flex justify-center mt-4 md:mt-6">
            <button className="flex items-center px-8 py-2 mt-4 text-sm font-medium text-black rounded-full lg:px-12 lg:py-3 lg:text-base bg-custom-gradient">
            Schedule a Call
            <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
            </button>
        </div>
      </div>
    </section>
);

export default GetStartedSection;
