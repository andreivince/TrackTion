import mockData from "../mockData.json";

export default function Dividends() {
  // Sort the list based on the total dividend (quantity * last dividend)
  const sortedList = [...mockData].sort(
    (a, b) => b.quantity * b.last_dividend - a.quantity * a.last_dividend
  );

  const totalDividends = mockData.reduce(
    (total, currentValue) =>
      (total = total + currentValue.last_dividend * currentValue.quantity),
    0
  );

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full">
      <h2 className="text-2xl font-bold mb-4">Dividends</h2>
      <ul className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">
            Total Dividends:
            <span className="text-green-500">
              {" "}
              ${totalDividends.toFixed(2)}
            </span>
          </p>
        </div>

        {sortedList.map((item, index) => (
          <li key={index} className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold text-xl">{item.ticket}</p>
            <p className="text-gray-400">
              Last Dividend:{" "}
              <span className="text-white">
                ${(item.quantity * item.last_dividend).toFixed(2)}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
