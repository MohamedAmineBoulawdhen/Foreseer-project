import DropdownList from "../components/DropdownList";
import { RichestPeopleTable } from "../components/newPage/RichestPeopleTable";
import Slider from "../components/newPage/Slider";

function NewsPage() {
  const eventItem = [
    {
      date: "August 14, 2023 UTC",
      title: "BullBear AI AIBB",
      descripiton:
        "BullBear AI has announced that it will be conducting a burn of 100% of the AIBB in its Treasury Wallet. This event is scheduled to take place at 2 pm …",
    },
    {
      date: "August 15, 2023 UTC",
      title: "Bankless DAO BANK",
      descripiton:
        "Bankless DAO is set to host a webinar on August 15th at 2 pm UTC. The event will focus on Sobol, a tool used for mapping DAOs and organizations. This …",
    },
    {
      date: "August 16, 2023 UTC",
      title: "Bankless DAO BANK",
      descripiton:
        "Bankless DAO is set to host a webinar on August 16th at 2 pm UTC.The event will focus on Sesh, a discord bot, for time management, event creation, …",
    },
    {
      date: "August 17, 2023 UTC",
      title: "Bankless DAO BANK",
      descripiton:
        "Bankless DAO is set to host a knowledge session on wallet security. The session will cover the fundamentals of wallet usage and how to safeguard walle…",
    },
    // Add more cards as needed
  ];
  const newsCategory: string[] = ["Coindar", "UToday", "Sport Event"];
  const InfluencersCategory: string[] = [
    "Business Insider",
    "New York Times",
    "News Btc",
    "Super Wealthy",
  ];
  const countryOfRichestPeople: string[] = [
    "China",
    "India",
    "Indonesia",
    "Korea",
    "Thailand",
    "Japan",
    "Australia",
    "Taiwan",
    "Singapore",
    "Philippines",
    "Hong-kong",
    "Malaysia",
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
          <Slider items={eventItem} />
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
          <Slider items={eventItem} />
        </div>
      </div>
      <div className="m-10 border rounded shadow bg-gray-50 py-10">
        <h1 className="pl-4 mb-4  text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl  flex py-4 flex-wrap justify-center ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 flex ">
            Richest People
          </span>{" "}
        </h1>{" "}
        <div className="flex justify-end m-6 ">
          <DropdownList
            category=""
            options={countryOfRichestPeople}
            onSelect={newsCategoryChange}
          />
        </div>
        <div className="m-10">
          <RichestPeopleTable />
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
