import React, { Component } from "react";

export default class CustomApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("your favorite flavor is " + this.state.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select
            multiple={true}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="pineapple">pineapple</option>
            <option value="coconut">coconut</option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="papaya">papaya</option>
          </select>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
