import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirm_password
    ) {
      setError("All fields are required");
      return;
    }
    if (form.password !== form.confirm_password) {
      setError("Passwords do not match");
      return;
    }
    // Call your API here, e.g.:
    // await api.register(form);
    // On success:
    navigate("/login");
  };

  return (
    <div className="h-screen flex bg-[url('/bg.avif')]">
      {/* Form Section */}
      <div className="flex-[3] h-full flex items-center justify-center">
        <form className="flex flex-col gap-5 w-[300px]" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-white bg-teal-600 m-1 p-3 self-center rounded-lg">Create an Account</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="p-5 border border-gray-400 rounded-md bg-white"
            value={form.username}
            onChange={handleChange}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="p-5 border border-gray-400 rounded-md bg-white"
            value={form.email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-5 border border-gray-400 rounded-md bg-white"
            value={form.password}
            onChange={handleChange}
          />
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            className="p-5 border border-gray-400 rounded-md bg-white"
            value={form.confirm_password}
            onChange={handleChange}
          />
          {/* Password match checker message */}
          {error && (
            <span className="text-red-500 text-sm">{error}</span>
          )}
          <button
            className="p-5 mb-10 rounded-md border-none bg-teal-600 text-white font-bold cursor-pointer disabled:bg-[#BED9D8] disabled:cursor-not-allowed"
            disabled={
              !form.username ||
              !form.email ||
              !form.password ||
              !form.confirm_password
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
