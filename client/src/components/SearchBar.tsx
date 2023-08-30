import RangeBar from "./RangeBar";
import DopdownList from "./DopdownList";

function SearchBar({
  followers,
  engagementRate,
  category,
  setFollowers,
  setEngagementRateRange,
  setCategory,
  confirmFilter,
  clearFilter,
}: {
  followers: any;
  engagementRate: any;
  category: any;
  setFollowers: any;
  setEngagementRateRange: any;
  setCategory: any;
  confirmFilter: any;
  clearFilter: any;
}) {
  // console.log(category);
  const categories: string[] = [
    "Forex",
    "Future",
    "Crypto",
    "Stocks",
    "Daily%20Trader%20",
    "%20Swing%20Trader%20",
    "Investor%20",
    "Mentor%20",
    "%20Analysist",
  ];
  const isButtonDisabled = !(
    followers != 1000 ||
    engagementRate != 0 ||
    category != ""
  );

  // console.log(followers, engagementRate, category);
  return (
    <div className="flex items-center justify-around p-8 bg-white rounded-lg shadow-lg flex-row mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xl:space-y-0 lg:space-y-0 md:space-y-0 sm:space-y-4 mobile:space-y-4">
      <RangeBar
        setRange={setEngagementRateRange}
        range={engagementRate}
        min={0}
        max={10}
        step={0.01}
        printedText="Engagement Rate >= "
      />
      <RangeBar
        setRange={setFollowers}
        range={followers}
        min={1000}
        max={60000000}
        step={1000}
        printedText="Followers >= "
      />
      <DopdownList
        options={categories}
        onSelect={setCategory}
        category={category}
      />

      <button
        className={`inline-flex justify-between px-4 py-2 text-sm font-medium ${
          isButtonDisabled
            ? "text-gray-400 bg-gray-200 cursor-not-allowed"
            : "text-gray-700 bg-blue-100 hover:bg-blue-200"
        } border rounded-lg shadow-sm focus:outline-none focus-visible:ring ${
          isButtonDisabled
            ? "focus-visible:ring-opacity-0"
            : "focus-visible:ring-opacity-75 focus-visible:ring-blue-300"
        } -mt-4 w-auto`}
        disabled={isButtonDisabled}
        onClick={confirmFilter}
      >
        Confirm Choices
      </button>
      <button
        className={`inline-flex justify-between px-4 py-2 text-sm font-medium ${
          isButtonDisabled
            ? "text-gray-400 bg-gray-200 cursor-not-allowed"
            : "text-gray-700 bg-red-100 hover:bg-red-200"
        } border rounded-lg shadow-sm focus:outline-none focus-visible:ring ${
          isButtonDisabled
            ? "focus-visible:ring-opacity-0"
            : "focus-visible:ring-opacity-75 focus-visible:ring-red-300"
        } -mt-4 w-auto`}
        disabled={isButtonDisabled}
        onClick={clearFilter}
      >
        Clear Filter
      </button>
    </div>
  );
}

export default SearchBar;
