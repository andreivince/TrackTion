import mockData from "../mockData.json";
import { supabase } from "../client";

export default function Vehicles() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full">
      <h2 className="text-2xl font-bold mb-4">Vehicles</h2>
      <ul className="space-y-4">
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">Corolla LE 2023</p>
          <p className="text-gray-400">Price Paid: 20,149</p>
          <p className="text-gray-400">
            Current Price:{" "}
            <span className="text-red-500 font-semibold">17,607</span>
          </p>
          <p className="text-gray-400">
            Depreciation:{" "}
            <span className="text-red-500 font-semibold">-7%</span>
          </p>
        </li>
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">HB20 2011</p>
          <p className="text-gray-400">Price Paid: 17,149</p>
          <p className="text-gray-400">
            Current Price:{" "}
            <span className="text-red-500 font-semibold">10,607</span>
          </p>
          <p className="text-gray-400">
            Depreciation:{" "}
            <span className="text-red-500 font-semibold">-20%</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
