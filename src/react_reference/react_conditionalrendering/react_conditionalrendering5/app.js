import React from "react";

export default function CustomApp() {
  return (
    <div>
      <Loging />
    </div>
  );
}

var isLogged = false;

function Loging() {
  if (isLogged === true) {
    return <h1>nitesh khatri</h1>;
  } else {
    return <h1>sameet khatri</h1>;
  }
}
