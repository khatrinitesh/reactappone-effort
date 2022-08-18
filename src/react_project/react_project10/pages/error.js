import React from "react";
import Banner from "../components/banner";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const nav = useNavigate();

  const btnNav = () => {
    nav("/");
  };
  return (
    <div className="error_content">
      <Banner
        bannerTitle={"404 page not found"}
        bannerDesc={
          "Ea sint esse consequat Lorem nisi proident fugiat excepteur amet."
        }
      />
      <button onClick={btnNav}>Return to Homepage</button>
    </div>
  );
}
