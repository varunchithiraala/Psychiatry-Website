import React from 'react';
import { assets } from '../assets/assets';
import { mockData } from '../data/mockData';

const FounderSection = () => (
    <section className="relative bg-gold">
        <div className="w-[90%] lg:w-[85%] mx-auto pt-6 pb-16 md:pt-20 md:pb-20 max-w-[1260px]">
          <div className="container flex flex-col md:flex-row items-center mx-auto md:mx-0 md:ml-auto border-2 border-[#e6c300] md:w-2/3 lg:w-[70%] h-[460px] md:h-auto rounded-xl p-8 md:p-6 md:pr-16 mt-[40%] xs:mt-[30%] md:mt-0">
            <img src={mockData.founder.image} alt="Founder" className="w-[80%] h-[280px] object-cover rounded-xl -mt-[44%] xs:-mt-[28%] md:mt-0 md:-ml-[66%] lg:-ml-[48%]" />
            <div className="mt-8 md:mt-0 md:ml-8">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl font-playfair">
                {mockData.founder.title}
              </h2>
              <p className="mt-4 mb-0 text-base font-bold sm:text-lg lg:text-xl font-playfair">
                {mockData.founder.name}
              </p>
              <p className="text-sm font-bold sm:text-base lg:text-lg">
                {mockData.founder.credentials}
              </p>
              <p className="mt-3 text-sm sm:text-base lg:text-lg">
                {mockData.founder.message}
              </p>
              <div className="flex items-center">
                <button className="flex items-center px-4 py-2 mt-3 text-xs font-medium text-black rounded-full md:mt-6 lg:px-6 lg:py-3 lg:mt-8 sm:text-sm lg:text-base bg-custom-gradient"
                >
                  {mockData.founder.buttonText}
                  <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
);

export default FounderSection;
