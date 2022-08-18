import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navg = useNavigate();

  const handleBack = () => {
    navg("/");
  };

  return (
    <div className="content">
      <h3>page not found</h3>
      <button onClick={handleBack}>Return to homepage</button>
    </div>
  );
}
