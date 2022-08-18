import React, { useState, useEffect } from "react";
import CustomDebounce from "./app";

const DATA = ["bike", "dog", "coin", "cat", "shop", "turtle"];

export default function CustomFinal() {
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");

  const deb = CustomDebounce(text, 500);

  useEffect(() => {
    const d = DATA.filter((el) => el.toLocaleLowerCase().includes(deb));
    setResults(d);
  }, [deb]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {results.length > 0 ? (
        results.map((el, i) => <div key={i}>{el}</div>)
      ) : (
        <div>no results</div>
      )}
    </div>
  );
}
