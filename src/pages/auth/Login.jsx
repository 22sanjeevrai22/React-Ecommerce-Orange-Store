import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { REGISTER_ROUTE } from "../../constants/routes";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between h-[80vh]">
        <div
          className="w-[60%] h-fill bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center p-6 content-center"
          style={{ clipPath: "circle(100% at 0 50%)" }}
        >
          <div className=" text-left">
            <h1 className="text-6xl font-bold uppercase">
              Welcome to Orange Store{" "}
              <span className="text-green-700 text-9xl leading-9">.</span>
            </h1>
            <h2 className="text-2xl mt-2 uppercase">
              "Where every deal is ripe for the picking"
            </h2>
          </div>
        </div>
        <div className="w-[40%] flex items-center justify-center">
          <form className="form flex flex-col items-center content-center">
            <RiAccountCircleFill className="text-gray-500 block text-8xl" />
            <div className="relative  w-72">
              <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-gray-200 border focus:outline-none focus:border-orange-500"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="relative w-72">
              <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              {showPassword ? (
                <FaEyeSlash
                  onClick={handleShowPassword}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={handleShowPassword}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                />
              )}

              <input
                className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-gray-200 border focus:outline-none focus:border-orange-500"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="inline-block mt-5 py-3 px-10 bg-gradient-to-r from-orange-400 to-orange-600 text-sm text-white font-bold rounded-xl hover:cursor-pointer hover:shadow-xl">
              Login
            </div>
            <h3 className="text-gray-500 mt-3">
              New User ?
              <Link
                to={REGISTER_ROUTE}
                className="text-orange-600 underline cursor-pointer ml-2"
              >
                Register
              </Link>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
