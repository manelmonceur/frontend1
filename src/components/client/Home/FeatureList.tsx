export default function FeatureList() {
  return (
    <div className="border-b-2 py-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-1 items-center border-b border-gray-200 md:border-b-0 mb-4 md:mb-0 pb-4 md:pb-0">
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center mr-4 text-white">
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
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="text-lg font-bold mb-1">
                500+ Session per Week
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center border-b border-gray-200 md:border-b-0 mb-4 md:mb-0 pb-4 md:pb-0">
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center mr-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="text-lg font-bold mb-1">Expert Tutors</div>
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center mr-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <div className="text-lg font-bold mb-1">Unlimited Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
