'use client';

import { createMessages, getMessages } from '@/services/apiService';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  const _getMessages = async () => {
    const m = await getMessages();
    console.log(1);
    setMessages(m);
  };

  const createMessage = async () => {
    if (content == '') return;
    const formData = { name: 'Admin', content };
    await createMessages(formData);
    setContent('');
    await _getMessages();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call your function here
      _getMessages();
    }, 20000); // 20 seconds in milliseconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 h-screen antialiased text-gray-800">
        <div className="flex flex-row bg-gray-100 p-4 col-span-3">
          <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div className="text-xl font-semibold">Messages</div>
              </div>
              <div className="ml-auto">
                <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex flex-row items-center justify-between">
                <li>
                  <a
                    href="#"
                    className="flex items-center pb-3 text-xs font-semibold relative text-indigo-800"
                  >
                    <span>All Conversations</span>
                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <div className="text-xs text-gray-400 font-semibold uppercase">
                Team
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-col -mx-4">
                <Client />
                {/* <Client /> */}
              </div>
            </div>

            <div className="h-full overflow-hidden relative pt-2">
              <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                {/* <Client /> */}
                {/* <Client />
                <Client />
                <Client />
                <Client />
                <Client /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full bg-white px-4 py-6 col-span-9">
          <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <div className="flex flex-col ml-3">
              <div className="font-semibold text-sm"></div>
              <div className="text-xs text-gray-500">Active</div>
            </div>
          </div>
          <div className="h-full overflow-hidden py-4">
            <div className="h-full overflow-y-auto">
              <div className="grid grid-cols-12 gap-y-2">
                {/* message */}
                {messages.map((m: any) => (
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className=" h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0" />

                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div className="text-sm font-semibold">{m.name}</div>
                        <div>{m.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
              <div className="w-full">
                <input
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
                  placeholder="Type your message...."
                />
              </div>
            </div>
            <div className="ml-6">
              <button
                onClick={createMessage}
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white"
              >
                <svg
                  className="w-5 h-5 transform rotate-90 -mr-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

const Client = () => {
  return (
    <div className="relative flex flex-row items-center p-4">
      <div className=" h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0" />
      <div className="flex flex-col flex-grow ml-3">
        <div className="text-sm font-medium">Mentors</div>
        {/* <div className="text-xs truncate w-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          doloribus?
        </div> */}
      </div>
    </div>
  );
};
