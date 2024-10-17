import mockData from "../mockData.json";
import { supabase } from "../client";
import Dividends from "./dividends";
import Gains from "./gains";

export default function Portfolio() {

  return (
    <div className="bg-gray-800 rounded-lg shadow-md text-white w-full">
      <h2 className="text-2xl font-bold p-6">Portfolio</h2>
      <Gains />
      <Dividends />
    </div>
  );
}
