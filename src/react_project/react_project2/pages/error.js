import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <div className="error_content">
      <h3>Page not found</h3>
      <button onClick={goBack}>Return to homepage</button>
    </div>
  );
}
