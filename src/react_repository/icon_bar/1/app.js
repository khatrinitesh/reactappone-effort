import React from "react";
import {
  FaBeer,
  FaAccessibleIcon,
  FaAccusoft,
  FaCcStripe,
} from "react-icons/fa";

export default function CustomApp() {
  return (
    <div>
      <Question />
    </div>
  );
}

class Question extends React.Component {
  render() {
    return (
      <h3>
        {" "}
        Lets go for a <FaBeer />? <FaAccessibleIcon />
        <FaAccusoft />
        <FaCcStripe />
      </h3>
    );
  }
}
