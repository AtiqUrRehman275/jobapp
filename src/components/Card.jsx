import { FiSend } from "react-icons/fi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import "../assets/buttons/Button";
import ApplyButton, { ViewButton } from "../assets/buttons/Button";

const Card = ({ position, location, type, level }) => {
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-col justify-between border border-gray-200 shadow-xl rounded-xl w-full max-w-[280px] min-h-[280px] p-5 bg-white ">
        {/* Header Row */}
        <div className="flex justify-between items-center">
          <img
            src="/public/images/crownbenling.png"
            alt="Company Logo"
            className="h-[50px] w-[50px] rounded-full object-cover"
          />
          <ViewButton ButtonText={"View Details"}>
            <HiOutlineDocumentSearch className="text-lg" />
          </ViewButton>
        </div>

        {/* Content Section */}
        <div className="mt-4">
          <h5 className="text-lg font-bold text-gray-800 ">{position}</h5>
          <span className="text-sm text-gray-800 ">{location}</span>
          <div className="flex gap-2 mt-4">
            <span className="text-xs px-3 py-1 bg-gray-200 text-gray-800 rounded-full">
              {type}
            </span>
            <span className="text-xs px-3 py-1 bg-gray-200 text-gray-800 rounded-full">
              {level}
            </span>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-6">
          {/* View Detail Button – Subtle Secondary Action */}
          <span className="text-xs text-gray-400 font-bold">
            Posted 5 days ago
          </span>
          {/* Apply Now Button – Primary CTA */}
          <ApplyButton ButtonText="Apply Now">
            <FiSend className="text-base" />
          </ApplyButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
