import React, { useState, useEffect } from "react";

export default function CustomApp() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/posts");
      if (!response.ok) {
        throw new Error("sorry something went wrong");
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(`error.message`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Please wait for sometime</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {users.map((val, i) => {
        return (
          <div key={i}>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
          </div>
        );
      })}
    </div>
  );
}
