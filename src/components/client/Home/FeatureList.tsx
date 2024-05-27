export default function FeatureList() {
  return (
    <div className="border-b-2 py-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-1 items-center border-b border-gray-200 md:border-b-0 mb-4 md:mb-0 pb-4 md:pb-0">
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center mr-4">
              <i className="material-icons text-white">subscriptions</i>
            </div>
            <div className="flex-grow">
              <div className="text-lg font-bold mb-1">8,000+ Courses</div>
              <p className="text-gray-500">Explore a wide range of skills.</p>
            </div>
          </div>
          <div className="flex flex-1 items-center border-b border-gray-200 md:border-b-0 mb-4 md:mb-0 pb-4 md:pb-0">
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center mr-4">
              <i className="material-icons text-white">verified_user</i>
            </div>
            <div className="flex-grow">
              <div className="text-lg font-bold mb-1">By Industry Experts</div>
              <p className="text-gray-500">
                Professional development from the best people.
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center mr-4">
              <i className="material-icons text-white">update</i>
            </div>
            <div className="flex-grow">
              <div className="text-lg font-bold mb-1">Unlimited Access</div>
              <p className="text-gray-500">
                Unlock Library and learn any topic with one subscription.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
