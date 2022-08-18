import React from "react";
import Banner from "../components/banner";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navg = useNavigate();

  const handleBack = () => {
    navg("/");
  };
  return (
    <div className="error_content">
      <Banner
        bannerTitle={"404 error page not found"}
        bannerDesc={"Lorem Ipsum"}
      />
      <button onClick={handleBack}>Return to homepage</button>
    </div>
  );
}
