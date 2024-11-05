import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/products";
import Spinner from "../../components/Spinner";

function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const previewImageContainerRef = useRef(null);
  const params = useParams();
  console.log("paramss", params);

  async function getProductFromId() {
    setLoading(true);
    try {
      const response = await getProductById(params.id);
      const productData = response.data;
      setProduct(productData);
      setPreviewImage(productData?.url || placeholderImages[0]);
    } catch {
      console.error("Error fetching data:", error.response.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductFromId();
  }, [params.id]);

  console.log("this is product", product);
  if (loading) return <Spinner />;
  if (!product)
    return (
      <p className="flex items-center justify-center">Product not found.</p>
    );

  const placeholderImages = [
    product?.url,
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/3373724/pexels-photo-3373724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  function handlePreviewImage(image) {
    setPreviewImage(image);
  }

  function scrollLeft() {
    const element = previewImageContainerRef.current;
    element.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  }
  function scrollRight() {
    const element = previewImageContainerRef.current;
    element.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="my-container flex items-center gap-16 justify-between">
        <div className="h-[84vh] w-[42%] p-4">
          <img
            className="h-[80%] object-cover mx-auto rounded-2xl"
            src={previewImage}
            alt={product.name || "Product image"}
          />
          {/* Preview Mini Images  */}

          <div className="relative w-[86%]  mt-8 mx-auto">
            <button
              onClick={scrollLeft}
              className="absolute -left-6 top-1/2 -translate-y-1/2 h-16 bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-l-md z-10"
            >
              &#8249;
            </button>
            <button
              onClick={scrollRight}
              className="absolute -right-6 top-1/2 -translate-y-1/2 h-16 bg-gray-300 hover:bg-gray-400 text-black p-2 rounded-r-md z-10"
            >
              &#8250;
            </button>
            <div
              ref={previewImageContainerRef}
              className="flex gap-4 justify-items-center rounded-md overflow-x-hidden scroll-smooth"
            >
              {placeholderImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-16 border-lg h-16 rounded-md object-cover cursor-pointer ${
                    image === previewImage
                      ? "border-2 border-orange-300 opacity-70"
                      : ""
                  }`}
                  onClick={() => handlePreviewImage(image)}
                ></img>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[80vh] w-[55%] p-4 bg-gray-100 rounded-2xl flex justify-center items-center">
          {" "}
          <div className="">
            <></>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
