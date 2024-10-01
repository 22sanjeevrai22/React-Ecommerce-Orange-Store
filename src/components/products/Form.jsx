import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { addProduct } from "../../api/products";
import { toast } from "react-toastify";

const ProductForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const [loading, setLoading] = useState(false);
  const { errors } = formState;

  async function submitForm(data) {
    setLoading(true);
    try {
      const response = await addProduct(data);
      toast("Successfully added product", {
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
      <div className="relative text-white-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-white-200 border focus:outline-none focus:border-orange-500"
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
      <div className="relative text-white-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-white-200 border focus:outline-none focus:border-orange-500"
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
      <div className="relative text-white-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-white-200 border focus:outline-none focus:border-orange-500"
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
      <div className="relative text-white-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-white-200 border focus:outline-none focus:border-orange-500"
          type="text"
          id="price"
          placeholder="Price"
          {...register("price", {
            required: "Product price is required",
          })}
        />
        <p className="absolute left-4 text-sm top-[85%] text-red-600">
          {errors.price?.message}
        </p>
      </div>
      {/* <div className="relative text-white-500">
        <input
          className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-white-200 border focus:outline-none focus:border-orange-500"
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
      </div> */}

      <button
        type="submit"
        className="inline-block mt-5 py-3 px-10 bg-gradient-to-r from-orange-400 to-orange-600 text-sm text-white font-bold rounded-xl hover:cursor-pointer hover:shadow-xl"
      >
        Login {loading ? <Spinner /> : null}
      </button>
    </form>
  );
};

export default ProductForm;
