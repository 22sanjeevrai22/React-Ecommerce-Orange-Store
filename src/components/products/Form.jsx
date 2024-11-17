import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { addProduct, editProduct } from "../../api/products";
import { toast } from "react-toastify";

const ProductForm = ({ product }) => {
  const { register, handleSubmit, formState } = useForm({
    values: product,
  });
  const [loading, setLoading] = useState(false);
  const { errors } = formState;
  const isEditing = product ? true : false;

  async function submitForm(data) {
    setLoading(true);
    try {
      if (isEditing) {
        const response = await editProduct(product._id, data);
        console.log("The response of the edited product", response.data);
      } else {
        const response = await addProduct(data);
        console.log("The response of the added product", response.data);
      }
      toast(`Product ${isEditing ? "updated" : "added"} successfully.`, {
        autoClose: 2000,
        className: "green-background",
        hideProgressBar: true,
      });
    } catch (error) {
      console.log("The error while adding product", error.response.data);
      toast(error.response.data, {
        autoClose: 2000,
        className: "red-background",
        hideProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      className="form flex flex-col items-center justify-center h-full w-full"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="relative text-gray-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl placeholder-gray-400 bg-gray-200 border focus:outline-none focus:border-orange-500"
          type="text"
          id="name"
          placeholder="Name"
          {...register("name", {
            required: "Product name is required",
          })}
        />
        <p className="absolute left-4 text-sm top-[85%] text-red-600">
          {errors.name?.message}
        </p>
      </div>
      <div className="relative text-gray-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl placeholder-gray-400 bg-gray-200 border focus:outline-none focus:border-orange-500"
          type="text"
          id="category"
          placeholder="Category"
          {...register("category", {
            required: "Product category is required",
          })}
        />
        <p className="absolute left-4 text-sm top-[85%] text-red-600">
          {errors.category?.message}
        </p>
      </div>
      <div className="relative text-gray-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl placeholder-gray-400 bg-gray-200 border focus:outline-none focus:border-orange-500"
          type="text"
          id="brand"
          placeholder="Brand"
          {...register("brand", {
            required: "Product brand is required",
          })}
        />
        <p className="absolute left-4 text-sm top-[85%] text-red-600">
          {errors.brand?.message}
        </p>
      </div>
      <div className="relative text-gray-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl placeholder-gray-400 bg-gray-200 border focus:outline-none focus:border-orange-500"
          type="text"
          id="price"
          placeholder="Price"
          {...register("price", {
            required: "Product price is required",
            min: {
              value: 0,
              message: "Price must be positive number",
            },
          })}
        />
        <p className="absolute left-4 text-sm top-[85%] text-red-600">
          {errors.price?.message}
        </p>
      </div>
      <div className="relative text-gray-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 bg-gray-200 rounded-2xl bg-white-200 border focus:outline-none focus:border-orange-500"
          type="url"
          id="image"
          placeholder="Image"
          {...register("image", {
            required: "Product image is required",
          })}
        />
        <p className="absolute left-4 text-sm top-[85%] text-red-600">
          {errors.image?.message}
        </p>
      </div>

      <button
        disabled={loading}
        type="submit"
        className="inline-block mt-5 py-3 px-10 bg-gradient-to-r from-orange-400 to-orange-600 text-sm text-white font-bold rounded-xl hover:cursor-pointer hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-90"
      >
        {isEditing ? "Edit Product" : "Add Product"}
        {loading ? <Spinner className="inline ml-3" /> : null}
      </button>
    </form>
  );
};

export default ProductForm;
