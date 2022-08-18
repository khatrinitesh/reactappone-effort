import React, { createContext } from "react";
import ChildTwo from "./child2";

export const Name = createContext();

export default function ChildOne() {
  return (
    <>
      <Name.Provider>
        <ChildTwo />
      </Name.Provider>
    </>
  );
}
