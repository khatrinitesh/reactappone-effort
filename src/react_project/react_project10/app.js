import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./custom.scss";

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Error from "./pages/error";

import CustomMain from "./main";

export default function app() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomMain />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
