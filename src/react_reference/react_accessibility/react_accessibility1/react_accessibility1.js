import React, { createRef } from "react";

export default class CustomApp extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = createRef();
  }

  btnRef() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <form onClick={this.btnRef}>
        <input type="text" ref={this.textInput} />
        <button>Submit</button>
      </form>
    );
  }
}
