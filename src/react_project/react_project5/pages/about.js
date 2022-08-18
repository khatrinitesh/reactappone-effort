import React from "react";
import Banner from "../components/banner";

function About() {
  const active = true;
  return (
    <div className="content">
      <Banner bannerTitle={"About"} bannerDesc={"Lorem Ipsum"} />
      <h3 className={`btn ${active ? "btn-primary" : "btn-danger"}`}>
        heading
      </h3>
    </div>
  );
}

export default About;
