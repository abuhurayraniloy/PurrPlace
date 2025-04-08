import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/HomePage/Home";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import ListPage from "./ListPage/ListPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/lists" element={<ListPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
