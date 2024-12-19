import mockData from "../mockData.json";
import { supabase } from "../client";

export default function TrackTionBot({item}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full">
      <h2 className="text-1xl font-bold mb-4">TrackMan</h2>
      <ul className="space-y-4">
        <li className="bg-gray-700 p-4 rounded-lg">
          <p className="font-semibold text-sm">{item}</p>
        </li>
      </ul>
    </div>
  );
}
