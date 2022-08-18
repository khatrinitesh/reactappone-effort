import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CustomApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const btnRemove = (id) => {
    const FinalData = posts.filter((item) => item.id !== id);
    setPosts(FinalData);
  };
  return (
    <div>
      {posts.map((val) => {
        return (
          <div className="card" key={val.id}>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            <button onClick={() => btnRemove(val.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}
