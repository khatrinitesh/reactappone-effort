import React from "react";

export default function SearchBar({ username, setUsername }) {
  const onChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          onChange(e);
        }}
        onKey={(e) => {
          onChange(e);
        }}
        onPaste={(e) => {
          onChange(e);
        }}
      />
    </div>
  );
}
