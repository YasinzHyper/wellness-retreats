import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <>
      {
        //Plugins:
        //- @tailwindcss/forms
      }
      <center>
        <h2 className="text-2xl font-bold pt-2">Available Retreats</h2>
      </center>

      <div className="flex my-2 gap-8 items-center justify-center">
        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-1 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-md font-medium p-1"> Date </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
              <div className="w-24 rounded border border-gray-200 bg-white">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    handleChange(date);
                  }}
                />
              </div>
            </div>
          </details>
        </div>

        <div className="relative">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <select
                id="type"
                name="type"
                onChange={handleChange}
                defaultValue={"Type"}
                className="w-28 rounded border-none bg-white overflow-ellipsis focus:ring-0 text-md font-medium p-1"
              >
                <option value="">Type</option>
                <option value="buy">Signature</option>
                <option value="rent">Standalone</option>
              </select>
            </summary>
          </details>
        </div>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            placeholder="Search for a retreat"
            className="w-52 rounded-sm border-gray bg-white overflow-ellipsis focus:ring-0 text-md px-2"
          />
          <button
            onClick={null}
            className="bg-emerald-600 rounded mx-4 px-4 py-2 text-white"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
