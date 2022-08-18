import React from "react";

export default function CustomApp() {
  return (
    <div>
      <SplitPane left={<Contact />} right={<Chat />} />
    </div>
  );
}

function SplitPane(props) {
  return (
    <div className="container splitpane d-flex row">
      <div className="splitpane_left col">{props.left}</div>
      <div className="splitpane_right col">{props.right}</div>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}
function Chat() {
  return (
    <div>
      <h2>Chat</h2>
    </div>
  );
}
