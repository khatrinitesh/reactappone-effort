import React, { useId } from "react";
import "./custom.css";

export default function CustomApp() {
  return (
    <div>
      <EmailForm />
    </div>
  );
}

const EmailForm = () => {
  const id = useId();

  return (
    <div className="customform">
      <label className="field_label" htmlFor={`${id}-email`}>
        Email
      </label>
      <input className="field_input" id={`${id}-email`} type="text" />
      <label className="field_label" htmlFor={`${id}-name`}>
        Name
      </label>
      <input className="field_input" id={`${id}-name`} type="text" />
    </div>
  );
};
