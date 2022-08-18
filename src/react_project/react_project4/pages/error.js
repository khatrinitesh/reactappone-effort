import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navg = useNavigate();

  function handleBack() {
    navg("/");
  }

  return (
    <div>
      <h3>Page not found</h3>
      <button onClick={handleBack}>Return to homepage</button>
    </div>
  );
}
