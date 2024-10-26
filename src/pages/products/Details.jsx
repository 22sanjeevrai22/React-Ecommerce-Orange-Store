import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/products";

function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const params = useParams();
  console.log("paramss", params);

  useEffect(() => {
    setLoading(true);

    getProductById(params.id)
      .then((response) => {
        console.log("this is response", response);

        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response.data);
        setLoading(false);
      });
  }, [params.id]);

  console.log("this is product", product);

  return (
    <>
      <div className="my-container flex items-center gap-5 justify-between">
        <div className="h-[80vh] flex-1 p-4 rounded-md">
          <img
            className="h-[80%] object-cover mx-auto"
            src={product.url}
            alt="product_url"
          />
          <div className="preview grid grid-cols-4">
            <img className="w-10 h-10 rounded-sm"></img>
          </div>
        </div>
        <div className="h-[80vh] flex-1">hehe</div>
      </div>
    </>
  );
}

export default ProductDetails;
