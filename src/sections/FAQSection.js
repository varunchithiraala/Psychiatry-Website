import React, { useState } from 'react';
import { assets } from '../assets/assets';

const questions = [
    {
      question: "Is Psychiatry confidential?",
      answer: "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
    },
    {
      question: "What is the best way to schedule an appointment?",
      answer: "You Can Schedule An Appointment Through Our Website Or Call Us Directly For A More Personalized Experience.",
    },
    {
      question: "Do you prescribe controlled substance medication?",
      answer: "Yes, Our Certified Professionals Can Prescribe Medications Based On Individual Needs.",
    },
    {
      question: "How long does the initial appointment take?",
      answer: "Typically, The Initial Appointment Takes 45-60 Minutes.",
    },
];

const FAQSection = () => {
  const [open, setOpen] = useState(questions.map(() => false));

  const toggle = (i) => {
    const newOpen = [...open];
    newOpen[i] = !newOpen[i];
    setOpen(newOpen);
  };

  return (
    <section className="py-16">
      <div className="container w-[90%] mx-auto">
        <h2 className="mb-10 text-3xl font-medium text-center lg:text-4xl font-georgia">Frequently asked questions</h2>
        <div className="max-w-4xl mx-auto">
          {questions.map((item, i) => (
            <div
              key={i}
              className={`py-4 ${i !== questions.length - 1 ? 'border-b-[1px] border-li-gold' : ''}`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full text-lg font-medium text-left font-georgia"
              >
                <span className='flex items-center justify-center w-8 h-8 mr-2 font-mono text-2xl font-medium'>
                  {open[i] ? (
                    <img src={assets.minus_icon} className="w-4" alt="minus_icon" />
                  ) : (
                    <img src={assets.plus_icon} className="w-4" alt="plus_icon" />
                  )}
                </span>
                {item.question}
              </button>
              {open[i] && (
                <p className="ml-10 text-black-700 md:mt-1">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-1">
          <button className="flex items-center px-10 py-2 mt-3 text-sm font-medium text-black rounded-full lg:px-20 lg:py-3 lg:text-base bg-custom-gradient">
            See all FAQ
            <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
