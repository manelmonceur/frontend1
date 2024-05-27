import React from 'react';

const HerosSection = () => {
  return (
    <div className="bg-[url('/bgHeero.jpg')] bg-cover bg-no-repeat">
      <div className="hero  text-center md:text-left py-28  bg-[#000000cc] flex items-center justify-center flex-col">
        <h1 className="text-white shadow">Learn to Code</h1>
        <p className="lead max-w-lg mx-auto md:mx-0 text-white shadow mb-12">
          Business, Technology and Creative Skills taught by industry experts.
          Explore a wide range of skills with our professional tutorials.
        </p>

        <a
          href="courses.html"
          className="btn btn-lg bg-white text-gray-800 font-bold py-2 px-4 rounded mb-4"
        >
          Browse Courses
        </a>

        <p className="mb-0">
          <a href="" className="text-white shadow">
            <strong>Are you a teacher?</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default HerosSection;
