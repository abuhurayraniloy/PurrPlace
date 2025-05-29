import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.css'

import Home from "../src/HomePage/Home";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import Login from "./Authentication/Login"
import Register from "./Authentication/Registration";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
