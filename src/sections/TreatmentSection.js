import React from 'react';
import { assets } from '../assets/assets';

const treatmentFocusData = [
  {
    id: 1,
    title: "Mental Health",
    description: "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    image: assets.health_image,
    buttonText: "Learn More",
  },
  {
    id: 2,
    title: "Addiction And Recovery",
    description: "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    image: assets.recovery_image,
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Supervised Medical Weight Loss",
    description: "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client’s needs.",
    image: assets.weight_loss_image,
    buttonText: "Learn More",
  }
];

const TreatmentSection = () => (
    <section className="py-8 md:py-16">
      <div className="container mx-auto w-[85%] md:w-[80%] lg:w-[75%] max-w-[800px]">
        <h2 className="mb-8 text-2xl font-bold text-center md:mb-16 xs:text-3xl font-playfair">Our Treatment Focus</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {treatmentFocusData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row gap-6 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}
            >
              <div className="md:w-[35%]">
                <div className="border-thick-gold rounded-full border-[3px] md:w-[250px] md:h-[250px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`object-cover w-48 h-48 rounded-full md:h-[100%] items-center md:w-[100%] md:-mt-[8px] ${index % 2 !== 0 ? 'md:-mr-[8px]' : 'md:-ml-[8px]'}`}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start md:w-[60%]">
                <h3 className="mb-4 text-xl font-bold xs:text-2xl font-playfair">{item.title}</h3>
                <p className="text-sm xs:text-base md:text-lg">{item.description}</p>
                <div className="flex items-center mt-2 md:mt-0">
                  <button className="flex items-center px-4 py-2 mt-3 text-xs font-medium text-black rounded-full md:mt-4 lg:px-6 lg:py-3 lg:mt-6 sm:text-sm lg:text-base bg-custom-gradient">
                    {item.buttonText}
                    <img src={assets.right_arrow_icon} className="h-3 ml-1 mt-[2px] md:mt-1 md:h-5" alt="right_arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 pb-12 mt-8 text-center bg-black md:mt-16">
        <span className="text-6xl leading-none text-thicker-gold md:text-8xl font-playfair">
          “
        </span>
      </div>
      <h1 className="-mt-16 text-lg text-center text-white md:-mt-20 sm:text-xl text-blue md:text-2xl font-playfair">
        “We help people living with and experiencing difficult times”
      </h1>
    </section>
);

export default TreatmentSection;
