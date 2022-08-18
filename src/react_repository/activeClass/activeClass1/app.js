import React, { useState } from "react";

export default function CustomApp() {
  const values = [
    { id: 1, text: "LI-1" },
    { id: 2, text: "LI-2" },
    { id: 3, text: "LI-3" },
    { id: 4, text: "LI-4" },
  ];
  const [activeId, setActiveId] = useState();
  const [isActive, setIsActive] = useState(false);

  const btnToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <button
        onClick={btnToggle}
        className={isActive ? "btn btn-primary" : "btn btn-success"}
      >
        {isActive ? "active" : "inactive"}
      </button>
      <ul>
        {values.map((val) => (
          <li onClick={() => setActiveId(val.id)}>
            {val.text} -- {activeId === val.id ? "Active" : "Inactive"}
          </li>
        ))}
      </ul>
      <ul>
        {values.map((val) => {
          return (
            <li onClick={() => setActiveId(val.id)}>
              {val.text} -- {activeId === val.id ? "active" : "inactive"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
