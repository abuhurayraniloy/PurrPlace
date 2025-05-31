import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/HomePage/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import ListPage from "./ListPage/ListPage";
import SinglePost from "./SinglePostPage/SinglePost";
import Profile from "./ProfilePage/Profile";
import UpdateProfile from "./ProfileUpdatePage/UpdateProfile";
import Login from "./Authentication/Login";
import Register from "./Authentication/Registration";
import { Layout,RequireAuth } from "./PathRoutes/Routes";
import NewPostPage from "./NewPostPage/NewPost";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/lists",
          element: <ListPage />,
        },
        {
          path: "/single-post",
          element: <SinglePost />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <UpdateProfile />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
