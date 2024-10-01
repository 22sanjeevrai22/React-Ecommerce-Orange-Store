import ProductForm from "../../components/products/Form";
import addProductImage from "../../assets/img/addProduct.png";
import orangeStore from "../../assets/img/orangeStore.png";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
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
            ADD PRODUCT DETAILS
          </h1>
          <img
            src={addProductImage}
            alt={orangeStore}
            className="mx-auto w-32 h-32"
          />
          <ProductForm />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
