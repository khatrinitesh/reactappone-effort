import React, { useState } from "react";

export default function CustomApp() {
  const [name, setName] = useState("nitesh");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Enter Name" />
      {name}
    </div>
  );
}
