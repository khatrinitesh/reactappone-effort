import React, { useContext } from "react";
import { isTemplateSpan } from "typescript";
import { Name } from "./child1";

export default function ChildTwo() {
  const user = [
    { id: 1, fname: "nitesh", lname: "khatri", age: 33 },
    { id: 2, fname: "sameet", lname: "khatri", age: 40 },
    { id: 3, fname: "urvashi", lname: "khatri", age: 64 },
    { id: 4, fname: "arvind", lname: "khatri", age: 67 },
  ];
  return (
    <>
      <Name.Consumer>
        {() => (
          <>
            {user.map((item) => {
              return (
                <div key={item.id}>
                  <h3>{item.fname.concat(" ", item.lname).toUpperCase()}</h3>
                  <p>{item.age}</p>
                </div>
              );
            })}
          </>
        )}
      </Name.Consumer>
    </>
  );
}
