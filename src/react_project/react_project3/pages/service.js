import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function Service() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [users, setUsers] = useState([]);

  const FetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error(`sorry, something went wrong`);
      }
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (err) {
      setErr(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

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

  const btnRemove = (id) => {
    const finalData = users.filter((item) => item.id !== id);
    setUsers(finalData);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div className="content">
      <Banner bannerTitle={"Service"} bannerDesc={"Lorem Ipsum"} />
      {count}
      <button onClick={btnInc}>Click inc</button>
      <button onClick={btnDec}>Click dec</button>
      <button onClick={btnReset}>Click reset</button>

      <button
        className={isActive ? "btn btn-primary" : "btn btn-success"}
        onClick={btnToggle}
      >
        {isActive ? "hide" : "show"}
      </button>
      {isActive ? "nitesh khatri" : "sameet khatri"}

      {users &&
        users.map((val, i) => {
          return (
            <div key={i}>
              <h3>{val.title}</h3>
              <p>{val.body}</p>
              <button onClick={() => btnRemove(val.id)}>Remove</button>
            </div>
          );
        })}
    </div>
  );
}
