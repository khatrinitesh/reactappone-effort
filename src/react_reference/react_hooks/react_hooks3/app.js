import React, { useState, useEffect } from "react";

export default function CustomApp() {
  return (
    <div>
      <CustomState />
    </div>
  );
}

const CustomState = () => {
  const [username, setUserName] = useState("");
  const [age, setAge] = useState("");

  const displayText = `hello ${username}, your year of birth is ${
    new Date().getFullYear() - age
  }`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "age") {
      setAge(value);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <input
          type="text"
          value={age}
          name="age"
          onChange={handleChange}
          placeholder="Enter your age"
        />
        {username && age && <p>{displayText}</p>}
      </div>
    </>
  );
};
