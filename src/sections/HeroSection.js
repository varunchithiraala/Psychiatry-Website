import React from 'react';
import { assets } from '../assets/assets';

const HeroSection = () => (
    <section className="relative">
        <div>
          {/* Image Container */}
          <div className="relative">
            <img
              src={assets.header_bg_image}
              alt="header_image"
              className="object-cover w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
            />
            
            {/* Gradient Shadow Overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>

            {/* Content on Image */}
            <div className="absolute top-0 left-0 flex flex-col justify-center w-full h-full pl-4 text-white md:pl-14 xl:pl-20">
              <h1 className="text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-medium md:leading-tight font-playfair w-[90%] md:w-[70%] lg:w-[50%] max-w-[350px] md:max-w-[420px] lg:max-w-[540px]">NEED A MENTAL HEALTH PROVIDER?</h1>
              <p className="mt-4 text-xs font-medium sm:text-sm md:text-lg lg:text-xl font-playfair font-white">
                No Look Further
              </p>
              <p className="mt-2 text-xs sm:text-sm md:text-lg lg:text-xl font-thin font-playfair font-white w-[90%] md:w-[70%] lg:w-[50%] max-w-[280px] md:max-w-[350px] lg:max-w-[440px]">
                Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
              </p>
              
              {/* Button with arrow */}
              <div className="flex items-center">
                <button className="flex items-center px-4 py-2 mt-3 text-xs font-medium text-black rounded-full md:mt-6 lg:px-6 lg:py-3 lg:mt-8 sm:text-sm lg:text-base bg-custom-gradient"
                >
                  Learn More
                  <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
                </button>
              </div>
            </div>

            {/* Dots Pagination */}
            <div className="absolute flex pl-4 space-x-2 bottom-5 md:pl-14 xl:pl-20">
              <span className="hexagon active"></span>
              <span className="hexagon"></span>
              <span className="hexagon"></span>
              <span className="hexagon"></span>
              <span className="hexagon"></span>
            </div>
          </div>
        </div>
    </section>
);

export default HeroSection;
