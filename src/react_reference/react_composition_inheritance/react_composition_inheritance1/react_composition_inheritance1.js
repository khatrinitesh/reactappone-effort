import React from "react";

export default function CustomApp() {
  return (
    <div>
      <WelcomeDialog />
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue" bg="bgred">
      <h1 className="dialog_title">Welcome</h1>
      <p className="dialog_message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color + " " + props.bg}>
      {props.children}
    </div>
  );
}
