import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function About() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error("sorry something went wrong");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setErr(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
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

  const btnRemove = (id) => {
    const finalData = users.filter((item) => item.id !== id);
    setUsers(finalData);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }

  return (
    <div>
      <Banner bannerTitle={"About"} bannerDesc={"Lorem Ipsum"} />
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>

      <hr />
      <button
        className={isActive ? "btn btn-primary" : "btn btn-secondary"}
        onClick={btnToggle}
      >
        {isActive ? "hide" : "show"}
      </button>
      {isActive ? "nitesh" : null}

      {users.map((val) => {
        return (
          <div>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            <button onClick={() => btnRemove(val.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
