import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/HomePage/Home";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import ListPage from "./ListPage/ListPage";
import SinglePost from './SinglePostPage/SinglePost';
import Profile from './ProfilePage/Profile';
import NewPost from './NewPostPage/NewPost';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/lists" element={<ListPage />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
