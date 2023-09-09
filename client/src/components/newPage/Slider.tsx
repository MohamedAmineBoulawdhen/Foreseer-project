import React, { useState } from "react";
import formatValue from "../../utils/formatValue";

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
              {/* <div className="rounded  shadow-md bg-white border border-gray-200 justify-center h-96 min-w-80 flex flex-wrap">
                <p className="text-gray-600">{item.date}</p>
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-black-800">{item.description}</p>
              </div> */}
              <>
                <div
                  role="listitem"
                  className="xl:w-1/3 sm:w-3/4 md:w-4/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 flex flex-wrap transform transition-transform hover:scale-105"
                >
                  <div className="rounded overflow-hidden shadow-md bg-white border border-gray-200 justify-center h-96 min-w-80 flex flex-wrap">
                    <div className="absolute -mt-20 w-full flex justify-center flex-wrap">
                      <div className="h-32 w-32">
                        {/* https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif */}
                        <img
                          src={`data:image/jpeg;base64,${item.base64}`}
                          alt={`Display Picture of ${item.full_name}`}
                          role="img"
                          crossOrigin="anonymous"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        {item.full_name
                          ? item.full_name
                              .trim()
                              .split(/\s+|\|/)
                              .slice(0, 2)
                              .join(" ")
                          : ""}
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        {item.username}
                      </p>
                      <p className="text-justify text-gray-600 text-base pt-3 font-normal">
                        {item.biography}biography
                      </p>
                      <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                        <div className="w-full flex justify-center pt-5 pb-5 flex-col">
                          <a className="mx-5   ">
                            <div aria-label="Github" role="img">
                              <span className="font-semibold">Followers</span>{" "}
                              <span className="font-black">
                                {item.follower_count}
                              </span>
                            </div>
                          </a>
                          <a className="mx-5   ">
                            <div aria-label="Twitter" role="img">
                              <span className="font-semibold">Following</span>{" "}
                              <span className="font-black">
                                {item.following_count}
                              </span>
                            </div>
                          </a>
                          <a className="mx-5  ">
                            <div aria-label="Instagram" role="img">
                              <span className="font-semibold">
                                Engagement Rate
                              </span>{" "}
                              <span className="font-black">
                                {" "}
                                {Math.ceil(item.engagementRate * 100) / 100}
                              </span>
                            </div>
                          </a>
                          <button
                            className="bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow relative -bottom-6 w-20 text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 "
                            // onClick={() => setShowModal(true)}
                          >
                            More Details...
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
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
