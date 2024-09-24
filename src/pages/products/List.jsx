import React from "react";
import shoe from "../../assets/img/shoe.png";

const ProductList = () => {
  return (
    <div className="max-w-[1200px] m-auto px-4 py-3 border-2 mt-16">
      <h1>Product List</h1>
      <div className="container mx-auto w-72 h-125 mt-8">
        <div className="card rounded-3xl shadow-lg">
          <div className="card-head relative h-72 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-3xl">
            <img
              src={shoe}
              alt="Shoe"
              className="absolute left-0 w-60 mt-12 ml-20"
            />
            <div className="product-detail text-white text-xs py-8 px-5">
              <h2 className="text-lg font-medium tracking-wider pb-2 uppercase">
                Hartbeespoort
              </h2>
              <p className="w-[40%] text-justify">
                Support and Nike Zoom Air come together for a more supportive
                feel with high-speed responsiveness
              </p>
            </div>
            <span className="back-text text-[125px] font-black ml-[-7px] opacity-10">
              NIKE
            </span>
          </div>

          <div className="card-body h-64 bg-white rounded-b-3xl">
            <div className="product-desc px-5">
              <span className="product-title block text-lg font-medium tracking-wider uppercase py-5">
                Hartbee<b>spoort</b>
                <span className="badge text-white bg-green-500 text-xs font-light px-2 py-1 rounded ml-1">
                  New
                </span>
              </span>
              <span className="product-caption block text-xs font-light uppercase">
                Basket Ball Collection
              </span>
              <span className="product-rating text-sm text-yellow-400">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star text-gray-300"></i>
              </span>
            </div>

            <div className="product-properties relative flex justify-between mt-4 px-5">
              <span className="product-size">
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
              </span>

              <span className="product-color">
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
              </span>

              <span className="product-price absolute top-0 left-0 bg-green-500 text-white text-xl font-light px-5 py-2 rounded-lg shadow-lg">
                USD<b>23,453</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
