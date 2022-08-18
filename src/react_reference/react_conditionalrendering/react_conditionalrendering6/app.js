import React from "react";

export default function CustomApp() {
  return (
    <div>
      <Example />
    </div>
  );
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      inputText: "",
      mode: "view",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  handleSave() {
    this.setState({
      text: this.state.inputText,
      mode: "view",
    });
  }

  handleEdit() {
    this.setState({
      mode: "edit",
    });
  }
  render() {
    if (this.state.mode === "view") {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <button onClick={this.handleEdit}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Text: {this.state.text}</p>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.inputText}
          />
          <button onClick={this.handleSave}>Save</button>
        </div>
      );
    }
  }
}
