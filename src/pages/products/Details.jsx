import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/products";

function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(params.id)
      .then((response) => {
        console.log("this is response", response);

        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log("this is params", params);
  console.log("this is params id", params.id);

  return (
    <>
      <h1>{`The params is : ${params}`}</h1>
      <h1>{`The id of params : ${params.id}`}</h1>
      <h1>{`The id of product is : ${product.id}`}</h1>
      <h1>{`The name of product is : ${product.title}`}</h1>
    </>
  );
}

export default ProductDetails;
