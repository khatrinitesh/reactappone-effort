import React from "react";

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

export default function CustomApp() {
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
