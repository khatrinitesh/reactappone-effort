import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function Home() {
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [users, setUsers] = useState([]);

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
    } catch (error) {
      setErr(`err.message`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const btnToggle = () => {
    setIsActive(!isActive);
  };

  const btnRemove = (id) => {
    const finalData = users.filter((item) => item.id !== id);
    setUsers(finalData);
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

  if (loading) {
    return <div>please wait for sometime</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <div className="content">
      <Banner bannerTitle={"Home"} bannerDesc={"Lorem Ipsum"} />
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>

      <button
        onClick={btnToggle}
        className={isActive ? "btn btn-primary" : "btn btn-success"}
      >
        {isActive ? "btn-primary" : "btn-success"}
      </button>
      {isActive ? "primary" : "success"}

      {users.map((user, i) => {
        return (
          <div className="card" key={i}>
            <h3>{user.title}</h3>
            <p>{user.body}</p>
            <button onClick={() => btnRemove(user.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
