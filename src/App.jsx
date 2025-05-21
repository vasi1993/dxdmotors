import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";

import Categorii from "./pages/Categorii/Categorii";
import Products from "./pages/Products/Products";
import CerereOferta from "./pages/CerereOferta/CerereOferta";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <main role="main" id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoriipiese" element={<Categorii />} />
          <Route path="/products" element={<Products />}>
            <Route path=":productsCategorii" element={<Products />} />
          </Route>
          <Route path="/cerere" element={<CerereOferta />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
