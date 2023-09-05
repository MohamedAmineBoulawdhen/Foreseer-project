export const RichestPeopleTable = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
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
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center align-middle">
                    Zhong Shanshan
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap text-center align-middle">
                    1
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center align-middle">
                    china
                  </td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center align-middle">
                    <a className="text-green-500 hover:text-green-700" href="#">
                      $62.3
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-center align-middle">
                    <a className="text-red-500 hover:text-red-700" href="#">
                      Food & Beverage
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
