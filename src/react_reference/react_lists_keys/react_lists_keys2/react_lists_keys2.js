import React from "react";

export default function CustomApp(props) {
  const numbers = props.numbers;
  const ListItem = numbers.map((number) => <li>{number}</li>);
  return (
    <div>
      <ul>{ListItem}</ul>
    </div>
  );
}
