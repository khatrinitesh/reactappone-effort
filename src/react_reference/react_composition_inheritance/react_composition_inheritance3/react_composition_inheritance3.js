import React from "react";

export default function CustomApp() {
  return (
    <div>
      <Dialog
        title="Dialog Title"
        description="Elit labore deserunt duis occaecat culpa et Lorem eiusmod magna irure duis nulla adipisicing Lorem."
      />
    </div>
  );
}

function Dialog({ title, description }) {
  return (
    <div className="dialog_content">
      <h3 className="dialog_title">{title}</h3>
      <p className="dialog_msg">{description}</p>
    </div>
  );
}
