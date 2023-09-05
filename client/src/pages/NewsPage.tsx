import DropdownList from "../components/DropdownList";
import { RichestPeopleTable } from "../components/newPage/RichestPeopleTable";
import Slider from "../components/newPage/Slider";

function NewsPage() {
  const items = [
    { date: 1, title: "Card 1", descripiton: "descripiton for Card 1" },
    { date: 2, title: "Card 2", descripiton: "descripiton for Card 2" },
    { date: 3, title: "Card 3", descripiton: "descripiton for Card 3" },
    { date: 4, title: "Card 4", descripiton: "descripiton for Card 4" },
    { date: 1, title: "Card 5", descripiton: "descripiton for Card 1" },
    { date: 2, title: "Card 6", descripiton: "descripiton for Card 2" },
    { date: 3, title: "Card 7", descripiton: "descripiton for Card 3" },
    { date: 4, title: "Card 8", descripiton: "descripiton for Card 4" },
    { date: 1, title: "Card 9", descripiton: "descripiton for Card 1" },
    { date: 2, title: "Card 10", descripiton: "descripiton for Card 2" },
    { date: 3, title: "Card 11", descripiton: "descripiton for Card 3" },
    { date: 4, title: "Card 12", descripiton: "descripiton for Card 4" },
    { date: 1, title: "Card 13", descripiton: "descripiton for Card 1" },
    { date: 2, title: "Card 14", descripiton: "descripiton for Card 2" },
    { date: 3, title: "Card 15", descripiton: "descripiton for Card 3" },
    { date: 4, title: "Card 16", descripiton: "descripiton for Card 4" },
    { date: 1, title: "Card 17", descripiton: "descripiton for Card 1" },
    { date: 2, title: "Card 18", descripiton: "descripiton for Card 2" },
    { date: 3, title: "Card 19", descripiton: "descripiton for Card 3" },
    { date: 4, title: "Card 20", descripiton: "descripiton for Card 4" },
    { date: 1, title: "Card 21", descripiton: "descripiton for Card 1" },
    { date: 2, title: "Card 22", descripiton: "descripiton for Card 2" },
    { date: 3, title: "Card 23", descripiton: "descripiton for Card 3" },
    { date: 4, title: "Card 24", descripiton: "descripiton for Card 4" },
    // Add more cards as needed
  ];
  const newsCategory: string[] = ["Coindar", "UToday", "Sport Event"];
  const InfluencersCategory: string[] = [
    "Business Insider",
    "New York Times",
    "News Btc",
    "Super Wealthy",
  ];
  const newsCategoryChange = (option: any) => {
    console.log(option);
  };
  return (
    <div>
      <div className="m-10 border rounded shadow bg-gray-50 py-10">
        <h1 className="pl-4 mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  flex py-4 flex-wrap justify-center ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 flex ">
            Stay informed with the latest news
          </span>{" "}
        </h1>
        <div className="flex justify-end m-6 ">
          <DropdownList
            category=""
            options={newsCategory}
            onSelect={newsCategoryChange}
          />
        </div>
        <div className="m-10">
          <Slider items={items} />
        </div>
      </div>
      <div className="m-10 border rounded shadow bg-gray-50 py-10">
        <h1 className="pl-4 mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  flex py-4 flex-wrap justify-center ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 flex ">
            Influencers
          </span>{" "}
        </h1>
        <div className="flex justify-end m-6 ">
          <DropdownList
            category=""
            options={InfluencersCategory}
            onSelect={newsCategoryChange}
          />
        </div>
        <div className="m-10">
          <Slider items={items} />
        </div>
      </div>
      <div className="m-10 border rounded shadow bg-gray-50 py-10">
        <h1 className="pl-4 mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  flex py-4 flex-wrap justify-center ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 flex ">
            Richest People
          </span>{" "}
        </h1>
        <div className="m-10">
          <RichestPeopleTable />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
