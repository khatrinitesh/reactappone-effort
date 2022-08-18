import React, { useState, useEffect } from "react";

export default function Custom() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("sorry, something went wrong");
      }
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setErr(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

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
      {users.map((val, i) => {
        const { title, body } = val;
        return (
          <div key={i} className="card">
            <h3 className="headtitle">{title}</h3>
            <p className="body">{body}</p>
            <button
              className="btn btn-primary"
              onClick={() => btnRemove(val.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
