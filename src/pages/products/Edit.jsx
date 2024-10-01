import ProductForm from "../../components/products/Form";
import addProductImage from "../../assets/img/addProduct.png";
import orangeStore from "../../assets/img/orangeStore.png";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/products";
import { toast } from "react-toastify";

const EditProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState([]);
  console.log("this is edit params", params);

  async function getProductDetail() {
    try {
      const response = await getProductById(params.id);
      setProduct(response.data);
      console.log("The details of edited product inside try is", product);
    } catch (error) {
      toast(error.response.data, {
        autoClose: 2000,
        className: "red-background",
        hideProgressBar: true,
      });
    }
  }
  console.log("The details of edited product is", product);

  useEffect(() => {
    getProductDetail();
  }, [params.id]);

  function handleNavigate() {
    navigate(-1);
  }
  return (
    <>
      <div className="my-container flex bg-gray-200 items-center justify-center">
        <div className="w-full lg:w-[36rem] m-20 p-16 rounded-3xl bg-white">
          <div
            onClick={handleNavigate}
            className="inline-block pl-4 pr-5 py-1 items-center mb-6 ml-1 border-2 rounded-xl text-gray-400 cursor-pointer"
          >
            <MdOutlineArrowBack className="inline-block mr-2" />
            Back
          </div>
          <h1 className="text-center font-medium text-3xl text-orange-400">
            EDIT PRODUCT DETAILS
          </h1>
          <img
            src={addProductImage}
            alt={orangeStore}
            className="mx-auto w-32 h-32"
          />
          <ProductForm product={product} />
        </div>
      </div>
    </>
  );
};

export default EditProduct;
