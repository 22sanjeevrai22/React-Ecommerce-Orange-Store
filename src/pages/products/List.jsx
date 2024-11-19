import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../../components/products/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesThunk,
  getProductsThunk,
} from "../../redux/products/productActions";
import Filter from "../../components/products/Filter";

const ProductList = () => {
  const { products, loading, error, query } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk(query));
    dispatch(getCategoriesThunk());
  }, [dispatch, query]);

  return (
    <>
      {loading ? (
        <Spinner className="mx-auto" />
      ) : (
        <div className="bg-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 py-2 z-1">
            <div className="my-5 flex items-center justify-between mt-28">
              {/* spacing starts here  */}
              <div className="text-5xl uppercase">
                <span className="text-orange-500 font-bold">Our</span>
                <span className="text-green-500 font-bold"> Products</span>
              </div>
              <Link
                to="add"
                className="py-3 px-10 bg-gradient-to-r from-green-400 to-green-700 text-sm text-white rounded-xl hover:cursor-pointer hover:shadow-xl"
              >
                Add Product <GoPlus className="inline-block" />
              </Link>
            </div>
            <Filter />
            {products.length == 0 ? (
              <h2 className="min-h-svh text-center my-12 text-red-400">
                Product Not Found
              </h2>
            ) : (
              <div className="min-h-svh grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-8">
                {products.map((product) => (
                  <ProductCard
                    id={product._id}
                    key={product._id}
                    {...product}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
