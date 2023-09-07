export const RichestPeopleTable = () => {
  const richestPeople = [
    {
      name: "Zhong Shanshan",
      rank: "1",
      "net worth": "$62.3 B",
      industry: "Food & Beverage",
      country: "china",
    },
    {
      name: "Zhang Yiming",
      rank: "2",
      "net worth": "$49.5 B",
      industry: "Media & Entertainment",
      country: "China",
    },
    {
      name: "Gautam Adani & family",
      rank: "1",
      "net worth": "$150 B",
      industry: "Diversified",
      country: "India",
    },
    {
      name: "Li Ka-shing",
      rank: "1",
      "net worth": "$39 B",
      industry: "Diversified",
      country: "Hong-kong",
    },
  ];
  const showRichestPeople = richestPeople.map((item) => {
    return (
      <tr>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center align-middle">
          {item.name}
        </td>
        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center align-middle">
          {item.rank}
        </td>
        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center align-middle">
          {item.country}
        </td>
        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center align-middle">
          <a className="text-green-500 hover:text-green-700" href="#">
            {item["net worth"]}
          </a>
        </td>
        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center align-middle">
          <a className="text-red-500 hover:text-red-700" href="#">
            {item["industry"]}
          </a>
        </td>
      </tr>
    );
  });
  return (
    <div className="flex flex-col justify-center">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg  border-zinc-300">
            <table className="min-w-full divide-y divide-gray-200 mx-auto">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center align-middle text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase text-center align-middle"
                  >
                    Ranking
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-center align-middle text-gray-500 uppercase "
                  >
                    Country
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase text-center align-middle"
                  >
                    Net Worth
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase text-center align-middle"
                  >
                    Industry
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {showRichestPeople}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
