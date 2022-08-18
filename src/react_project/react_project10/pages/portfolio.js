import React from "react";
import Banner from "../components/banner";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const nav = useNavigate();

  const btnNav = () => {
    nav("/");
  };
  return (
    <div className="inner_content">
      <Banner
        bannerTitle={"Portfolio page"}
        bannerDesc={
          "Ea sint esse consequat Lorem nisi proident fugiat excepteur amet."
        }
      />
      <button onClick={btnNav}>Click to Homepage</button>
    </div>
  );
}
