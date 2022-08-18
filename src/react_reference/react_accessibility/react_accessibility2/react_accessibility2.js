import React, { createRef } from "react";

export default function CustomApp() {
  const inputElement = createRef();
  return (
    <div>
      <CustomTextInput inputRef={inputElement} />
    </div>
  );
}

function CustomTextInput({ inputRef }) {
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}
