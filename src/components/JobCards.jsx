import { useState } from "react";
import cardData from "../data/cardData.json";
import Card from "./Card";
import Pagination from "./Pagination";

const JobCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(cardData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = cardData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4 mx-15">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentCards.map((item, index) => (
          <Card
            key={index}
            position={item.position}
            location={item.location}
            type={item.type}
            level={item.level}
          />
        ))}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default JobCards;
