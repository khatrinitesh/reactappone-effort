import React from "react";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "nitesh",
  lastName: "khatri",
};

const name = "nitesh";
const element = <h1>Hello, {name}!</h1>;
const box = <>{formatName(user)}</>;
const alert = "alert alert-danger";

export default function CustomApp() {
  return (
    <div className={alert}>
      {element} {box}
    </div>
  );
}
