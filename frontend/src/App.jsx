import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './index.css'

import Home from "../src/HomePage/Home";
import Footer from './Components/Footer'
import Navbar from "./Components/Navbar";
import Login from "./Authentication/Login"
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
