import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="relative">
      <div className="bg-black">
      <div className="container grid grid-cols-1 gap-8 p-8 mx-auto text-white xs:grid-cols-2 lg:grid-cols-2 md:p-10 md:py-12">
        {/* Left side container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="mb-2 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">Quick Links</h4>
            <ul>
              <li className="mb-2 text-sm text-slate-200">Who We Are</li>
              <li className="mb-2 text-sm text-slate-200">What We Treat</li>
              <li className="mb-2 text-sm text-slate-200">Services</li>
              <li className="mb-2 text-sm text-slate-200">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">Resources</h4>
            <ul>
              <li className="mb-2 text-sm text-slate-200">FAQs</li>
              <li className="mb-2 text-sm text-slate-200">Blog</li>
              <li className="mb-2 text-sm text-slate-200">Fees and Insurance</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">Legal</h4>
            <ul>
              <li className="mb-2 text-sm text-slate-200">Terms</li>
              <li className="mb-2 text-sm text-slate-200">Privacy</li>
              <li className="mb-2 text-sm text-slate-200">Return Policy</li>
              <li className="mb-2 text-sm text-slate-200">Cookie Settings</li>
            </ul>
          </div>
        </div>

        {/* Right side container */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h4 className="mb-2 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">Business Hours</h4>
            <ul>
              <li className="mb-2 text-sm text-slate-200">Mon - Thursday</li>
              <li className="mb-2 text-sm text-slate-200">9:00 AM - 4:00 PM</li>
            </ul>
            <h4 className="mt-6 mb-2 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">For Careers</h4>
            <ul>
              <li className="mb-2 text-sm text-slate-200">Interested in joining the psychiatry Team?</li>
              <li className="mb-2 text-sm text-slate-200">Career@psychiatry.com</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full bg-custom-gradient"></div>
              <h1 className="ml-2 text-sm font-semibold xs:text-base sm:text-lg xl:text-xl">P S Y C H I A T R Y</h1>
            </div>
            <h4 className="mt-6 mb-2 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">Locate us</h4>
            <ul>
              <li className="mb-2 text-sm text-slate-200">1820 E Ray Road A107, Chandler, Arizona 85225</li>
              <li className="mb-2 text-sm text-slate-200">Phone: 480-526-9292</li>
            </ul>
            <h4 className="mt-6 mb-3 text-lg font-bold md:mb-5 md:text-xl text-thick-gold font-playfair">Follow us</h4>
            <div className="flex gap-4 md:gap-6">
              <img src={assets.instagram_icon} className="w-5 h-5 md:w-6 md:h-6" alt="instagram" />
              <img src={assets.facebook_icon} className="w-5 h-5 md:w-6 md:h-6" alt="facebook" />
              <img src={assets.twitter_icon} className="w-5 h-5 md:w-6 md:h-6" alt="twitter" />
              <img src={assets.tiktok_icon} className="w-5 h-5 md:w-6 md:h-6" alt="tiktok" />
              <img src={assets.linkedin_icon} className="w-5 h-5 md:w-6 md:h-6" alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-500" />
      <p className="pb-4 text-sm text-center sm:text-base lg:pb-5 text-slate-200">
        &copy; Psychiatry. All rights reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;
