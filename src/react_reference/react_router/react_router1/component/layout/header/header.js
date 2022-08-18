import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Header</h2>
      <Link to="/">Home</Link>|<Link to="/about">About</Link>|
      <Link to="/contact">Contact</Link>
    </header>
  );
}
