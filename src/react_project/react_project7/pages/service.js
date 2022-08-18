import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function Service() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("sorry something went wrong");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
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
    return <div>please wait for sometime</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="content">
      <Banner bannerTitle={"Service"} bannerDesc={"Lorem Ipsum"} />

      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>

      <button
        onClick={btnToggle}
        className={isActive ? "btn btn-primary" : "btn btn-success"}
      >
        {isActive ? "Btn Primary" : "Btn Success"}
      </button>
      {isActive ? "nitesh" : "sameet"}

      {users.map((val, id) => {
        return (
          <div key={id}>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            <button onClick={() => btnRemove(val.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
