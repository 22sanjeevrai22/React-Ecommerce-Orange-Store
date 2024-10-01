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

  return (
    <>
      <h1>{`The id : ${product.id}`}</h1>
      <h1>{`The name of product is : ${product.name}`}</h1>
      <h1>{`The category : ${ProductDetails.category}`}</h1>
      <h1>{`The brand of product is : ${product.brand}`}</h1>
    </>
  );
}

export default ProductDetails;
