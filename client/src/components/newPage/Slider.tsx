import React, { useState } from "react";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2; // Number of items to display per slide

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-around">
      <div className="flex">
        {items
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((item, index) => (
            <div
              key={index}
              className={`mx-2 ${
                index === 0 ? "ml-0" : "ml-4" // Adjust margin as needed
              }`}
            >
              <div className="rounded  shadow-md bg-white border border-gray-200 justify-center h-96 min-w-80 flex flex-wrap">
                <p className="text-gray-600">{item.date}</p>
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-black-800">{item.description}</p>
              </div>
            </div>
          ))}
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-2 bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-300"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
