import React, { useEffect, useState } from "react";
import "./style.scss";

export default function CustomApp() {
  return (
    <div>
      <main>
        <Header />
        <div id="container">
          <h1>Simple React Dark Mode.</h1>
          <p>Uses state to set a class on the body if dark mode is enabled.</p>
        </div>
      </main>
    </div>
  );
}

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");

    if (darkMode === true) {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [darkMode]);

  return (
    <header>
      <div
        id="toggle"
        onClick={() =>
          darkMode === false ? setDarkMode(true) : setDarkMode(false)
        }
      >
        <div className="toggle-inner" />
      </div>
    </header>
  );
}
