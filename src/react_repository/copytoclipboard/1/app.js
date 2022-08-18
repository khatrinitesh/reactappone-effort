import React, { useState } from "react";

export default function CustomApp() {
  return (
    <div>
      <CopyClipboard />
    </div>
  );
}

function CopyClipboard(timeout, children) {
  const [disable, setDisable] = useState(false);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    setDisable(true);
  };

  setTimeout(() => {
    setDisable(false);
  }, timeout);

  return <>{children && [disable, copyText]}</>;
}
