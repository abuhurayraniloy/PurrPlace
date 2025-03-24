import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";


function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;


  return (
    <nav className="h-20 flex justify-between items-center px-10 bg-white shadow-md">
      { /* Left Section */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 font-bold text-lg">
            <img src="/logo.png" alt="Logo" className="w-9 md:w-18" />
            <span className="hidden md:inline">PurrPlace</span>
          </a>
        </div>

        {/* Center Section */}
        <div className="hidden sm:flex gap-15 justify-center flex-grow">
          <a href="/" className="transition hover:scale-105">
            Home
          </a>
          <a href="/about" className="transition hover:scale-105">
            About
          </a>
          <a href="/contact" className="transition hover:scale-105">
            Contact
          </a>
          <a href="/owner-list" className="transition hover:scale-105">
            Hotel Owner
          </a>
        </div>
      <div className="flex items-center gap-6 ">
        {user ? (
          <div className="flex items-center gap-5 justify-around font-bold ">
            <div className=" flex items-center gap-5 cursor-pointer">
              {/* <img
              src=""
              alt="User"
              className="w-10 h-10 rounded-full object-cover mr-4"
            /> */}
              <CgProfile className="w-9 h-10 md:w-14 md:h-16 hidden sm:inline" />
              <span className="hidden sm:inline ">Niloy </span>
            </div>
            <Link
              to="/profile"
              className="relative px-4 py-2 bg-green-400 text-white rounded-md cursor-pointer hidden md:inline"
            >
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                3
              </div>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/" className="py-2 px-4 border border-gray-300 rounded-md">
              Sign in
            </a>
            <a
              href="/"
              className="py-2 px-4 bg-yellow-400 text-white rounded-md"
            >
              Sign up
            </a>
          </>
        )}


        {/* Mobile Menu Icon */}
        <div className="sm:hidden z-50">
          <img
            src="/menu.png"
            alt="Menu"
            className="w-9 h-9 cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>


        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-1/2 bg-black text-white flex flex-col items-center justify-center text-xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
        >
          <a href="/" className="py-3">
            Home
          </a>
          <a href="/" className="py-3">
            About
          </a>
          <a href="/" className="py-3">
            Contact
          </a>
          <a href="/" className="py-3">
            Agents
          </a>
          <a href="/" className="py-3">
            Sign in
          </a>
          <a href="/" className="py-3">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;



