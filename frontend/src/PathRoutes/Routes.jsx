import Navbar from "../Components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Footer from "../Components/Footer";
function Layout() {
  return (
    <div className="h-full w-full">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="min-h-screen w-full flex flex-col max-w-full">
        <Navbar />
        <div className="flex-1 w-full mt-2">
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    );
  }
}

export { Layout, RequireAuth };
