import React from "react";
import shoe from "../../assets/img/shoe.png";
import { IoCart, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="w-72 max-h-125 z">
      <div className="card rounded-3xl shadow-lg mt-8 shadow-red-200 hover:shadow-red-300 hover:shadow-lg">
        <div className="card-head relative h-72 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-3xl">
          <img
            src={shoe}
            alt="Shoe"
            className="absolute left-0 w-64 mt-20 ml-16"
          />
          <div className="product-detail text-white text-xs py-8 px-5">
            <h2 className="text-lg font-large tracking-wider py-4 uppercase">
              Hartbeespoort
            </h2>
            <p className="w-[45%] text-justify">
              Support and Nike Zoom Air come together for a more supportive feel
              with high-speed responsiveness
            </p>
          </div>
          {/* <span className="back-text text-[125px] font-black ml-[-7px] opacity-10">
              NIKE
            </span> */}
        </div>

        <div className="card-body bg-white rounded-b-3xl">
          <div className="product-desc px-5 pt-4">
            <span className="product-title block text-lg font-medium tracking-wider uppercase">
              <b>heartbeespoort</b>
            </span>
            <span className="product-caption block text-xs font-medium uppercase">
              Basket Ball Collection
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
                  USD<b>23,453</b>
                </div>
                <div className="product-price w-1/2 text-center content-center text-lg bg-teal-500 rounded-r-lg shadow-lg line-through">
                  USD<b>24,000</b>
                </div>
              </div>
              <Link to={prod}>
                <span className="product-price flex justify-center items-center mt-3 mx-auto bg-orange-500 my-2 h-10 text-white text-xl font-light rounded-lg shadow-lg hover:bg-orange-700 hover:cursor-pointer">
                  Add to Cart
                  <IoCart className="ml-3 text-2xl" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
