
function UpdateProfile() {
  return (
    <div className="h-screen w-full flex justify-center bg-[#fcf5f3]">
      {/* Form Container */}
      <div className="flex items-center justify-center">
        <form className="flex flex-col gap-5 sm:w-fit md:w-100 max-w-md">
          <h1 className="text-2xl font-bold mb-2">Update Profile</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="p-5 border border-gray-400 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="p-5 border border-gray-400 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="p-5 border border-gray-400 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="p-5 rounded-md border-none bg-teal-500 hover:bg-teal-700 text-white font-bold cursor-pointer"
          >
            <a href="/profile">Update</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
