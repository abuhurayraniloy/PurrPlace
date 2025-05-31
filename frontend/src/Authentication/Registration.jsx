import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../lib/apiRequest";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = form.username;
    const password = form.password;
    const email = form.email;
    const confirm_password = form.confirm_password;
    // console.log(username,password,email);
    if (!username || !email || !password || !confirm_password) {
      setError("All fields are required");
      return;
    }
    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex bg-[url('/bg.avif')]">
      {/* Form Section */}
      <div className="flex-[3] h-full flex items-center justify-center">
        <form className="flex flex-col gap-5 w-[300px]" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-white bg-teal-600 m-1 p-3 self-center rounded-lg">
            Create an Account
          </h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-5 border border-gray-400 rounded-md bg-white"
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="p-5 border border-gray-400 rounded-md bg-white"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-5 border border-gray-400 rounded-md bg-white"
            onChange={handleChange}
          />
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            className="p-5 border border-gray-400 rounded-md bg-white"
            onChange={handleChange}
          />
          {/* Password match checker message */}
          {error && <span className="text-red-500 text-sm">{error}</span>}
          {isLoading && (
            <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
              <svg
                className="animate-spin h-26 w-26 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          )}
          <button
            className="p-5 mb-10 rounded-md border-none bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#BED9D8] disabled:cursor-not-allowed"
            disabled={
              !form.username ||
              !form.email ||
              !form.password ||
              !form.confirm_password ||
              isLoading
            }
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
