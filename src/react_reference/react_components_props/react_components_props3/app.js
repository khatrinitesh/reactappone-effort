import React from "react";

export default function CustomApp() {
  return (
    <div>
      <Job salary={1000} position="senior sde" company="amazon" />
      <Job salary={2000} position="Junior  sde" company="google" />
      <Job salary={3000} position="project manager" company="flipkart" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};
