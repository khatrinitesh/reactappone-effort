import { responsiveFontSizes } from "@material-ui/core";
import { ErrorSharp } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Banner from "../components/banner";

export default function Service() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!res.ok) {
        throw new Error("sorry something went wrong");
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setErr(`err.message`);
      setLoading(false);
    }
  };

  const btnRemove = (id) => {
    const finalData = users.filter((item) => item.id !== id);
    setUsers(finalData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <div className="content">
      <Banner bannerTitle={"Service"} bannerDesc={"Lorem Ipsum"} />
      {users.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button onClick={() => btnRemove(item.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
