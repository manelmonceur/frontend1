'use client';
import Link from 'next/link';
import React from 'react';
import { HiUserPlus } from 'react-icons/hi2';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { MdMissedVideoCall } from 'react-icons/md';
import { RiParentLine } from 'react-icons/ri';
import { FiMessageCircle } from 'react-icons/fi';
import { Popover } from 'antd';

const content = (
  <>
    <div className="flex flex-col space-y-3 min-w-[200px]">
      <button className="w-full text-left">Profile</button>
      <button className="w-full text-left">Logout</button>
    </div>
  </>
);

const Navbar = () => {
  return (
    <aside
      id="sidebar"
      className="col-span-2 z-20 h-screen top-0 left-0 flex lg:flex flex-shrink-0 flex-col  transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-blue-950  pt-0 ">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 flex flex-col justify-between px-3 bg-blue-950 divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <Link
                  href="/admin/dashboard"
                  className="text-base text-gray-300 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 hover:text-gray-800 group"
                >
                  <svg
                    className="w-6 h-6 text-gray-300 group-hover:text-gray-800 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/meetings"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <MdMissedVideoCall size={24} />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Meetings
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/pending_accounts"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <RiParentLine size={24} />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Pending Accounts
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/admins"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <svg
                    className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-800 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Admins</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/mentors"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <svg
                    className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-800 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Mentors</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/teachers"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <svg
                    className="w-6 h-6 text-gray-300 flex-shrink-0 group-hover:text-gray-800 transition duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Teachers
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/parents"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <RiParentLine size={24} />
                  <span className="ml-3 flex-1 whitespace-nowrap">Parents</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/addAdmin"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <HiUserPlus size={24} />
                  <span className="ml-3 flex-1 whitespace-nowrap text-gray-300 hover:text-gray-800">
                    Add User
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/payments"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <AiOutlineCreditCard size={24} />
                  <span className="ml-3 flex-1 whitespace-nowrap text-gray-300 hover:text-gray-800">
                    Payments
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/message"
                  className="text-base text-gray-300 font-normal rounded-lg hover:bg-gray-100 hover:text-gray-800 flex items-center p-2 group "
                >
                  <FiMessageCircle size={24} />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Messages
                  </span>
                </Link>
              </li>
            </ul>
            <Popover content={content}>
              <div className="flex items-center p-2 text-gray-200 space-x-5 max-h-[100px]">
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.7837ddb38ea25f397aa93039c9591124?rik=t75EwMa7SryjBQ&pid=ImgRaw&r=0"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">Admin</span>
                  <span>Admin</span>
                </div>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
