import React from 'react';
import HeroSection from '../sections/HeroSection';
import FounderSection from '../sections/FounderSection';
import TreatmentSection from '../sections/TreatmentSection';
import ServicesSection from '../sections/ServicesSection';
import PsychiatrySection from '../sections/PsychiatrySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import GetStartedSection from '../sections/GetStartedSection';
import StatesSection from '../sections/StatesSection';
import FAQSection from '../sections/FAQSection';

const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <FounderSection />
      <TreatmentSection />
      <ServicesSection />
      <PsychiatrySection />
      <TestimonialsSection />
      <GetStartedSection />
      <StatesSection />
      <FAQSection />
    </main>
  );
};

export default MainContent;
