import React from "react";
import Banner from "../components/banner";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navg = useNavigate();

  function handleBack() {
    navg("/");
  }
  return (
    <div className="content">
      <Banner bannerTitle={"Error"} bannerDesc={"404 page page not found"} />
      <button onClick={handleBack}>return to homepage</button>
    </div>
  );
}
