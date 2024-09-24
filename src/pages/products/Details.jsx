import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const productParams = useParams();
  console.log("productParams");
  return (
    <>
      <h1>{`The id of product is : ${productParams.id}`}</h1>
    </>
  );
}

export default ProductDetails;
