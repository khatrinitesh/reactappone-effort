import React from "react";

export default function CustomApp(props) {
  const isLoggedIn = props.isLoggedIn;
  return <div>{isLoggedIn ? "nitesh" : "sameet"}</div>;
}
