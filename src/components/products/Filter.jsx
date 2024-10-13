import React, { useState } from "react";

const Filter = () => {
  return (
    <div className="my-container bg-white rounded-3xl grid grid-cols-5">
      <div className="bg-white flex px-0.5 rounded-full border border-blue-500 overflow-hidden max-w-56">
        <input
          type="email"
          placeholder="Search"
          className="w-full outline-none bg-white pl-5 text-sm"
        />
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm my-1 mx-0.5 rounded-full px-3 py-1.5"
        >
          Search
        </button>
      </div>

      {/* Dropdown menu */}
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg overflow-hidden max-w-56">
        <label htmlFor="category">Category:</label>
        <select
          className="w-full rounded-md text-sm bg-white px-3 py-1 mx-3 my-1 border-gray-400"
          name="category"
          id="category"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg overflow-hidden max-w-56">
        <label htmlFor="category">Category:</label>
        <select
          className="w-full rounded-md text-sm bg-white px-3 py-1 mx-3 my-1 border-gray-400"
          name="category"
          id="category"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg overflow-hidden max-w-56">
        <label htmlFor="category">Brand:</label>
        <select
          className="w-full rounded-md text-sm bg-white px-3 py-1 mx-3 my-1 border-gray-400"
          name="category"
          id="category"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          <option value="audi">BMW</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
