import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import ProductCard from "../../components/products/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../../redux/products/productActions";

const ProductList = () => {
  const state = useSelector((state) => state.products);
  const { products, loading, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  console.log("this is productList");

  return (
    <>
      {loading ? (
        <Spinner className="mx-auto" />
      ) : (
        <div className="bg-gray-100">
          <div className="my-container max-w-[1200px] mx-auto px-4 py-2 z-1">
            <Link
              to="add"
              className="float-right mr-16 mt-5 py-3 px-10 bg-gradient-to-r from-green-400 to-green-700 text-sm text-white rounded-xl hover:cursor-pointer hover:shadow-xl"
            >
              Add Product <GoPlus className="inline-block" />
            </Link>
            <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-16">
              {products.map((product) => (
                <ProductCard id={product._id} key={product._id} {...product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
