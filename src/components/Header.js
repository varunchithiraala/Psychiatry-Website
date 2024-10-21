import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 text-white bg-black md:pl-14 md:pr-10">
      {/* Nav Icon and Logo for Mobile */}
      <div className="flex items-center justify-between w-full lg:hidden">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="mr-3">
            <img src={assets.navbar_icon} className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" alt="Navbar Icon" />
          </button>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full sm:w-6 sm:h-6 bg-custom-gradient"
            ></div>
            <h1 className="ml-2 text-xs font-semibold xs:text-base sm:text-xl">P S Y C H I A T R Y</h1>
          </div>
        </div>
        <button className="px-5 py-2 text-xs font-medium text-black rounded-full xs:px-6 xs:text-base sm:px-9 sm:py-3 bg-custom-gradient"
        >
          Book an Appointment
        </button>
      </div>

      {/* Logo for Desktop */}
      <div className="items-center hidden xl:ml-6 lg:flex">
        <div className="rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full w-9 h-9 bg-custom-gradient"
        ></div>
        <h1 className="ml-2 text-xl font-semibold">P S Y C H I A T R Y</h1>
      </div>

      {/* Nav Links for Desktop */}
      <nav className="hidden xl:mr-2 lg:flex">
        <ul className="flex items-center lg:space-x-3 xl:space-x-6">
          <li className="flex gap-2">
            <p>Who we are</p>
            <img className="h-5 mt-1" src={assets.down_arrow_icon} alt="down_arrow" />
          </li>
          <li className="flex gap-2">
            <p>Who we treat</p>
            <img className="h-5 mt-1" src={assets.down_arrow_icon} alt="down_arrow" />
          </li>
          <li>Services</li>
          <li className="flex gap-2">
            <p>Resources</p>
            <img className="h-5 mt-1" src={assets.down_arrow_icon} alt="down_arrow" />
          </li>
          <li>
            <button className="py-3 font-medium text-black rounded-full px-9 bg-custom-gradient"
            >
              Book an Appointment
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu with Slide-in Animation */}
      <div className={`fixed inset-y-0 left-0 z-50 w-2/4 max-w-xs bg-black transform 
                      ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform 
                      duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-tl-full rounded-tr-full rounded-bl-none rounded-br-full sm:w-6 sm:h-6 bg-custom-gradient"
            ></div>
            <h1 className="ml-2 text-xs font-semibold xs:text-base sm:text-xl">P S Y C H I A T R Y</h1>
          </div>
          <button onClick={toggleMenu}>
            <img src={assets.cross_icon} className="w-4 h-4 sm:w-5 sm:h-5" alt="Close Icon" />
          </button>
        </div>
        <nav className="px-6 py-4">
          <ul className="space-y-6 text-white">
            <li className="text-base sm:text-lg">Who we are</li>
            <li className="text-base sm:text-lg">Who we treat</li>
            <li className="text-base sm:text-lg">Services</li>
            <li className="text-base sm:text-lg">Resources</li>
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 lg:hidden" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
