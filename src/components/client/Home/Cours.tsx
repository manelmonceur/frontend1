import React from 'react';

const Cours = () => {
  return (
    <section className="py-24 ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
          Our popular blogs
        </h2>
        <div className="flex gap-2 py-2">
          <Card
            id={1}
            description={
              'Simplifying Student Loan Management with Fintech: Alleviating Educational Debt Stress'
            }
          />
          <Card
            id={2}
            description={
              'Innovative Fintech Approaches to Student Loans: Reducing the Financial Strain of Education'
            }
          />
          <Card
            id={3}
            description={
              'Fintech Innovations in Student Lending: Mitigating the Impact of Education Debt'
            }
          />
          <Card
            id={4}
            description={
              'Modern Fintech Strategies for Student Loans: Lightening the Load of Educational Debt'
            }
          />
        </div>
        <a
          href="javascript:;"
          className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Cours;

//
const Card = ({ id, description }) => {
  return (
    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
      <div className="flex items-center mb-6">
        <img
          src={'https://picsum.photos/id/' + id + '/400/300'}
          alt="Alexa image"
          className="rounded-lg w-full"
        />
      </div>
      <div className="block">
        <h4 className="text-gray-900 font-medium leading-8 mb-9">
          {description}
        </h4>
        <div className="flex items-center justify-between  font-medium">
          <h6 className="text-sm text-gray-500">By Alexa H.</h6>
          <span className="text-sm text-indigo-600">2 year ago</span>
        </div>
      </div>
    </div>
  );
};
