import { supabase } from "../client";

export default function ModalContent({ onClose }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Get the authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.error("Error fetching user:", userError.message);
      return;
    }

    const userId = user?.id; // Get the user's ID

    // Insert data with the user's ID
    const { data, error } = await supabase.from("transactions").insert([
      {
        ticket: formJson.ticket, // Matches 'ticket' field
        transaction_type: formJson["trade-option"], // Matches 'transaction_type' field
        quantity: parseFloat(formJson.quantity), // Matches 'quantity' field and converts string to float
        transaction_date: formJson.date, // Matches 'transaction_date' field
        price_paid: parseFloat(formJson.price), // Matches 'price_paid' field and converts string to float
        user_id: userId, // Add the user's ID as a foreign key
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      console.log("Data inserted successfully:", data);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-10 relative">
        <h1 className="text-xl font-semibold mb-4">Enter Manual</h1>

        <form method="post" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Ticket
              <input
                type="text"
                name="ticket"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Price
              <input
                type="float"
                name="price"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Quantity
              <input
                type="float"
                name="quantity"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Date
              <input
                type="date"
                name="date"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>
          <ul className="w-full flex gap-4 mb-4 justify-center">
            <li>
              <input
                type="radio"
                id="sell-option"
                name="trade-option"
                className="hidden peer"
                value="sell"
              />
              <label
                for="sell-option"
                className="block w-24 p-3 text-center text-white bg-red-500 border-2 border-transparent rounded-lg cursor-pointer peer-checked:scale-110 peer-checked:border-3 peer-checked:border-stone-950 peer-checked:bg-red-600 peer-checked:font-bold hover:bg-red-700"
              >
                Sell
              </label>
            </li>

            <input
              type="radio"
              id="buy-option"
              name="trade-option"
              className="hidden peer"
              value="buy"
            />
            <label
              for="buy-option"
              className="block w-24 p-3 text-center text-white bg-green-500 border-2 border-transparent rounded-lg cursor-pointer peer-checked:transform peer-checked:scale-110 peer-checked:border-3 peer-checked:border-stone-950 peer-checked:bg-green-600 peer-checked:font-bold hover:bg-green-700"
            >
              Buy
            </label>
          </ul>
          <button
            type="submit"
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full hover:bg-gray-600 focus:outline-none"
          >
            Submit Form
          </button>
        </form>

        <button
          onClick={onClose}
          className="text-gray-600 mt-4 underline focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
}
