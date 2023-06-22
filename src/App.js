import React from "react";
import Navbar from "./components/Navbar";

import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/UpcomingServices";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
