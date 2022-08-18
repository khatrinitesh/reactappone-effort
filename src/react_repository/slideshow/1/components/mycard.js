import React from "react";
import "./mycard";

export default function MyCard(props) {
  return (
    <>
      <div className="mycard">{props.cardno}</div>
    </>
  );
}
