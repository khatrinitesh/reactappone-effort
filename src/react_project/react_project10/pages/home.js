import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function Home() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const btnToggle = () => {
    setIsActive(!isActive);
  };

  const btnInc = () => {
    setCount((c) => c + 1);
  };
  const btnDec = () => {
    setCount((c) => c - 1);
  };
  const btnReset = () => {
    setCount(0);
  };
  return (
    <div className="inner_content">
      <Banner
        bannerTitle={"Home page"}
        bannerDesc={
          "Ea sint esse consequat Lorem nisi proident fugiat excepteur amet."
        }
      />
      <div className="count_block">
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>
        <span>{count}</span>
      </div>
      <div className="condition_block">
        <button
          onClick={btnToggle}
          className={isActive ? "btn btn-primary" : "btn btn-success"}
        >
          {isActive ? "Primary" : "Success"}
        </button>
        {isActive ? <Nitesh /> : <Sameet />}
      </div>
    </div>
  );
}

function Nitesh() {
  return (
    <>
      <h3>Nitesh Khatri</h3>
    </>
  );
}
function Sameet() {
  return (
    <>
      <h3>Sameet Khatri</h3>
    </>
  );
}
