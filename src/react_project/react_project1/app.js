import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import ProjectDisplay from "./pages/projectdisplay";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function CustomApp() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default CustomApp;
