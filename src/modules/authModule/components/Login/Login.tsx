import { FaCheckCircle, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import useLogin from "../../../../hooks/useLogin.ts";
import {
  emailValidation,
  passwordValidation,
} from "../../../../validation/validation.ts";

const Login = () => {
  const { errors, handleSubmit, onSubmit, register } = useLogin();

  return (
    <div className="text-white  my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full relative">
          <label htmlFor="email">Registered email address</label>
          <input
            type="text"
            id="email"
            className="py-3 px-12 w-full bg-transparent rounded-lg border-2 my-2 border-white focus:bg-transparent"
            placeholder="Type your email"
            {...register("email", emailValidation)}
          />
          <span className="absolute top-[2.8rem] left-0 flex items-center pl-5 pr-2">
            <MdEmail className="text-[1.5em]" />
          </span>
        </div>
        {errors.email && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            {errors.email.message}
          </div>
        )}
        <div className=" mt-12 mb-1 relative">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="py-3 px-12 w-full bg-transparent rounded-lg border-2  my-2 border-white"
            placeholder="Type your password"
            {...register("password", passwordValidation)}
          />
          <span className="absolute top-[2.8rem] left-0  flex items-center pl-5">
            <FaKey className="text-[1.5em]" />
          </span>
        </div>
        {errors.password && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
            role="alert"
          >
            {errors.password.message}
          </div>
        )}
        <div className="flex-col flex justify-center items-center md:justify-between md:flex-row gap-5 mt-7">
          <button className="bg-white px-10 py-4 rounded-lg text-black font-bold flex gap-2 items-center">
            Sign In
            <FaCheckCircle className="text-[1.5em]" />
          </button>
          <div>
            Forgot password?
            <Link to="/forget-password" className="text-[#C5D86D]">
              Click here?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;