import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex bg-[url('/bg.avif')]">
      {/* Form Section */}
      <div className="flex items-center justify-center m-auto top-0 left-0 right-0 bottom-0">
        <form className="flex flex-col gap-5 md:w-[300px] sm:w-full backdrop-blur-2xl">
          <h1 className="text-2xl font-bold text-white bg-teal-600 m-1 p-3 self-center rounded-lg">Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-5 border border-gray-400 bg-white rounded-md"
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-5 border border-gray-400 bg-white rounded-md w-full pr-12"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {!showPassword ? (
                // Eye-off icon SVG
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7.5a11.72 11.72 0 012.09-3.36m2.1-2.1A9.956 9.956 0 0112 5c5 0 9.27 3.11 11 7.5a11.72 11.72 0 01-2.09 3.36m-2.1 2.1l-15-15" />
                </svg>
              ) : (
                // Eye icon SVG
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <button
            className="p-5 rounded-md border-none bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#BED9D8] disabled:cursor-not-allowed"
            disabled={false}
          >
            Login
          </button>
          <Link
            to="/register"
            className="text-sm text-gray-300 border-b border-gray-400 w-max hover:text-gray-500 transition duration-200"
          >
            {"Don't"} have an account?
          </Link>
        </form>
      </div>
      {/* Image Section */}
      {/* <div className="flex-[2] bg-[#fcf5f3] flex items-center justify-center">
        <img src="/bg.png" alt="" className="w-full" />
        <p>This a side section for login page text</p>
      </div> */}
    </div>
  );
}

export default Login;
