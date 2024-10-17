import mockData from "../mockData.json";
import { supabase } from "../client";

export default function RealEstate() {

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full">
      <h2 className="text-2xl font-bold mb-4">Real Estate</h2>
      <ul className="space-y-4">
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">Home in Charlotte</p>
          <p className="text-gray-400">Price Paid: 535,329</p>
          <p className="text-gray-400">
            Current Price:{" "}
            <span className="text-green-500 font-semibold">623,607</span>
          </p>
          <p className="text-gray-400">
            Appreciation:{" "}
            <span className="text-green-500 font-semibold">20%</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
