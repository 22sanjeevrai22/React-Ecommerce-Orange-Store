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
      <div className="my-container flex items-center justify-between">
        <div className="h-20 flex-1">
          <img className="" src={product.url} alt="product_url" />
        </div>
        <div className="h-20 flex-1">hehe</div>
      </div>
    </>
  );
}

export default ProductDetails;
