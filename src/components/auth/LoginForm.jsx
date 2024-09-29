import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { REGISTER_ROUTE } from "../../constants/routes";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../../constants/regex";
import { login } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/auth/authSlice";
import { loginUser } from "../../redux/auth/authAction";

function LoginForm() {
  // const { name, ref, onChange, onBlur } = register("email");
  // const { name, ref, onChange, onBlur } = register("password");
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function submitForm(data) {
    dispatch(loginUser(data));
  }

  return (
    <>
      <div className="h-[30rem] w-[22rem] bg-white rounded-3xl">
        <form
          className="form flex flex-col items-center justify-center h-full w-full"
          onSubmit={handleSubmit(submitForm)}
        >
          <RiAccountCircleFill className="text-gray-400 block text-8xl" />
          <h1 className="text-gray-400">Login to Your Account</h1>
          <div className="relative text-gray-500">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <input
              className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-gray-200 border focus:outline-none focus:border-orange-500"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: EMAIL_REGEX,
                  message: "Invalid email address",
                },
              })}
            />
            <p className="absolute left-4 text-sm top-[85%] text-red-600">
              {errors.email?.message}
            </p>
          </div>

          <div className="relative text-gray-500">
            <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            {showPassword ? (
              <FaEyeSlash
                onClick={handleShowPassword}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 hover:text-gray-700 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={handleShowPassword}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 hover:text-gray-700 cursor-pointer"
              />
            )}

            <input
              className="mx-1 py-2 h-12 px-10 my-3 rounded-2xl bg-gray-200 border focus:outline-none focus:border-orange-500"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message:
                    "Password length must be greater than eight characters",
                },
              })}
            />
            <p className="absolute text-sm left-4 top-[85%] text-red-600">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="inline-block mt-5 py-3 px-10 bg-gradient-to-r from-orange-400 to-orange-600 text-sm text-white font-bold rounded-xl hover:cursor-pointer hover:shadow-xl"
          >
            Login
          </button>
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
    </>
  );
}

export default LoginForm;
