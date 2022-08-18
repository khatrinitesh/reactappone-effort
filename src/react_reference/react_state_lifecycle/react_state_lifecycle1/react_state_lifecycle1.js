import React from "react";

export default function CustomApp() {
  return (
    <div>
      <Clock date={new Date()} />
    </div>
  );
}

function Clock(props) {
  return (
    <>
      <h2>{props.date.toLocaleTimeString()}</h2>
    </>
  );
}
