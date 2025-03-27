import Home from "./HomePage/Home";
import Footer from "./PublicComponents/Footer";
import Navbar from "./PublicComponents/Navbar";

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
