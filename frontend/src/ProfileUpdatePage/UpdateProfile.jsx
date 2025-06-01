import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import apiRequest from "../lib/apiRequest";
import UploadWidget from "../Components/UploadWidgets";

function UpdateProfile() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const user = currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);
    if (!user || !user.id) {
      setError("User data is not loaded.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await apiRequest.put(`/users/${user.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      if (res && res.data) {
        // Add a check for res and res.data
        updateUser(res.data);
        navigate("/profile");
      } else {
        setError(
          "API request was successful but did not return expected data."
        );
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-[#e6e1e0] to-[#e4e8a6]">
      {/* Form Container */}
      <div className="flex items-center justify-center shadow-lg rounded-xl bg-white p-8 m-4">
        <form
          className="flex flex-col gap-6 sm:w-fit md:w-100 max-w-md w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold mb-4 text-black text-center">
            Update Profile
          </h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-semibold text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              defaultValue={user?.username}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              defaultValue={user?.email}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          {error && <span className="text-red-500 text-sm">{error}</span>}
          {isLoading && (
            <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50">
              <svg
                className="animate-spin h-16 w-16 text-teal-600"
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
            type="submit"
            className="p-4 rounded-md border-none bg-teal-500 hover:bg-teal-700 text-white font-bold cursor-pointer transition"
          >
            Update
          </button>
        </form>
      </div>
      <div className="flex flex-col  items-center justify-center shadow-lg rounded-xl bg-white p-8 m-4 ml-0">
        <div className="flex flex-col items-center gap-2 mb-4">
          <img
            src={
              avatar[0] ||
              user.avatar ||
              undefined
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-300 bg-gray-100"
          />
          {!avatar[0] && !user.avatar && (
            <CgProfile className="w-24 h-24 text-gray-400 absolute" />
          )}
          <span className="mr-5">Change Profile Picture</span>
          <UploadWidget
            uwConfig={{
              cloudName: "dxnqrwqmd",
              uploadPreset: "purrplace",
              multiple: false,
              maxImageFileSize: 2000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          />
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
