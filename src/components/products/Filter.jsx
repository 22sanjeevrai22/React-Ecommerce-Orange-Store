import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  setLimit,
  setSort,
} from "../../redux/products/productSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const { limit, sort, filters } = useSelector((state) => state.products.query);
  const categories = useSelector((state) => state.products.categories);
  console.log("cat3", categories);

  function filterByName(value) {
    dispatch(setFilters({ name: value }));
  }

  function filterByCategory(value) {
    dispatch(setFilters({ category: value }));
  }

  function setSortQuery(sort) {
    dispatch(setSort(sort));
  }

  function setProductValue(limit) {
    const parsedLimit = parseInt(limit);
    dispatch(setLimit(parsedLimit));
  }
  return (
    <div className="my-container bg-white rounded-3xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-3 py-1.5">
      {/* Search Field  */}
      <div className="bg-gray-50 flex px-0.5 rounded-3xl border border-blue-500 overflow-hidden max-w-56">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-white pl-5 text-sm"
          onChange={(e) => filterByName(e.target.value)}
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
          type="text"
          className="w-full rounded-md text-sm bg-gray-50 px-3 py-1 mx-3 my-1 border border-gray-300"
          name="category"
          id="category"
          onChange={(e) => filterByCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown menu for Sorting  */}
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg max-w-56">
        <label htmlFor="sort">Sort:</label>
        <select
          className="w-full rounded-md text-sm bg-gray-50 px-3 py-1 mx-3 my-1 border border-gray-300"
          name="sort"
          id="sort"
          value={sort}
          onChange={(e) => setSortQuery(e.target.value)}
        >
          <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
          <option value={JSON.stringify({ price: 1 })}>
            Price: Low to High
          </option>
          <option value={JSON.stringify({ price: -1 })}>
            Price: High to Low
          </option>
        </select>
      </div>
      <div className="text-sm text-gray-400 flex justify-center items-center pl-3 rounded-lg max-w-56">
        <label htmlFor="limit">Limit:</label>
        <select
          className="w-full rounded-md text-sm bg-gray-50 px-3 py-1 mx-3 my-1 border border-gray-300"
          name="limit"
          id="limit"
          value={limit}
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
