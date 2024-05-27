import React, { FC } from 'react';
import {
  PiBookBookmarkThin,
  PiChalkboardTeacherThin,
  PiStudentFill,
} from 'react-icons/pi';
import { SiGoogleclassroom } from 'react-icons/si';
import { SlUser } from 'react-icons/sl';

interface CardDashboardProps {
  title: string;
  value: number;
}

const CardDashboard: FC<CardDashboardProps> = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
            {value}
          </div>
          <h3 className="text-base font-normal text-gray-500">Total {title}</h3>
        </div>
        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-gray-500 text-base font-bold">
          {title === 'Users' ? (
            <PiStudentFill size={32} />
          ) : title === 'Teachers' ? (
            <PiChalkboardTeacherThin size={32} />
          ) : title === 'Courses' ? (
            <PiBookBookmarkThin size={32} />
          ) : title === 'Classes' ? (
            <SiGoogleclassroom size={32} />
          ) : title === 'Parents' ? (
            <SlUser size={32} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
