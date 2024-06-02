import React from 'react';

const CourseList = () => {
  return (
    <>
      <div>
        <section className=" text-gray-200 bg-gray-200">
          <div className="max-w-6xl mx-auto px-5 py-24 ">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
                Our Courses
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <CourseCard
                title="Mathematics"
                description="Explore the world of numbers, equations, and mathematical theories."
              />
              <CourseCard
                title="Science"
                description="Discover the wonders of the natural world through our science courses."
              />
              <CourseCard
                title="Physics"
                description="Understand the principles that govern the universe with our physics courses."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseList;

const CourseCard = ({ title, description }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 bg-slate-200">
      <div className="border border-gray-300 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <h2 className="text-lg  font-medium title-font mb-2">{title}</h2>
        <p className="leading-relaxed text-base text-gray-600">{description}</p>

        <div className="text-center mt-2 leading-none flex justify-between w-full">
          <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 text-gray-600">
            <svg
              className=" fill-current w-4 h-4 mr-2 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
            </svg>
            40 min
          </span>
          <span className=" inline-flex items-center leading-none text-sm text-gray-600">
            <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#D8D8D8"
                  d="M9.2 6.583v11.08h3.5V6.583zm6.4 11.084h3.5V3h-3.5z"
                />
                <path fill="#667EEA" d="M2.6 17.667h3.5v-7.334H2.6z" />
              </g>
            </svg>
            Débutant
          </span>
        </div>
      </div>
    </div>
  );
};
