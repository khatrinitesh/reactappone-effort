import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// BELOW PAGES
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import Error from "./pages/error";

// BELOW LAYOUT
import Main from "./main";

// BELOW SCSS STYLING
import "./custom.scss";

export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
