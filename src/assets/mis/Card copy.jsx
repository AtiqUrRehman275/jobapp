const Card = () => {
  return (
    <div className="flex flex-col justify-between border border-gray-200 shadow-lg rounded-xl w-full max-w-[280px] min-h-[300px] p-5 m-5 bg-white">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <img
          src="/images/crownbenling.png"
          alt="Company Logo"
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
        <button className="bg-gray-200 text-black text-sm px-3 py-1 rounded-lg hover:bg-black hover:text-white transition">
          View Details
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <h5 className="text-xl font-semibold text-gray-800">Netflix</h5>
        <span className="text-xs text-gray-400">Posted 5 days ago</span>

        <div className="flex gap-2 mt-4">
          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            Part-time
          </span>
          <span className="text-xs px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            Senior Level
          </span>
        </div>
      </div>

      {/* Footer Section (Sticks to Bottom) */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm text-gray-600">New York, USA</span>
        <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Card;
