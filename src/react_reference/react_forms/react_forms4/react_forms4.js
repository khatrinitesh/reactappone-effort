import React, { Component } from "react";

export default class CustomApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberofGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              type="number"
              name="numberofGuests"
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
