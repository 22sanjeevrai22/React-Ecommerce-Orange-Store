import React, { useEffect, useState } from "react";
import Product from "../../components/products/Product";
import { getProducts } from "../../api/products";
import Spinner from "../../components/svgs/Spinner";

const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((response) => {
        setProductList(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log("this is", productList);

  return (
    <>
      {loading ? (
        <Spinner className="mx-auto" />
      ) : (
        <div>
          <div className="my-container rounded-xl bg-gray-10 max-w-[1200px] mx-auto px-4 py-2 shadow-lg z-1">
            <div className="grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-16">
              {productList.map((product) => (
                <Product id={product._id} key={product._id} {...product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
