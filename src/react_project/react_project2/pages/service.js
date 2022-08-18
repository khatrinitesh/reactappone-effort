import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function Service() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [users, setUsers] = useState([]);

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error(`Sorry something went wrong`);
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const btnInc = () => {
    setCount((c) => c + 1);
  };
  const btnDec = () => {
    setCount((c) => c - 1);
  };
  const btnReset = () => {
    setCount(0);
  };

  const btnToggle = () => {
    setIsActive(!isActive);
  };

  if (loading) {
    return <div>loading...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <div className="content">
      <Banner bannerTitle={"Service"} bannerDesc={"Lorem Ipsum"} />
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>
      <button onClick={btnToggle}>Toggle</button>
      {isActive && <Nitesh title="nitesh" desc="Lorem Ipsum" />}
      {users.map((val, i) => {
        return (
          <div key={i}>
            <h3>{val.title}</h3>
            <p>{val.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function Nitesh({ title, desc }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
