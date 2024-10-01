import ProductForm from "../../components/products/Form";

const AddProduct = () => {
  return (
    <>
      <div className="my-container flex items-center justify-center">
        <div className="w-full lg:w-[36rem] m-20 p-16 rounded-3xl bg-gray-300">
          <h1 className="text-center font-medium text-3xl text-orange-400 mb-12">
            Enter the product details
          </h1>

          <ProductForm />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
