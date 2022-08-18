import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/banner";

export default function Error() {
  const navg = useNavigate();

  const handleBack = () => {
    navg("/");
  };
  return (
    <div className="content">
      <Banner bannerTitle={"404 page not found"} bannerDesc={"Lorem ipsum"} />
      <button onClick={handleBack}>return to homepage</button>
    </div>
  );
}
