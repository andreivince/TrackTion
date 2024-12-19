import { useState } from "react";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";

export default function ModalSignIn({ onClose }) {
let navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
  }

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-lg shadow-lg p-6 w-96 z-10 relative">
        <h1 className="text-xl font-semibold mb-4">Sign In</h1>

        <form method="post" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Email
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Password
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded w-full hover:bg-gray-600 focus:outline-none"
          >
            Login
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
