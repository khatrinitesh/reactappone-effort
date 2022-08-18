import React from "react";

export default function CustomApp() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("you clicked submit.");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
