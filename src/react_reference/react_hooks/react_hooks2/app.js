import React, { useState } from "react";

export default function CustomApp() {
  setInterval(funcTime, 1000);

  let initialTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(initialTime);

  function funcTime() {
    const currTime = new Date().toLocaleTimeString();
    setTime(currTime);
  }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={funcTime}>Current Time</button>
    </div>
  );
}
