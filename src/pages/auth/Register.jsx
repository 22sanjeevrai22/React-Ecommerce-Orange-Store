import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  return (
    <div className="">
      <div className="max-w-[1200px] mx-auto bg-gray-200">
        <div className="flex flex-col lg:flex-row justify-between">
          <div
            className="lg:w-[60%] h-[90vh] bg-gradient-to-r from-orange-400 to-orange-600 text-white text-center p-6 content-center"
            style={{ clipPath: "circle(100% at 0 50%)" }}
          >
            <div className="text-left w-4/5">
              <h1 className="text-5xl lg:text-6xl font-bold uppercase">
                Welcome to Orange Store
                <span className="text-[#f73131] leading-[1.5rem] text-8xl">
                  .
                </span>
              </h1>
              <h2 className="text-4xl mt-2 font-cursive">
                "Where every deal is ripe for the picking"
              </h2>
            </div>
          </div>
          <div className="lg:w-[40%] h-[85vh] flex items-center justify-center">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
