import React, { useState, useEffect } from "react";

export default function CustomApp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (!response.ok) {
        throw new Error(`sorrry something went wrong`);
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setErr(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const btnRemove = (id) => {
    const finalData = users.filter((item) => item.id !== id);
    setUsers(finalData);
  };

  if (loading) {
    return <div>Please wait for sometime</div>;
  }
  if (err) {
    return <div>{err}</div>;
  }
  return (
    <>
      {users.map((user, i) => {
        return (
          <div key={i}>
            <h3>{user.title}</h3>
            <p>{user.body}</p>
            <button onClick={() => btnRemove(user.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
