import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/banner";

export default function Home() {
  const nav = useNavigate();
  function BtnNav() {
    nav("/");
  }
  return (
    <div className="error_content">
      <Banner
        bannerTitle={"404 page not found"}
        bannerDesc={
          "Aute aliqua adipisicing magna nostrud voluptate incididunt aliquip laborum. Aute deserunt aliquip exercitation enim cillum veniam sit ea sit proident. Deserunt eu nulla cupidatat ad Lorem. Irure anim ad incididunt reprehenderit aute aliqua consectetur occaecat adipisicing esse excepteur est. Quis duis ad ad cupidatat dolore enim officia commodo."
        }
      />
      <button onClick={BtnNav}>Return to homepage</button>
    </div>
  );
}
