import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.css'

import Home from "../src/HomePage/Home";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
