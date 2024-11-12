import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLimit } from "../../redux/products/productSlice";

const Filter = () => {
  const dispatch = useDispatch();

  function setProductValue(limit) {
    console.log("Limit", limit);
    const parsedLimit = parseInt(limit);
    dispatch(setLimit(parsedLimit));
  }
  return (
    <div className="my-container bg-white rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-3 py-1.5">
      {/* Search Field  */}
      <div className="bg-gray-50 flex px-0.5 rounded-3xl border border-blue-500 overflow-hidden max-w-56">
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
      {/* Dropdown menu for Category */}
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg max-w-56">
        <label htmlFor="category">Category:</label>
        <select
          className="w-full rounded-md text-sm bg-gray-50 px-3 py-1 mx-3 my-1 border border-gray-300"
          name="category"
          id="category"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      {/* Dropdown menu for Sorting  */}
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg max-w-56">
        <label htmlFor="sort">Sort:</label>
        <select
          className="w-full rounded-md text-sm bg-gray-50 px-3 py-1 mx-3 my-1 border border-gray-300"
          name="sort"
          id="sort"
        >
          <option value="">Latest</option>
          <option value="">Low to High</option>
          <option value="">High to Low</option>
        </select>
      </div>
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg max-w-56">
        <label htmlFor="limit">Limit:</label>
        <select
          className="w-full rounded-md text-sm bg-gray-50 px-3 py-1 mx-3 my-1 border border-gray-300"
          name="limit"
          id="limit"
          onChange={(e) => setProductValue(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
