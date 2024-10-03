import React, { useState } from "react";
import shoe from "../../assets/img/shoe.png";
import { IoCart, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../api/products";
import Modal from "../Modal";
import { toast } from "react-toastify";
import { getProductsThunk } from "../../redux/products/productActions";

const ProductCard = (props) => {
  const { id, name, brand, category, price, image } = props;
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function removeProduct() {
    setIsOpen(true);
  }

  async function confirmDelete() {
    try {
      await deleteProduct(id);
      dispatch(getProductsThunk());
      toast(`${name} deleted successfully.`, {
        autoClose: 2000,
        className: "green-background",
        hideProgressBar: true,
      });
    } catch (error) {
      toast(error.response.data, {
        autoClose: 2000,
        className: "red-background",
        hideProgressBar: true,
      });
    } finally {
      setIsOpen(false);
    }
  }

  console.log("The id of Product Card:", id);
  return (
    <div className="w-72 max-h-125 z">
      <div className="card rounded-3xl shadow-sm mt-8 shadow-red-200 hover:shadow-red-200 hover:shadow-lg hover:scale-[101%] hover:transition-all">
        <div className="card-head relative h-72 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-3xl">
          <img
            src={image ? image : shoe}
            alt="Shoe"
            className="absolute left-0 w-64 mt-20 ml-16"
          />
          <div className="product-detail text-white text-xs py-2 ml-5">
            <div className="flex justify-around">
              <h2 className="font-semibold text-lg tracking-wider py-2 uppercase w-3/5">
                {category}
              </h2>
              {user && user.roles && user.roles.includes("ADMIN") ? (
                <div className="w-2/5 flex justify-center items-center gap-2">
                  <Link to={`edit/${id}`} title="Edit">
                    <FaEdit className="w-5 h-5 hover:cursor-pointer hover:scale-110" />
                  </Link>
                  <Link title="Delete" onClick={removeProduct}>
                    <MdDeleteForever className="w-6 h-6 hover:cursor-pointer hover:scale-110" />
                  </Link>
                </div>
              ) : null}
            </div>
            <p className="w-[45%] text-justify">
              {/* {description.substring(0, 120)} */}
            </p>
          </div>
          {/* <span className="back-text text-[125px] font-black ml-[-7px] opacity-10">
              NIKE
            </span> */}
        </div>

        <div className="card-body bg-white rounded-b-3xl">
          <div className="product-desc px-5 pt-4">
            <span className="product-title h-8 leading-none block text-lg font-medium tracking-wider uppercase">
              <b>{name}</b>
            </span>
            <span className="product-caption block text-xs font-medium uppercase mt-2">
              {brand}
            </span>
            <span className="product-rating text-sm text-yellow-500 flex py-1">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar className="fa fa-star text-gray-300" />
            </span>
          </div>

          <div className="product-properties px-5 py-4">
            {/* <span className="product-size">
                <h4 className="text-xs font-medium uppercase mb-2">Size</h4>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="#"
                      className="text-xs bg-gray-200 p-2 rounded-full"
                    >
                      7
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs bg-gray-200 p-2 rounded-full"
                    >
                      8
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs bg-gray-200 p-2 rounded-full"
                    >
                      9
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs bg-orange-600 p-2 rounded-full text-white"
                    >
                      10
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs bg-gray-200 p-2 rounded-full"
                    >
                      11
                    </a>
                  </li>
                </ul>
              </span> */}

            {/* <span className="product-color">
                <h4 className="text-xs font-medium uppercase mb-2">Colour</h4>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="#"
                      className="w-4 h-4 bg-orange-600 rounded-full relative"
                    >
                      <span className="absolute border border-orange-600 w-6 h-6 rounded-full -top-1 -left-1"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-4 h-4 bg-green-500 rounded-full"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="w-4 h-4 bg-yellow-400 rounded-full"
                    ></a>
                  </li>
                </ul>
              </span> */}
            <div className="product-desc">
              <div className="price text-white text-xl font-light flex h-10 my-2">
                <div className="product-price w-1/2 text-center content-center align bg-green-500 rounded-l-lg shadow-lg">
                  USD<b>{Math.floor(price * 0.8)}</b>
                </div>
                <div className="product-price w-1/2 text-center content-center text-xl bg-teal-500 rounded-r-lg shadow-lg line-through">
                  USD<b>{price}</b>
                </div>
              </div>
              <Link to={id}>
                <span className="product-price flex justify-center items-center mt-3 mx-auto bg-orange-500 my-2 h-10 text-white text-xl font-light rounded-lg shadow-lg hover:bg-orange-700 cursor-pointer">
                  Add to Cart
                  <IoCart className="ml-3 text-2xl" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Modal
        label="You are about to delete a product"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={`Are you sure you want to delete ${name}? This process cannot be undone.`}
        deleteButton={
          <button
            type="button"
            onClick={confirmDelete}
            className="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500"
          >
            Delete
          </button>
        }
      />
    </div>
  );
};

export default ProductCard;
