import React, { useRef } from "react";

export default function CustomApp() {
  const ref = useRef();
  return (
    <div>
      <FancyButton ref={ref}>Click me</FancyButton>
    </div>
  );
}

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="fancyButton">
      {props.children}
    </button>
  );
});
