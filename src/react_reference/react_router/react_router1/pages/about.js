import React from "react";
import Layout2 from "../component/layout/layout2";

export default function About() {
  let styleValue = [];
  let status = true;
  if (status === "approved") {
    styleValue.push({ backgroundColor: "blue" });
  } else {
    styleValue.push({ backgroundColor: "black" });
  }

  return (
    <>
      <Layout2>
        <h1 style={styleValue}> About Page</h1>
      </Layout2>
    </>
  );
}
