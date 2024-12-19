import mockData from "../mockData.json";
import { supabase } from "../client";
import { Link } from "react-router-dom";

export default function Gains() {


  const totalInvested = mockData.reduce((acc, item) => acc + item.price, 0);
  const totalCurrentValue = mockData.reduce(
    (acc, item) => acc + item.realtimePrice,
    0
  );

  const totalGain = ((totalCurrentValue - totalInvested) / totalInvested) * 100;

  const sortedList = [...mockData].sort(
    (a, b) =>
      ((b.realtimePrice - b.price) / b.price) * 100 -
      ((a.realtimePrice - a.price) / a.price) * 100
  );

  return (
    <Link to="/PortfolioPage">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full">
        <h2 className="text-2xl font-bold mb-4">Gains</h2>
        <ul className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="font-semibold text-xl">
              Overall Gain/Loss:{" "}
              <span
                className={`${
                  totalGain >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {totalGain.toFixed(2)}%
              </span>
            </p>
          </div>
          {sortedList.map((item, index) => {
            const priceGain =
              ((item.realtimePrice - item.price) / item.price) * 100;
            return (
              <li key={index} className="bg-gray-700 p-4 rounded-lg ">
                <p className="font-semibold text-xl">{item.ticket}</p>
                <p className="text-gray-400">
                  Price Gain:{" "}
                  <span
                    className={`${
                      priceGain >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {priceGain.toFixed(2)}%
                  </span>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
}