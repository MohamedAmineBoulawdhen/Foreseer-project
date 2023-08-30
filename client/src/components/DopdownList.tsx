import { useState } from "react";
function DopdownList({
  options,
  onSelect,
  category,
}: {
  options: string[];
  onSelect: any;
  category: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: any) => {
    // console.log(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="-mt-5 z-10 w-max">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-blue-300"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={() => setIsOpen(!isOpen)}
          >
            {category ? decodeURIComponent(category) : "Select A Category"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {isOpen &&
            options.map((option: string) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className="py-1 px-4 cursor-pointer hover:bg-gray-100 w-40"
                role="menuitem"
              >
                {decodeURIComponent(option)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DopdownList;
