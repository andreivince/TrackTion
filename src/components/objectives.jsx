import React, { useState } from "react";
import mockData from "../mockData.json";
import { supabase } from "../client";

export default function Objectives() {
  const [isOpen, setIsOpen] = useState(false); // state to toggle dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <button
        id="dropdownRadioHelperButton"
        onClick={toggleDropdown} // Handle click event to toggle dropdown
        className="text-white bg-white-700 hover:bg-white-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Objectives{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && ( // Conditionally render the dropdown based on isOpen state
        <div
          id="dropdownRadioHelper"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRadioHelperButton"
          >
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-4"
                    name="helper-radio"
                    type="radio"
                    value=""
                    className="w-4 h-4"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="helper-radio-4"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>High Return</div>
                    <p
                      id="helper-radio-text-4"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      This objective it's 100% drive to increase your wealth.
                    </p>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-5"
                    name="helper-radio"
                    type="radio"
                    value=""
                    className="w-4 h-4"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="helper-radio-5"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>Retirement</div>
                    <p
                      id="helper-radio-text-5"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      This objective will focus in increasing dividends and having a easy retirement.
                    </p>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-6"
                    name="helper-radio"
                    type="radio"
                    value=""
                    className="w-4 h-4"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    htmlFor="helper-radio-6"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>Entrepeuner</div>
                    <p
                      id="helper-radio-text-6"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      You want to open new business, please this a extreme option.
                    </p>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
