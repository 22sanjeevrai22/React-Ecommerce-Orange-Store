import React from "react";
import Product from "../../components/products/Product";
import ProductCarousel from "./Carousel";
import "../../assets/css/style.css";

const ProductList = () => {
  return (
    <div className="bg-yellow-100">
      <div className="container rounded-xl max-w-[1200px] mx-auto px-4 py-2 shadow-lg z-1">
        <div className="hero-section mt-8 gap-4 flex h-[80vh]">
          <ProductCarousel />
        </div>
        <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-24">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
