import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../api/products";
import Spinner from "../../components/Spinner";
import { IoCart } from "react-icons/io5";
import { MdOutlineArrowBack } from "react-icons/md";

function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const previewImageContainerRef = useRef(null);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  console.log("paramss", params);

  const placeholderImages = [
    product?.url,
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/3373724/pexels-photo-3373724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/40739/mobile-phone-smartphone-tablet-white-40739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  async function getProductFromId() {
    setLoading(true);
    try {
      const response = await getProductById(params.id);
      const productData = response.data;
      setProduct(productData);
      setPreviewImage(productData?.url || placeholderImages[1]);
    } catch (error) {
      console.log(
        "Error fetching data:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductFromId();
  }, [params.id]);

  function handleNavigate() {
    navigate(-1);
  }

  console.log("this is product details page..", product);
  if (loading) return <Spinner />;
  if (!product)
    return (
      <p className="flex items-center justify-center">Product not found.</p>
    );

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

  function handleDecrease() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }

  function handleIncrease() {
    setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : 10));
  }
  return (
    <>
      <div className="my-container ">
        <div
          onClick={handleNavigate}
          className="inline-block pl-4 pr-5 py-1 items-center ml-5 mt-4 border-2 rounded-xl text-gray-400 cursor-pointer"
        >
          <MdOutlineArrowBack className="inline-block mr-2" />
          Back
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-between">
          <div className="h-[84vh] w-[80%] lg:w-[42%] p-4 ">
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
          <div className="h-[80vh] w-[80%] lg:w-[55%] p-12 rounded-2xl content-center">
            <h2 className="text-gray-700 my-4">{product.brand}</h2>
            <h1 className="text-5xl font-bold my-4">{product.name}</h1>
            <h4 className="text-gray-700 my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              dignissimos alias dicta, voluptatem quis eaque voluptatum impedit
              quod nulla doloribus labore quibusdam vel sapiente consequuntur.
            </h4>
            <div className="text-2xl font-semibold mt-4">
              ${product.price * 0.9}
              <span className="bg-black font-normal content-center text-lg ml-6 text-white px-2 rounded-md align-middle">
                -10%
              </span>
            </div>
            <h4 className="line-through mb-2 text-gray-700 font-lg">
              ${product.price}
            </h4>
            <div className="my-4 inline-flex bg-gray-300 rounded-md font-medium">
              <span
                onClick={handleDecrease}
                className={`text-orange-800 px-4 py-1 rounded-l-md cursor-pointer transition-all hover:scale-150 ${
                  count === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={count === 1}
              >
                -
              </span>
              <span className="w-8 text-center py-1 font-medium">{count}</span>
              <span
                onClick={handleIncrease}
                className={`text-orange-800 px-4 py-1 rounded-r-md cursor-pointer transition-all hover:scale-150 ${
                  count === 10 ? "cursor-not-allowed opacity-50" : ""
                }`}
              >
                +
              </span>
            </div>
            <div className="w-56">
              <span className="product-price flex justify-center items-center mt-2 mx-auto bg-orange-500 h-10 text-white text-xl font-light rounded-lg shadow-lg hover:bg-orange-700 cursor-pointer">
                Add to Cart
                <IoCart className="ml-3 text-2xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
