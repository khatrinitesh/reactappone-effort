import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navg = useNavigate();

  function handleClick() {
    navg("/");
  }
  return (
    <div className="error_content">
      <h3>page not found</h3>
      <button onClick={handleClick}>Return to homepage</button>
    </div>
  );
}
