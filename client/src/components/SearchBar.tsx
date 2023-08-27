import { useState } from "react";
import RangeBar from "./RangeBar";
import DopdownList from "./DopdownList";

function SearchBar() {
  const [followerRange, setFollowerRange] = useState(4000);
  const [engagementRate, setEngagementRateRange] = useState(0.1);
  const [categorie, setCategorie] = useState("");
  console.log(categorie);
  const categories: string[] = [
    "Forex",
    "Future",
    "Crypto",
    "Stocks",
    "Daily Trader",
    "Swing",
    "Trader",
    "Investor",
    "Mentor",
    "Analysist",
  ];
  return (
    <div className="flex items-center justify-around p-8 bg-white rounded-lg shadow-lg flex-row mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xl:space-y-0 lg:space-y-0 md:space-y-0 sm:space-y-4 mobile:space-y-4">
      <RangeBar
        setRange={setEngagementRateRange}
        range={engagementRate}
        min={0}
        max={10}
        step={0.01}
      />
      <RangeBar
        setRange={setFollowerRange}
        range={followerRange}
        min={1000}
        max={60000000}
        step={1000}
      />
      <DopdownList
        options={categories}
        onSelect={setCategorie}
        categorie={categorie}
      />

      <button className="inline-flex justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-blue-100 border rounded-lg shadow-sm hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-blue-300 -mt-4 w-auto">
        Confirm Choices
      </button>
    </div>
  );
}

export default SearchBar;
