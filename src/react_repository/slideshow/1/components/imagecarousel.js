import React from "react";
import "./imagecarousel.css";
import MyCard from "./mycard";

export default function Imagecarousel() {
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        <MyCard cardno="1" />
        <MyCard cardno="2" />
        <MyCard cardno="3" />
        <MyCard cardno="4" />
        <MyCard cardno="5" />
        <MyCard cardno="6" />
        <MyCard cardno="7" />
        <MyCard cardno="8" />
        <MyCard cardno="9" />
        <MyCard cardno="10" />
      </div>
    </div>
  );
}
