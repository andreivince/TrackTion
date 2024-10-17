import mockData from "../mockData.json";
import { supabase } from "../client";

export default function Loans() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full">
      <h2 className="text-2xl font-bold mb-4">Loans</h2>
      <ul className="space-y-4">
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">Home Loan - Bank A</p>
          <p className="text-gray-400">Loan Amount: $200,000</p>
          <p className="text-gray-400">
            Interest Rate:{" "}
            <span className="text-green-500 font-semibold">3.5%</span>
          </p>
          <p className="text-gray-400">
            Term: <span className="text-green-500 font-semibold">30 years</span>
          </p>
        </li>
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">Car Loan - Bank B</p>
          <p className="text-gray-400">Loan Amount: $20,000</p>
          <p className="text-gray-400">
            Interest Rate:{" "}
            <span className="text-green-500 font-semibold">5.0%</span>
          </p>
          <p className="text-gray-400">
            Term: <span className="text-green-500 font-semibold">5 years</span>
          </p>
        </li>
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-xl">Personal Loan - Bank C</p>
          <p className="text-gray-400">Loan Amount: $10,000</p>
          <p className="text-gray-400">
            Interest Rate:{" "}
            <span className="text-green-500 font-semibold">7.2%</span>
          </p>
          <p className="text-gray-400">
            Term: <span className="text-green-500 font-semibold">3 years</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
