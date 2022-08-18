import React from "react";

export default class CustomApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      login: "",
    };
  }

  handleChange(e) {
    this.setState({
      login: e.target.value,
    });
  }

  handleSignUp() {
    alert(`Welcome board, ${this.state.login}`);
  }
  render() {
    return (
      <div>
        <Dialog
          title="Mars exploration program"
          description="How should we refer to you?"
        />
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign me up</button>
      </div>
    );
  }
}

function Dialog({ title, description, children }) {
  return (
    <FancyBorder color="blue">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {children}
    </FancyBorder>
  );
}

function FancyBorder({ color, children }) {
  return <div className={"fancyBorder fancyBorder-" + color}>{children}</div>;
}
