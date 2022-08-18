import React from "react";
import {
  increment,
  decrement,
  selectCount,
} from "../redux1/reducer/counterslice";
import { useDispatch, useSelector } from "react-redux";

export default function CustomApp() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Add</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Subtract</button>
    </div>
  );
}
