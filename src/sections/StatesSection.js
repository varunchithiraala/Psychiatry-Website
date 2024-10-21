import React from 'react';
import { mockData } from '../data/mockData';

const StatesSection = () => (
  <section className="pt-8 sm:pt-12 md:pt-16 lg:pb-8">
    <div className="container mx-auto text-center w-[70%] md:w-[90%] max-w-[1300px]">
      <h2 className="mb-10 text-xl font-bold xs:text-2xl sm:text-3xl font-playfair">
        Now Accepting Patients In The <br /> Following States
      </h2>
      <div className="grid gap-12 md:grid-cols-3">
        {mockData.states.map((state, index) => (
          <div key={index}>
            <img
              src={state.image}
              alt={state.name}
              className="object-cover w-full mb-4 rounded-t-full h-40 xs:h-52 sm:h-64 md:h-[130px] lg:h-[170px] xl:h-[200px]"
            />
            <h3 className="text-xl font-bold font-playfair">{state.name}</h3>
            <p className="text-base">{state.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
