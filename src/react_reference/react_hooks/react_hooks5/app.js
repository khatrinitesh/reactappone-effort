import React, { useState, useEffect } from "react";

export default function ExampleOne(val, delay) {
  const [debounceVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, val]);
  return debounceVal;
}
